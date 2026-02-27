import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'inline-block text-center font-medium tracking-wide transition-all duration-300 rounded-full';
  
  const variants = {
    primary: 'text-white border-2',
    secondary: 'text-white border-2',
    dark: 'bg-gray-900 text-white hover:bg-gray-800 border-2 border-gray-900',
    outline: 'bg-transparent text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white',
  };

  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  const animationProps = { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } };

  // Inline styles for primary and secondary variants to force the new color with opacity
  const getInlineStyle = () => {
    if (variant === 'primary') {
      return {
        backgroundColor: '#942e06',
        borderColor: '#942e06',
      };
    }
    if (variant === 'secondary') {
      return {
        backgroundColor: '#ffffff',
        color: 'rgba(148, 46, 6, 0.9)',
        borderColor: '#ffffff',
      };
    }
    return {};
  };

  const handleMouseEnter = (e) => {
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = 'rgba(117, 37, 5, 0.9)';
      e.currentTarget.style.borderColor = 'rgba(117, 37, 5, 0.9)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = 'rgba(254, 242, 238, 0.95)';
    }
  };

  const handleMouseLeave = (e) => {
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = '#942e06';
      e.currentTarget.style.borderColor = '#942e06';
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = '#ffffff';
    }
  };

  if (to) {
    return (
      <motion.div {...animationProps} className="inline-block">
        <Link
          to={to}
          className={buttonClasses}
          style={getInlineStyle()}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        style={getInlineStyle()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...animationProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      style={getInlineStyle()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...animationProps}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;