import {apiClient} from '../../api/client';
import {
  COUNT_UPDATE_FAIL,
  COUNT_UPDATE_REQUEST,
  COUNT_UPDATE_SUCCESS,
  VOTE_FAIL,
  VOTE_REQUEST,
  VOTE_SUCCESS,
} from '../constants/voteConstants';
import storage from '../storage';

export const vote = (poll_Id, nin, voterId, id) => async (dispatch) => {
  try {
    dispatch({
      type: VOTE_REQUEST,
    });

    const getUser = async () => {
      const data = await storage.getUser();
      return data;
    };

    const user = await getUser();

    const {data, ok} = await apiClient.post(`/vote/${poll_Id}`, {
      nin,
      voterId,
      id,
      user: user.id,
    });

    !ok
      ? dispatch({
          type: VOTE_FAIL,
          payload: data.message,
        })
      : dispatch({
          type: VOTE_SUCCESS,
          payload: data,
        });
  } catch (error) {
    dispatch({
      type: VOTE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const count = (poll_Id) => async (dispatch) => {
  try {
    dispatch({
      type: COUNT_UPDATE_REQUEST,
    });

    const {data, ok} = await apiClient.put(`/vote/${poll_Id}`);

    !ok
      ? dispatch({
          type: COUNT_UPDATE_FAIL,
          payload: data.message,
        })
      : dispatch({
          type: COUNT_UPDATE_SUCCESS,
          payload: data,
        });
  } catch (error) {
    dispatch({
      type: COUNT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
