import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  loginWithProvider: (provider: 'google' | 'github') => Promise<boolean>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (email: string, password: string) => {
    set({ isLoading: true });

    try {
      const { data: { user }, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (profile) {
          set({
            user: {
              id: user.id,
              name: profile.name,
              email: user.email!,
              avatar: profile.avatar_url,
              role: profile.role,
            },
            isAuthenticated: true,
          });
          return true;
        }
      }

      set({ isLoading: false });
      return false;
    } catch (error) {
      console.error('Login error:', error);
      set({ isLoading: false });
      return false;
    }
  },

  signup: async (name: string, email: string, password: string) => {
    set({ isLoading: true });

    try {
      const { data: { user }, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name,
          },
        },
      });

      if (signUpError) throw signUpError;

      if (user) {
        const avatar_url = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;

        const { error: profileError } = await supabase
          .from('profiles')
          .upsert(
            {
              id: user.id,
              name,
              avatar_url,
              role: 'free',
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
            {
              onConflict: 'id',
            }
          );

        if (profileError) {
          await supabase.auth.admin.deleteUser(user.id);
          throw profileError;
        }

        set({
          user: {
            id: user.id,
            name,
            email: user.email!,
            avatar: avatar_url,
            role: 'free',
          },
          isAuthenticated: true,
        });

        set({ isLoading: false });
        return true;
      }

      set({ isLoading: false });
      return false;
    } catch (error) {
      console.error('Signup error:', error);
      set({ isLoading: false });
      return false;
    }
  },

  loginWithProvider: async (provider: 'google' | 'github') => {
    set({ isLoading: true });

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
      });

      if (error) throw error;

      set({ isLoading: false });
      return true;
    } catch (error) {
      console.error(`Login with ${provider} error:`, error);
      set({ isLoading: false });
      return false;
    }
  },

  logout: async () => {
    try {
      await supabase.auth.signOut();
      set({ user: null, isAuthenticated: false });
    } catch (error) {
      console.error('Logout error:', error);
    }
  },
}));