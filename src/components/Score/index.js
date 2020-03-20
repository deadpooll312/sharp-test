import React from 'react';
import moment from "moment";
import ScoreItem from "./ScoreItem";
import './Score.css';

const getCorrectDateFormat = date => {
  return moment(date).format('DD.MM.YYYY, h:mm:ss a');
};

const Index = ({ list }) => {
  return (
    <div className="ScoreItems">
      <h2>All Scores</h2>
      <div className="ScoresContainer">
        {list.length ? list.map((item, index) => (
          <ScoreItem
            key={index}
            date={getCorrectDateFormat(item.ts)}
            team={item.team}
            winner={item.winner}
          />
        )) : <span>No games played</span>}
      </div>
    </div>
  );
};

export default Index;