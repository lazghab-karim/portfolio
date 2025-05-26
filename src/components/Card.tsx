import React from 'react';
import '../css/Card.css'
interface CardProps {
  title: string;
  content: string;
  href?: string;
}

const Card: React.FC<CardProps> = ({ title, content, href }) => {
  const innerCard = (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {innerCard}
    </a>
  ) : (
    innerCard
  );
};

export default Card;