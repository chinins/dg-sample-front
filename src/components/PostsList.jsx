import React from 'react';

import PostsListItem from './PostsListItem';

function PostsList(props) {
  const renderPosts = () => {
    return props.posts.map((post, index) => {
      return <PostsListItem key={index} post={post} onFetchPost={fetchPost} />;
    });
  };

  const fetchPost = postName => {
    props.onFetchPost(postName);
  };

  return (
    <div className="PostsList">
      <div>All Posts</div>
      {renderPosts()}
    </div>
  );
}

export default PostsList;
