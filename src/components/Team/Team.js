import React from 'react';

const Team = ({ name, value }) => {
  return (
    <div className="Team">
      <h3>{name}</h3>
      <span>{value}</span>
    </div>
  );
};

export default Team;