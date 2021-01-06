import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { usersFetchData } from '../actions/usersAction';
import '../style/style.css';

function Users ({fetchData, users, error}) {
  useEffect(() => {
    fetchData()
  });

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

function mapStateToProps (state) {
  return {
    users: state.users,
    error: state.error,
  };
}

const mapDispatchToProps = {
  fetchData: usersFetchData
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);
