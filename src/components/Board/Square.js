import React from 'react';
import CrossIcon from '../../assets/images/icons/close.svg';
import ZeroIcon from '../../assets/images/icons/zero.svg';

const Square = ({ value, onClick }) => {
  return (
    <div onClick={onClick} className="Square">
      {value === 'O' && <img src={ZeroIcon} alt=""/>}
      {value === 'X' && <img src={CrossIcon} alt=""/>}
    </div>
  );
};

export default Square;