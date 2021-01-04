import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import '../style/style.css';
import { todosFetchData } from '../actions/todoAction';

function Todos ({fetchData, todos, error}) {
  useEffect(() => {
    fetchData()
  });

  if (error.length) return <h1>{error}</h1>;
  return (
      <div className="list">
          {todos.map((todo) => {
            return <li key={todo.id}>
              <div>Title is: {todo.title}</div>

            </li>
          })}
      </div>
    );
}

function mapStateToProps (state) {
  return {
    todos: state.todo,
    error: state.error,
  };
}

const mapDispatchToProps = {
    fetchData: todosFetchData
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);
