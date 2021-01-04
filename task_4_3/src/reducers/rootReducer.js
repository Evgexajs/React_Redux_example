import { combineReducers } from 'redux';
import { user } from './users';
import { todo } from './todos';
import { post } from './posts';
import { addPost } from './addPost';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  user: user,
  todo: todo,
  post: post,
  addPost: addPost,
  form: formReducer,
});