import axios from '../../axios-api';
import {
  FETCH_MAIN_GAME_DATA_FAILURE,
  FETCH_MAIN_GAME_DATA_SUCCESS, FETCH_SCORE_DATA_FAILURE, FETCH_SCORE_DATA_SUCCESS,
  MAKE_TURN
} from "../constants";

export const fetchDataSuccess = data => ({type: FETCH_MAIN_GAME_DATA_SUCCESS, data});
export const fetchDataError = error => ({type: FETCH_MAIN_GAME_DATA_FAILURE, error});
export const makeTurn = () => ({type: MAKE_TURN});
export const fetchScoreDataSuccess = data => ({type: FETCH_SCORE_DATA_SUCCESS, data});
export const fetchScoreDataFailure = error => ({type: FETCH_SCORE_DATA_FAILURE, error});

export const fetchMainGameData = () => {
  return dispatch => {
    return axios.get('/game/').then(
      success => dispatch(fetchDataSuccess(success.data.result)),
      error => dispatch(fetchDataError(error))
    )
  }
};

export const sendTurn = (index) => {
  return dispatch => {
    dispatch(makeTurn());
    
    return axios.post('/game/move', {"index": index}).then(
      success => dispatch(fetchDataSuccess(success.data.result)),
      error => dispatch(fetchDataError(error))
    )
  }
};

export const resetGame = () => {
  return dispatch => {
    return axios.post('/game/reset').then(
      success => dispatch(fetchDataSuccess(success.data.result)),
      error => dispatch(fetchDataError(error))
    )
  }
};

export const nextGame = () => {
  return dispatch => {
    return axios.get('/game/next').then(
      success => dispatch(fetchDataSuccess(success.data.result)),
      error => dispatch(fetchDataError(error))
    )
  }
};

export const fetchScoreData = () => {
  return dispatch => {
    return axios.get('/score').then(
      success => dispatch(fetchScoreDataSuccess(success.data.result)),
      error => dispatch(fetchScoreDataFailure(error))
    )
  }
};

export const resetScore = () => {
  return dispatch => {
    return axios.post('/score/reset').then(
      success => dispatch(fetchScoreDataSuccess(success.data.result)),
      error => dispatch(fetchScoreDataFailure(error))
    )
  }
};