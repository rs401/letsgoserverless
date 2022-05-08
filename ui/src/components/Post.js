import React from 'react';

function Post({post}){
  return (
    <div>
      <small>User: {post.user}</small>
      <h4>Message: {post.message}</h4>
    </div>
  );
}

export default Post;