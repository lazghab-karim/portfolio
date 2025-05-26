import React from 'react';

interface ButtonProps {
  url: string;
  label: string;
  className?: string;
}

const LinkButton: React.FC<ButtonProps> = ({ url, label, className }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={className}>
        {label}
      </div>
    </a>
  );
};

export default LinkButton;
