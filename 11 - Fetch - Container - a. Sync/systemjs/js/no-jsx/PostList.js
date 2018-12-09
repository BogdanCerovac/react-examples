/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import Post from 'Post';

function PostList({ posts }) {
  return React.createElement(
    'ul',
    null,
    posts.map(function(post, i) {
      return React.createElement(Post, { key: i, title: post.title });
    })
  );
}

export default PostList;
