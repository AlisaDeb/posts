import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetFilter } from '../../../redux/slices/filterSlice';
import * as SC from './styles';

export const Filter = ({ handleTitleFilterChange, titleFilter }) => {
  const dispatch = useDispatch();

  const handleResetFilter = () => {
    dispatch(resetFilter());
  };

  useEffect(() => {
    dispatch(resetFilter());
  }, [dispatch]);

  return (
    <SC.FilterWrapper>
      <SC.FilterInput
        type="text"
        value={titleFilter}
        placeholder="Filter by title..."
        onChange={handleTitleFilterChange}
      />
      <SC.ResetButton onClick={handleResetFilter}>
        Сбросить фильтр
      </SC.ResetButton>
    </SC.FilterWrapper>
  );
};
