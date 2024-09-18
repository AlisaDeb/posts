import styled from 'styled-components';
import { Button } from '../../../components/UI/Button/styles';

export const Image = styled.img`
  max-width: 200px;
  float: left;
  margin-right: 15px;
`;

export const Text = styled.div`
  font: size 15px;
`;

export const LinkWrapper = styled.div`
  margin: 15px 0 0;
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 100%;
  align-items: center;
`;

export const DeleteButton = styled(Button)`
  border: 1px solid black;
  background-color: white;
  padding: 5px 15px;
  color: black;

  &:hover {
    background-color: #f97b7b;
    border: 1px solid #f97b7b;
    color: white;
  }
`;

export const CancelButton = styled(DeleteButton)`
  &:hover {
    background-color: #c3c3c3;
    border: 1px solid #c3c3c3;
    color: white;
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  z-index: 1;
`;
