import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../components/UI/Container';
import { Posts } from '../../components/Posts';
import { Typo } from '../../components/UI/Typo';
import { getPosts } from '../../redux/slices/postSlice';
import { Spinner } from '../../components/UI/Spinner';
import { Pagination } from '../../components/Pagination';
import { Filter } from './filter';
import { setTitleFilter } from '../../redux/slices/filterSlice';
import { Sort } from './sort';
import * as SC from './styles';

export const PostsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const { list, loading } = useSelector((state) => state.posts.posts);
  const titleFilter = useSelector((state) => state.filter.title);
  const sortType = useSelector((state) => state.filter.sortType);
  const dispatch = useDispatch();

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

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

  const filteredPosts = list.filter((post) => {
    return post.title.toLowerCase().includes(titleFilter.toLowerCase());
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortType === 'az') {
      return a.title > b.title ? 1 : -1;
    } else if (sortType === 'za') {
      return a.title < b.title ? 1 : -1;
    }
    return 0;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <Container>
      <Typo>Публикации</Typo>
      <SC.FilterSortWrapper>
        <Filter
          titleFilter={titleFilter}
          handleTitleFilterChange={handleTitleFilterChange}
        />
        <Sort />
      </SC.FilterSortWrapper>
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
