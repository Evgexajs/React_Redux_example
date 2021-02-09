import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { userTodosFetchData } from '../../actions/UserDetails/userTodosAction';
import '../../style/style.css';
import checkImg from "../../images/check.png"

function UserTodos ({userId}) {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(userTodosFetchData(userId))
  });

  const userTodos = useSelector (state => state.userTodos)
  const error = useSelector (state => state.error)


    if (error.length) return <h1>{error}</h1>;

    return (
      <div>        
        <div className="todo__header"><h1>Todos</h1></div>
        <div className="todo">
          <div className="todo__checkbox">
            {userTodos.map((userTodo) => {
                return <div className={"todo__do" + (userTodo.completed ? " checked" : "")} key={userTodo.id}>
                      <label>
                          <img className="todo__img" src={checkImg}/>
                          <span className="todo__label">{userTodo.title}</span>
                      </label>
                </div>
            })}
          </div>
        </div>
      </div>
    );
}

export default UserTodos;