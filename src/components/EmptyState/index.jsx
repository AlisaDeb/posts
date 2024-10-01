import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from '../UI/Link';
import * as SC from './styles';

export const EmptyState = () => {
  const { list } = useSelector((state) => state.posts.posts);
  const { user } = useSelector((state) => state.auth);

  const showEditAndDeleteBtn = list && user;

  return (
    <SC.EmptyContainer>
      <SC.EmptyState>Нет постов, соответствующих запросу</SC.EmptyState>
      {showEditAndDeleteBtn && (
        <Link to={`/posts/add`}>Добавить новый пост</Link>
      )}{' '}
    </SC.EmptyContainer>
  );
};
