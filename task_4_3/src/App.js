import React from 'react';
import './style/style.css';
import UserList from './components/UserList.jsx';
import TodoList from './components/TodoList.jsx';
import PostList from './components/PostsList.jsx';
import Head from './components/Head.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
          <Head />
          <Route path='/users' component={UserList}/>
          <Route path='/todos' component={TodoList}/>
          <Route path='/posts' component={PostList}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
