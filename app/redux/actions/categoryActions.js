import {apiClient} from '../../api/client';

import {
  GET_CATEGORY_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
} from '../constants/CategoryConstants';

export const fetchCategory = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_CATEGORY_REQUEST,
    });

    const category = '/category';

    const {data} = await apiClient.get(category);

    dispatch({
      type: GET_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CATEGORY_FAIL,
      payload: error,
    });
  }
};
