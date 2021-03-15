import {
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
