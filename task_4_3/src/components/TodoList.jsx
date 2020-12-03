import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import '../style/style.css';
import { todosFetchData } from '../actions/todoAction';

function Todos ({fetchData, todos}) {
  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/todos")
  });

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
    todos: state.todo
  };
}

const mapDispatchToProps = {
    fetchData: todosFetchData
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);
