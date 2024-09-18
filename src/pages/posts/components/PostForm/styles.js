import styled from 'styled-components';
import { Button } from '../../../../components/UI/Button';

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  outline: none;
`;

export const SaveButton = styled(Button)`
  border: none;
  background-color: #d81053;
  color: white;
  padding: 10px 0;

  &:hover {
    opacity: 0.6;
    transform: scale(1.04);
  }

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;
