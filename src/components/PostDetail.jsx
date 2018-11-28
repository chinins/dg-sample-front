import React from 'react';

function PostDetail(props) {
  const { title, content } = props.post;
  return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
}

export default PostDetail;
