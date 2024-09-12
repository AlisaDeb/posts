import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../components/UI/Container';
import { Posts } from '../../components/Posts';
import { Typo } from '../../components/UI/Typo';
import { getPosts } from '../../redux/slices/postSlice';
import { Spinner } from '../../components/UI/Spinner';

export const PostsPage = () => {
  const { list, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list) {
      dispatch(getPosts());
    }
  }, [list, dispatch]);

  if (!list && loading) {
    return <Spinner />;
  }

  if (!list) {
    return <>404</>;
  }
  return (
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={list} />
    </Container>
  );
};
