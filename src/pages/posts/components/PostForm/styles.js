import styled from 'styled-components';

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  outline: none;
`;

export const Button = styled.button`
  border: none;
  background: #d81053;
  color: white;
  padding: 10px 0;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
    transform: scale(1.04);
  }

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;
