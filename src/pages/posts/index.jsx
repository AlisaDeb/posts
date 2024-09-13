import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../components/UI/Container';
import { Posts } from '../../components/Posts';
import { Typo } from '../../components/UI/Typo';
import { getPosts } from '../../redux/slices/postSlice';
import { Spinner } from '../../components/UI/Spinner';
import { Pagination } from '../../components/Pagination';

export const PostsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = list.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };
  return (
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={currentPost} />
      <Pagination
        postPerPage={postsPerPage}
        totalPosts={list.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </Container>
  );
};
