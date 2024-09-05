import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '../../components/Container';
import { Posts } from '../../components/Posts';
import { Typo } from '../../components/Typo';
import { selectPosts } from '../../redux/slices/postSlice';

export const PostsPage = () => {
  const posts = useSelector(selectPosts);

  return (
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={posts} />
    </Container>
  );
};
