import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyle = 'px-4 py-2 rounded-sm font-medium focus:outline-none transition';

  let variantStyle = '';
  switch (variant) {
    case 'primary':
      variantStyle = 'bg-black hover:bg-yellow-500 text-white';
      break;
    case 'secondary':
      variantStyle = 'bg-gray-300 hover:bg-gray-600 text-white';
      break;
    case 'danger':
      variantStyle = 'bg-red-500 hover:bg-red-600 text-white';
      break;
    default:
      break;
  }

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
