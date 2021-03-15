import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

// reducers
import {getCategoryReducer} from './reducers/categoryReducer';
import {getCandidateReducer, getPollsReducer} from './reducers/pollReducers';
import {
  ninVerifyReducer,
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
} from './reducers/userReducer';
import {votingReducer} from './reducers/voteReducer';

const rootReducer = combineReducers({
  category: getCategoryReducer,
  candidates: getCandidateReducer,
  ninDetails: ninVerifyReducer,
  registerUser: userRegisterReducer,
  loginUser: userLoginReducer,
  userDetails: userDetailsReducer,
  getPolls: getPollsReducer,
  postVote: votingReducer,
});

export default store = createStore(rootReducer, applyMiddleware(ReduxThunk));
