import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from '../../../UI/Link';
import * as SC from './styles';

export const Post = ({ post }) => {
  const titleFilter = useSelector((state) => state.filter.title);

  const image =
    post.image ||
    'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg';

  const hightlightMatch = (text, filter) => {
    if (!filter) return text;

    const regex = new RegExp(`(${filter})`, 'gi');
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return <SC.Hightlight key={i}>{substring}</SC.Hightlight>;
      }
      return substring;
    });
  };

  return (
    <SC.Post>
      <SC.Image src={image} alt={post.title} />
      <SC.Title>{hightlightMatch(post.title, titleFilter)}</SC.Title>
      <Link to={`/posts/${post.id}`}>Читать далее...</Link>
    </SC.Post>
  );
};
