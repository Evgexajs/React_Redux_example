import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { userPostsFetchData } from '../../actions/UserDetails/userPostsAction';
import '../../style/style.css';

function UserPosts ({fetchData, userPosts, error, userId}) {
    useEffect(() => {
      fetchData(userId)
    });

    if (error.length) return <h1>{error}</h1>;

    return (
      <div>
      <div className="user__header"><h1>Posts</h1></div>
        <div className="user__list">
            {userPosts.map((userPost) => {
                return (
                <li  key={userPost.id}>
                    <div>Title: {userPost.title}</div>
                    <div>Body: {userPost.body}</div>
                </li>
            )})}
        </div>
      </div>
    );
}

function mapStateToProps (state) {
  return {
    userPosts: state.userPosts,
    error: state.error,
  };
}

const mapDispatchToProps = {
  fetchData: userPostsFetchData
}

export default connect(mapStateToProps,mapDispatchToProps)(UserPosts);