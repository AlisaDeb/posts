import React from 'react';
import * as SC from './styles';

export const Link = ({ children, ...props }) => (
  <SC.SimpleLink {...props}>{children}</SC.SimpleLink>
);

// зачем {...props}- чтобы все остальные пропсы для линк(напр to и проч.) мб прокинуть
// в основной линк, чтобы все работало корректно
