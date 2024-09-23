import styled from 'styled-components';
import { Button } from '../../../components/UI/Button';
import { Input } from '../../../components/UI/Input';

export const FilterWrapper = styled.div`
  display: flex;
  width: 50%;
  gap: 15px;
`;

export const FilterInput = styled(Input)`
  width: 50%;
`;

export const ResetButton = styled(Button)`
  border: 1px solid #f97b7b;
  background-color: #f97b7b;
  padding: 5px 15px;
  color: white;

  &:hover {
    background-color: white;
    border: 1px solid #f97b7b;
    color: black;
  }
`;
