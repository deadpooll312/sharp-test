import React from 'react';

const ScoreItem = ({ date, winner, team }) => {
  return (
    <div className="ScoreItem">
      <span>
        <b>Timestamp</b>: {date}
      </span>
      {winner && <span>
        <b>Winner</b>: {winner}
      </span>}
      {team && <span>
        <b>Winner's team</b>: {team}
      </span>}
      {!winner && !team && <span>
        <b>Game Outcome</b>: Draw
      </span>}
    </div>
  );
};

export default ScoreItem;