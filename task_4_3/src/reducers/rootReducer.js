import { combineReducers } from 'redux';
import { users } from './users';
import { user } from './user';
import { userAlbums } from './UserDetails/userAlbums';
import { userPosts } from './UserDetails/userPosts';
import { userTodos } from './UserDetails/userTodos';
import { todo } from './todos';
import { post } from './posts';
import { addPost } from './addPost';
import { error } from './error';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  users: users,
  user: user,
  userAlbums: userAlbums,
  userPosts: userPosts,
  userTodos: userTodos,
  todo: todo,
  post: post,
  error: error,
  addPost: addPost,
  form: formReducer,
});