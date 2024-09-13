import React from 'react';
import * as SC from './styles';

export const Pagination = ({
  postPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <SC.Pagination>
      {pageNumbers.map((number) => (
        <SC.PageButton
          key={number}
          onClick={() => paginate(number)}
          $active={currentPage === number}
        >
          {number}
        </SC.PageButton>
      ))}
    </SC.Pagination>
  );
};
