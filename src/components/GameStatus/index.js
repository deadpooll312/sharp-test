import React from 'react';
import './GameStatus.css';

const Index = ({ winner, end }) => {
  const setStatusText = () => {
    if (winner) {
      return <span>{`Winner: ${winner}!`}</span>;
    } else if (!winner && end) {
      return <span>It's a draw...</span>
    } else {
      return <span>Your turn!</span>
    }
  };
  
  return (
    <div className="GameStatus">
      {setStatusText()}
    </div>
  );
};

export default Index;