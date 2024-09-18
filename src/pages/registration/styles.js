import styled from 'styled-components';
import { Button } from '../../components/UI/Button';

export const RegistrButton = styled(Button)`
  border: none;
  background-color: #c3c3c3;
  color: white;
  padding: 10px 15px;

  &:hover {
    background-color: #f97b7b;
    transform: scale(1.04);
  }
`;
