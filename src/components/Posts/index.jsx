import React from 'react';
import { Post } from './components/Post';
import { EmptyState } from '../EmptyState';
import * as SC from './styles';

export const Posts = ({ posts }) => {
  return (
    <>
      {!posts.length ? (
        <EmptyState />
      ) : (
        <SC.Posts>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}{' '}
        </SC.Posts>
      )}
    </>
  );
};
