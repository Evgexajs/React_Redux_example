import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/style.css';

function Head () {

  return (
      <div className="head">
        <div className="head_el"><NavLink to="/posts">Posts</NavLink></div>
        <div className="head_el"><NavLink to="/users">Users</NavLink></div>
        <div className="head_el"><NavLink to="/todos">Todos</NavLink></div>
      </div>
    );
}

export default Head;
