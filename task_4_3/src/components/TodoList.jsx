import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import '../style/style.css';
import { todosFetchData } from '../actions/dataActions';

function mapStateToProps (state) {
  return {
    todos: state.data
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(todosFetchData(url))
  }
}

function Todos ({fetchData, todos}) {
  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/todos")
  });

  return (
      <div className="list">
          {todos.map((todo, index) => {
            return <li key={index}>
              <div>Title is: {todo.title}</div>

            </li>
          })}
      </div>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);
