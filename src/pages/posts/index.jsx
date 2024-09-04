import React from 'react';
import { Container } from '../../components/Container';
import { Posts } from '../../components/Posts';
import { Typo } from '../../components/Typo';

const INITIAL_POSTS = [
  {
    id: 1,
    title: 'Post 1',
    image:
      'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg',
  },
  {
    id: 2,
    title: 'Post 2',
    image:
      'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg',
  },
  {
    id: 3,
    title: 'Post 3',
    image:
      'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg',
  },
  {
    id: 4,
    title: 'Post 4',
    image:
      'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg',
  },
  {
    id: 5,
    title: 'Post 5',
    image:
      'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg',
  },
];

export const PostsPage = () => (
  <>
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={INITIAL_POSTS} />
    </Container>
  </>
);
