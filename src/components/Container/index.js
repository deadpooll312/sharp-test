import React from 'react';
import './Container.css';

const Index = ({ children }) => {
  return (
    <div className="Container">
      {children}
    </div>
  );
};

export default Index;