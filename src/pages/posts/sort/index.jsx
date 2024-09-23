import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetSort, setSortType } from '../../../redux/slices/filterSlice';
import * as SC from './styles';

export const Sort = () => {
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.filter.sortType);

  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === 'new') {
      dispatch(resetSort());
    } else {
      dispatch(setSortType(value));
    }
  };

  return (
    <>
      <SC.Select value={sortType} onChange={handleSortChange}>
        <option value="new">New</option>
        <option value="az">from A to Z</option>
        <option value="za">from Z to A</option>
      </SC.Select>
    </>
  );
};
