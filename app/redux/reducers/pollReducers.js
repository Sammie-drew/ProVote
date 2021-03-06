import {
  GET_ALL_POLLS_FAIL,
  GET_ALL_POLLS_REQUEST,
  GET_ALL_POLLS_SUCCESS,
  GET_CANDIDATES_FAIL,
  GET_CANDIDATES_REQUEST,
  GET_CANDIDATES_SUCCESS,
  GET_POLL_OPTIONS_FAIL,
  GET_POLL_OPTIONS_REQUEST,
  GET_POLL_OPTIONS_SUCCESS,
} from '../constants/pollConstants';

export const getCandidateReducer = (state = {candidates: []}, action) => {
  switch (action.type) {
    case GET_CANDIDATES_REQUEST:
      return {
        loading: true,
        candidates: [],
      };

    case GET_CANDIDATES_SUCCESS:
      return {
        loading: false,
        candidates: action.payload.pollOptions,
      };

    case GET_CANDIDATES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getPollOptionsReducer = (state = {pollOptions: []}, action) => {
  switch (action.type) {
    case GET_POLL_OPTIONS_REQUEST:
      return {
        loading: true,
        pollOptions: [],
      };

    case GET_POLL_OPTIONS_SUCCESS:
      return {
        loading: false,
        pollOptions: action.payload,
      };

    case GET_POLL_OPTIONS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getPollsReducer = (state = {polls: {}}, action) => {
  switch (action.type) {
    case GET_ALL_POLLS_REQUEST:
      return {
        loading: true,
        polls: {},
      };

    case GET_ALL_POLLS_SUCCESS:
      return {
        loading: false,
        polls: action.payload,
      };

    case GET_ALL_POLLS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
