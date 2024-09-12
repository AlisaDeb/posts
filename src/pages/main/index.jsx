import React, { useEffect } from 'react';
import { Posts } from '../../components/Posts';
import { Container } from '../../components/UI/Container';
import { Typo } from '../../components/UI/Typo';
import { useDispatch, useSelector } from 'react-redux';
import { getFreshPosts } from '../../redux/slices/postSlice';
import { Spinner } from '../../components/UI/Spinner';

export const MainPage = () => {
  const dispatch = useDispatch();

  const { post } = useSelector((state) => state.posts.postForView);

  const { posts, loading } = useSelector((state) => state.posts.freshPosts);

  useEffect(() => {
    dispatch(getFreshPosts());
  }, [dispatch]);

  return (
    <>
      <Container>
        {loading ? (
          <Spinner />
        ) : (
          <>
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
          </>
        )}
      </Container>
    </>
  );
};
