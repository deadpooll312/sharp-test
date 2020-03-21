import React from 'react';
import {useHistory} from 'react-router-dom';

export function redirectPath(path) {
  const history = useHistory();
  history.push(path);
}
