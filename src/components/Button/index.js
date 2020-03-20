import React from 'react';
import './Button.css';

const Index = ({ onClick, title }) => {
  return (
    <button className="Button" onClick={onClick}>
      {title}
    </button>
  );
};

export default Index;