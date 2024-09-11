import React from 'react';
import { Link } from '../../../UI/Link';
import * as SC from './styles';

export const Post = ({ post }) => {
  const image =
    post.image ||
    'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg';
  return (
    <SC.Post>
      <SC.Image src={image} alt={post.title} />
      <SC.Title>{post.title}</SC.Title>
      <Link to={`/posts/${post.id}`}>Читать далее...</Link>
    </SC.Post>
  );
};
