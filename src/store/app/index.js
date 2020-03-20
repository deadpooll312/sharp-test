import {
  FETCH_MAIN_GAME_DATA_FAILURE,
  FETCH_MAIN_GAME_DATA_SUCCESS, FETCH_SCORE_DATA_FAILURE, FETCH_SCORE_DATA_SUCCESS,
  MAKE_TURN
} from "../constants";

const initialState = {
  ai: null,
  player: null,
  board: [],
  nextMove: null,
  end: null,
  winner: null,
  team: null,
  error: null,
  loading: false,
  scoreData: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case (FETCH_MAIN_GAME_DATA_SUCCESS):
      return {
        ...state,
        ai: action.data.ai,
        player: action.data.player,
        board: action.data.board,
        nextMove: action.data.nextMove,
        end: action.data.end,
        winner: action.data.winner,
        team: action.data.team,
        loading: false
      };
    case (FETCH_MAIN_GAME_DATA_FAILURE):
      return {
        ...state,
        error: action.data
      };
    case (MAKE_TURN):
      return {...state, loading: true};
    case (FETCH_SCORE_DATA_SUCCESS):
      return {
        ...state,
        scoreData: action.data
      };
    case (FETCH_SCORE_DATA_FAILURE):
      return {
        ...state,
        error: action.data
      };
    default:
      return state;
  }
}