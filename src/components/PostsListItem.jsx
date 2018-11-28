import React from 'react';
import { Link } from 'react-router-dom';

function PostsListItem(props) {
  const { title, content } = props.post;

  const fetchPost = () => {
    props.onFetchPost(title);
  };

  return (
    <Link to={`/posts/${title}`} onClick={fetchPost}>
      <div className="PostsListItem">
        <div>{title}</div>
        <div>{content.substring(0, 100)}...</div>
      </div>
    </Link>
  );
}
export default PostsListItem;
