import React from 'react';
import * as SC from './styles';

export const Link = ({ simple = true, children, ...props }) => {
  return simple ? (
    <SC.SimpleLink {...props}>{children}</SC.SimpleLink>
  ) : (
    <SC.NavigationLink {...props}>{children}</SC.NavigationLink>
  );
};

// зачем {...props}- чтобы все остальные пропсы для линк(напр to и проч.) мб прокинуть
// в основной линк, чтобы все работало корректно
