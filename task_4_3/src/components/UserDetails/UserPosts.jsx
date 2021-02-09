import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { userPostsFetchData } from '../../actions/UserDetails/userPostsAction';
import '../../style/style.css';

function UserPosts ({userId}) {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(userPostsFetchData(userId))
  });

  const userPosts = useSelector (state => state.userPosts)
  const error = useSelector (state => state.error)

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

export default UserPosts;