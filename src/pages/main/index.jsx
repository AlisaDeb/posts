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
    if (!posts) {
      dispatch(getFreshPosts());
    }
  }, [posts, dispatch]);

  return (
    <>
      <Container>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {posts && posts.length > 0 ? (
              <>
                <Typo>Свежие публикации</Typo>
                <Posts posts={posts} />
              </>
            ) : (
              <Typo>Нет свежих публикаций к показу</Typo>
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
