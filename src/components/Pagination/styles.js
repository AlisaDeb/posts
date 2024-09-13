import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const PageButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.$active ? '#36d7b7' : 'white')};
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
