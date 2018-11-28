import React from 'react';

function PostsList(props) {
  const renderPosts = () => {
    return props.posts.map((post, index) => <div key={index}>{post + index}</div>);
  };

  return (
    <div className="PostsList">
      <div>something</div>
      {renderPosts()}
    </div>
  );
}

export default PostsList;
