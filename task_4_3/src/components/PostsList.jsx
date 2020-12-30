import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import '../style/style.css';
import { postsFetchData } from '../actions/postAction';

function Posts ({fetchData, posts}) {
  useEffect(() => {
    fetchData()
  });

  return (
      <div className="list">
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
    posts: state.post
  };
}

const mapDispatchToProps = {
    fetchData: postsFetchData
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);
