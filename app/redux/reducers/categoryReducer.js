import {
  GET_CATEGORY_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
} from '../constants/CategoryConstants';

export const getCategoryReducer = (state = {category: []}, action) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return {
        loading: true,
        category: [],
      };

    case GET_CATEGORY_SUCCESS:
      return {
        loading: false,
        category: action.payload.categories,
      };

    case GET_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
