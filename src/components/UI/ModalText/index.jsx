import React from 'react';
import * as SC from './styles';

export const ModalText = ({ children, ...rest }) => (
  <SC.ModalText {...rest}>{children}</SC.ModalText>
);
