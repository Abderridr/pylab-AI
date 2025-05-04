import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  leftIcon,
  className = '',
  type = 'text',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
            {leftIcon}
          </div>
        )}
        <input
          type={isPassword && showPassword ? 'text' : type}
          className={`
            block w-full rounded-md border border-gray-300 shadow-sm
            focus:border-blue-500 focus:ring-blue-500 
            dark:bg-gray-800 dark:border-gray-600 dark:text-white
            ${leftIcon ? 'pl-10' : 'pl-4'} 
            ${isPassword ? 'pr-10' : 'pr-4'} 
            py-2 
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
        {isPassword && (
          <div 
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

export default Input;