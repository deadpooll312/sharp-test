import React from 'react';
import Team from "./Team";
import './Team.css';

const Index = ({ player, ai }) => {
  return (
    <div className="TeamsItems">
      <Team name="Player" value={player}/>
      <span className="TeamsBorder">:</span>
      <Team name="AI" value={ai}/>
    </div>
  );
};

export default Index;