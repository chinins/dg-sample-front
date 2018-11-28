import React from 'react';

function Home(props) {
  const { title, content } = props.home;
  return (
    <div className="Home">
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
}

export default Home;
