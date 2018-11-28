import React from 'react';

import PostsListItem from './PostsListItem';

function PostsList(props) {
  const renderPosts = () => {
    return props.posts.map((post, index) => <PostsListItem key={index} post={post} />);
  };

  return (
    <div className="PostsList">
      <div>All Posts</div>
      {renderPosts()}
    </div>
  );
}

export default PostsList;
