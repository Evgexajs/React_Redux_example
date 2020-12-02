import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import '../style/style.css';
import { usersFetchData } from '../actions/dataActions';

function mapStateToProps (state) {
  return {
    users: state.data
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(usersFetchData(url))
  }
}

function Users ({fetchData, users}) {
  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/users")
  });

  return (
      <div className="list">
          {users.map((user, index) => {
            return <li key={index}>
              <div>Name is: {user.name}</div>

            </li>
          })}
      </div>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);
