import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

const Index = () => {
  return (
    <header className="Header">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/score">Score</NavLink>
    </header>
  );
};

export default Index;