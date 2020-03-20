import React from 'react';
import Button from '../Button';
import './ActionButtons.css';

const Index = ({ end, resetGame, nextGame }) => {
  return (
    <div className="ActionButtons">
      {!end && <Button onClick={resetGame} title="RESET GAME" /> }
      {end && <Button onClick={nextGame} title="START NEXT GAME" /> }
    </div>
  );
};

export default Index;