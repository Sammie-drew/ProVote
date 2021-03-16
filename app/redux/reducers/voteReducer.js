import {
  COUNT_UPDATE_FAIL,
  COUNT_UPDATE_REQUEST,
  COUNT_UPDATE_SUCCESS,
  VOTE_FAIL,
  VOTE_REQUEST,
  VOTE_SUCCESS,
} from '../constants/voteConstants';

export const votingReducer = (state = {}, action) => {
  switch (action.type) {
    case VOTE_REQUEST:
      return {
        loading: true,
      };

    case VOTE_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
      };

    case VOTE_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const countReducer = (state = {}, action) => {
  switch (action.type) {
    case COUNT_UPDATE_REQUEST:
      return {
        loading: true,
      };

    case COUNT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case COUNT_UPDATE_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
