import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from '../../../components/Container';
import { Link } from '../../../components/Link';
import { Typo } from '../../../components/Typo';
import {
  getPostById,
  selectPostForView,
  showPost,
} from '../../../redux/slices/postSlice';
import * as SC from './styles';

export const DetailPostPage = () => {
  const { id } = useParams();
  const { list } = useSelector((state) => state.posts.posts);
  const postForView = useSelector(selectPostForView);
  const dispatch = useDispatch();

  useEffect(() => {
    const intId = Number(id);
    const findedPost = list
      ? list.find((item) => item.id === intId)
      : undefined;

    if (findedPost) {
      dispatch(showPost(findedPost));
    } else {
      dispatch(getPostById(intId));
    }
  }, [id, list, dispatch]);

  if (postForView.loading) {
    return <>Loading...</>;
  }

  if (!postForView.post || !postForView.post.hasOwnProperty('id')) {
    return <>Пост не найден</>;
  }

  const { post } = postForView;

  const image =
    post.image ||
    'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg';

  return (
    <Container>
      <Typo>{post.title}</Typo>
      <SC.Image src={image} alt={post.title} />
      <SC.Text>{post.body}</SC.Text>
      {/* после флоат возвращает поток данных в правилньое направление */}
      <div style={{ clear: 'both' }} />
      <SC.LinkWrapper>
        <Link to={'/posts'}>Обратно к публикациям</Link>
      </SC.LinkWrapper>
    </Container>
  );
};
