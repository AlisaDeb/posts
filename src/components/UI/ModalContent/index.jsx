import React from 'react';
import * as SC from './styles';

export const ModalContent = ({ children, ...rest }) => (
  <SC.ModalContent {...rest}>{children}</SC.ModalContent>
);
