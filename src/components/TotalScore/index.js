import React from 'react';
import Button from "../Button";
import './TotalScore.css';

const TotalScore = ({ player, ai, X, O, resetClick }) => {
  return (
    <div className="TotalScore">
      <h2>Total Score</h2>
      <div className="TotalScoreContainer">
        <p>Player: <b>{player}</b></p>
        <p>AI: <b>{ai}</b></p>
        <p>Team "X": <b>{X}</b></p>
        <p>Team "O": <b>{O}</b></p>
      </div>
      <Button
        onClick={resetClick}
        title="RESET SCORE"
      />
    </div>
  );
};

export default TotalScore;