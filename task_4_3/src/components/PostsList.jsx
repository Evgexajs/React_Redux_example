import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import '../style/style.css';
import { postsFetchData } from '../actions/postAction';
import { addPostFetchData } from '../actions/addPostAction';
import AddPost from './AddPost.jsx';

function Posts ({postsFetchData, addPostFetchData, posts, post, error}) {
  useEffect(() => {
    postsFetchData();
  });

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
        <AddPost onSubmit={addPostFetchData}/>
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

function mapStateToProps (state) {
  return {
    posts: state.post,
    post: state.addPost,
    error: state.error,
  };
}

const mapDispatchToProps = {
    postsFetchData: postsFetchData,
    addPostFetchData: addPostFetchData,
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);
