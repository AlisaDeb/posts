import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../UI/Button';

export const Menu = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  margin: 15px auto 0 auto;
`;

export const MenuItem = styled(NavLink)`
  font-size: 16px;
  text-decoration: none;
  color: black;

  &.active {
    color: red;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const ExitButton = styled(Button)`
  border: none;
  background-color: #d81053;
  color: white;
  padding: 6px 25px;
  opacity: 0.6;

  &:hover {
    opacity: 1;
    transform: scale(1.04);
  }
`;
