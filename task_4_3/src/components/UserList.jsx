import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import '../style/style.css';
import { usersFetchData } from '../actions/userAction';

function Users ({fetchData, users}) {
  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/users")
  });

  return (
      <div className="list">
          {users.map((user) => {
            return <li key={user.id}>
              <div>Name is: {user.name}</div>

            </li>
          })}
      </div>
    );
}

function mapStateToProps (state) {
  return {
    users: state.user
  };
}

const mapDispatchToProps = {
  fetchData: usersFetchData
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);
