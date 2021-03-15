import {apiClient} from '../../api/client';

import {
  GET_ALL_POLLS_FAIL,
  GET_ALL_POLLS_REQUEST,
  GET_ALL_POLLS_SUCCESS,
  GET_CANDIDATES_FAIL,
  GET_CANDIDATES_REQUEST,
  GET_CANDIDATES_SUCCESS,
} from '../constants/pollConstants';

export const fetchCandidates = (categoryId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_CANDIDATES_REQUEST,
    });

    const candidates = `/polls/category/${categoryId}`;

    const {data, ok} = await apiClient.get(candidates);

    ok
      ? dispatch({
          type: GET_CANDIDATES_SUCCESS,
          payload: data[0],
        })
      : dispatch({
          type: GET_CANDIDATES_FAIL,
          payload: data.message,
        });
  } catch (error) {
    dispatch({
      type: GET_CANDIDATES_FAIL,
      payload: error,
    });
  }
};

export const fetchPolls = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_POLLS_REQUEST,
    });

    const {data, ok} = await apiClient.get('polls');

    ok
      ? dispatch({
          type: GET_ALL_POLLS_SUCCESS,
          payload: data[0],
        })
      : dispatch({
          type: GET_ALL_POLLS_FAIL,
          payload: data.message,
        });
  } catch (error) {
    dispatch({
      type: GET_ALL_POLLS_FAIL,
      payload: error,
    });
  }
};
