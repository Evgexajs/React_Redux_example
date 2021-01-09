import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { userTodosFetchData } from '../../actions/UserDetails/userTodosAction';
import '../../style/style.css';
import checkImg from "../../images/check.png"

function UserTodos ({fetchData, userTodos, error, match}) {
    const userId = parseInt(match.params.id, 10);
    useEffect(() => {
      fetchData(userId)
    });

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

function mapStateToProps (state) {
  return {
    userTodos: state.userTodos,
    error: state.error,
  };
}

const mapDispatchToProps = {
  fetchData: userTodosFetchData
}

export default connect(mapStateToProps,mapDispatchToProps)(UserTodos);