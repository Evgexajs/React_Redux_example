import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { usersFetchData } from '../actions/usersAction';
import '../style/style.css';

function Users () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersFetchData())
  });

  const users = useSelector (state => state.users)
  const error = useSelector (state => state.error)

  if (error.length) return <h1>{error}</h1>;
  return (
      <div className="list">
          {users.map((user) => {
            return (
              <li  key={user.id}>
                <div className="users"><NavLink to={'/user/' + user.id}>Name is: {user.name}</NavLink></div>
                <div>Username is: {user.username}</div>
              </li>
          )})}
      </div>
    );
}

export default Users;
