import {apiClient} from '../../api/client';
import {
  NIN_VERIFY_FAIL,
  NIN_VERIFY_REQUEST,
  NIN_VERIFY_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_RESET,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userContants';
import storage from '../storage';

export const verifyNin = (nin) => async (dispatch) => {
  try {
    dispatch({
      type: NIN_VERIFY_REQUEST,
    });

    const {data, ok} = await apiClient.post('/users/details', {nin});

    !ok
      ? dispatch({
          type: NIN_VERIFY_FAIL,
          payload: data,
        })
      : dispatch({
          type: NIN_VERIFY_SUCCESS,
          payload: data,
        });
  } catch (error) {
    dispatch({
      type: NIN_VERIFY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (
  firstName,
  lastName,
  middleName,
  state,
  phoneNumber,
  password,
  nin,
  dob,
) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const {data, ok} = await apiClient.post('/users', {
      firstName,
      lastName,
      middleName,
      state,
      phoneNumber,
      password,
      nin,
      dob,
    });

    !ok
      ? dispatch({
          type: USER_REGISTER_FAIL,
          payload: data.message,
        })
      : dispatch({
          type: USER_REGISTER_SUCCESS,
          payload: data,
        });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (nin, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const {ok, data} = await apiClient.post('/users/login', {nin, password});

    !ok
      ? dispatch({
          type: USER_LOGIN_FAIL,

          payload: data.message,
        })
      : dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: data.token,
        }) && storage.storeToken(JSON.stringify(data.token));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logOut = () => async (dispatch) => {
  await storage.removeToken();
  dispatch({
    type: USER_LOGOUT,
  });
  dispatch({
    type: USER_DETAILS_RESET,
  });
};

export const getUserDetails = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const token = await storage.getToken();

    const {data, ok} = await apiClient.get(
      `/users/profile`,
      {},
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      },
    );

    !ok
      ? dispatch({
          type: USER_DETAILS_FAIL,
          payload: data.message,
        })
      : dispatch({
          type: USER_DETAILS_SUCCESS,
          payload: data.user,
        });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
