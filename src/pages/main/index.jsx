import React, { useEffect } from 'react';
import { Posts } from '../../components/Posts';
import { Container } from '../../components/Container';
import { Typo } from '../../components/Typo';
import { useDispatch, useSelector } from 'react-redux';
import { getFreshPosts, selectPostForView } from '../../redux/slices/postSlice';

export const MainPage = () => {
  const dispatch = useDispatch();

  const { post } = useSelector(selectPostForView);
  const { posts, loading } = useSelector((state) => state.posts.freshPosts);

  useEffect(() => {
    dispatch(getFreshPosts());
  }, [dispatch]);

  return (
    <>
      <Container>
        {loading && <>Loading...</>}
        {posts && (
          <>
            <Typo>Свежие публикации</Typo>
            <Posts posts={posts} />
          </>
        )}
        {post && (
          <>
            <Typo>Последний просмотренный пост</Typo>
            <Posts posts={[post]} />
          </>
        )}
      </Container>
    </>
  );
};
