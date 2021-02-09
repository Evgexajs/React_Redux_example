import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import '../style/style.css';
import { todosFetchData } from '../actions/todoAction';

function Todos () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todosFetchData())
  });

  const todos = useSelector (state => state.todo)
  const error = useSelector (state => state.error)

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

export default Todos;
