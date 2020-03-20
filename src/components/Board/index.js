import React from 'react';
import Square from "./Square";
import './Board.css';

const Index = ({ board, onClick }) => {
  return (
    <div className="Board">
      {board.map(row =>
        row.map((item, index) =>
          <Square
            key={index}
            value={item}
            onClick={event => onClick(event, item)}
          />))
      }
    </div>
  );
};

export default Index;