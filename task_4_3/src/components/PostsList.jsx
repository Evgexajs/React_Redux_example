import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import '../style/style.css';
import { postsFetchData } from '../actions/dataActions';

function mapStateToProps (state) {
  return {
    posts: state.data
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(postsFetchData(url))
  }
}

function Posts ({fetchData, posts}) {
  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/posts")
  });

  return (
      <div className="list">
          {posts.map((post, index) => {
            return <li key={index}>
              <div>Title is: {post.title}</div>
              <div>Body is: {post.body}</div>

            </li>
          })}
      </div>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);
