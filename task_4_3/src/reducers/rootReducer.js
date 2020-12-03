import { combineReducers } from 'redux';
import { user } from './users';
import { todo } from './todos';
import { post } from './posts';

export default combineReducers({
  user: user,
  todo: todo,
  post: post,
});