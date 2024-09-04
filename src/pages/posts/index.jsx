import React from 'react';
import { Container } from '../../components/Container';
import { Posts } from '../../components/Posts';
import { Typo } from '../../components/Typo';

export const INITIAL_POSTS = [
  {
    id: 1,
    title: 'Post 1',
    image:
      'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda minima adipisci aliquid cum. Ut fugiat necessitatibus, tempora quos atque consequuntur minus architecto, labore voluptatum cupiditate, sequi expedita quis praesentium?',
  },
  {
    id: 2,
    title: 'Post 2',
    image:
      'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda minima adipisci aliquid cum. Ut fugiat necessitatibus, tempora quos atque consequuntur minus architecto, labore voluptatum cupiditate, sequi expedita quis praesentium?',
  },
  {
    id: 3,
    title: 'Post 3',
    image:
      'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda minima adipisci aliquid cum. Ut fugiat necessitatibus, tempora quos atque consequuntur minus architecto, labore voluptatum cupiditate, sequi expedita quis praesentium?',
  },
  {
    id: 4,
    title: 'Post 4',
    image:
      'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda minima adipisci aliquid cum. Ut fugiat necessitatibus, tempora quos atque consequuntur minus architecto, labore voluptatum cupiditate, sequi expedita quis praesentium?',
  },
  {
    id: 5,
    title: 'Post 5',
    image:
      'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda minima adipisci aliquid cum. Ut fugiat necessitatibus, tempora quos atque consequuntur minus architecto, labore voluptatum cupiditate, sequi expedita quis praesentium?',
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
