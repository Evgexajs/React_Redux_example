import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import '../style/style.css';
import { postsFetchData } from '../actions/postAction';
import { addPostFetchData } from '../actions/addPostAction';
import AddPost from './AddPost.jsx';

function Posts () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postsFetchData())
  });

  const posts = useSelector (state => state.post)
  const post = useSelector (state => state.addPost)
  const error = useSelector (state => state.error)

  let addPost = <></>;
  if (post.id){
    addPost = (<li key={post.id}>
    <div>Title: {post.title}</div>
    <div>Body: {post.body}</div>
    </li>)
  }
  if (error.length) return <h1>{error}</h1>;
  return (
      <div className="list">
        <AddPost onSubmit={dispatch(addPostFetchData)}/>
        {addPost}
          {posts.map((post) => {
            return <li key={post.id}>
              <div>Title: {post.title}</div>
              <div>Body: {post.body}</div>

            </li>
          })}
      </div>
    );
}

export default Posts;
