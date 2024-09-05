import React, { useEffect } from 'react';
import { Posts } from '../../components/Posts';
import { Container } from '../../components/Container';
import { Typo } from '../../components/Typo';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFreshPosts,
  selectFreshPosts,
  selectPostForView,
} from '../../redux/slices/postSlice';

export const MainPage = () => {
  const dispatch = useDispatch();

  const postForView = useSelector(selectPostForView);
  const freshPosts = useSelector(selectFreshPosts);

  useEffect(() => {
    dispatch(getFreshPosts());
  }, [dispatch]);

  return (
    <>
      <Container>
        {freshPosts && (
          <>
            <Typo>Свежие публикации</Typo>
            <Posts posts={freshPosts} />
          </>
        )}
        {postForView && (
          <>
            <Typo>Последний просмотренный пост</Typo>
            <Posts posts={[postForView]} />
          </>
        )}
      </Container>
    </>
  );
};
