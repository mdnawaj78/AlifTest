// src/components/common/Card.jsx
import React from 'react';
import '../../styles/components/Card.css';

const Card = ({
  children,
  variant = 'default',
  hover = false,
  className = '',
  onClick,
  title,
  subtitle,
  footer,
  image,
  loading = false,
}) => {
  const cardClasses = [
    'custom-card',
    `card-${variant}`,
    hover ? 'card-hover' : '',
    onClick ? 'card-clickable' : '',
    loading ? 'card-loading' : '',
    className
  ].filter(Boolean).join(' ');

  if (loading) {
    return (
      <div className={cardClasses}>
        <div className="card-loading-animation">
          <div className="loading-header" />
          <div className="loading-content" />
          <div className="loading-content" />
        </div>
      </div>
    );
  }

  return (
    <div className={cardClasses} onClick={onClick}>
      {image && (
        <div className="card-image">
          <img src={image} alt={title || 'Card image'} />
        </div>
      )}
      <div className="card-content">
        {(title || subtitle) && (
          <div className="card-header">
            {title && <h3 className="card-title">{title}</h3>}
            {subtitle && <p className="card-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="card-body">{children}</div>
        {footer && <div className="card-footer">{footer}</div>}
      </div>
    </div>
  );
};

// Export additional components for more structured usage
export const CardHeader = ({ children, className = '' }) => (
  <div className={`card-header ${className}`}>{children}</div>
);

export const CardBody = ({ children, className = '' }) => (
  <div className={`card-body ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`card-footer ${className}`}>{children}</div>
);

export default Card;