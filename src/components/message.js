import React, {useEffect} from 'react';

export function Message(props) {
  const {message, onClick, type} = props;
  const tm = 3000;

  useEffect(() => {
    setTimeout(onClick, tm);
  }, [message, onClick]);

  return message ? <div
    onClick={onClick}
    className={`alert alert-${type || 'danger'}`}
    role="alert">{message}</div> : null
}
