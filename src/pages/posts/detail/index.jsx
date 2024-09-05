import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from '../../../components/Container';
import { Link } from '../../../components/Link';
import { Typo } from '../../../components/Typo';
import { getPost, selectPostForView } from '../../../redux/slices/postSlice';
import * as SC from './styles';

export const DetailPostPage = () => {
  const { id } = useParams();
  const postForView = useSelector(selectPostForView);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(Number(id)));
  }, [id, dispatch]);

  if (!postForView) {
    return <>Пост не найден</>;
  }

  return (
    <Container>
      <Typo>{postForView.title}</Typo>
      <SC.Image src={postForView.image} alt={postForView.title} />
      <SC.Text>{postForView.text}</SC.Text>
      {/* после флоат возвращает поток данных в правилньое направление */}
      <div style={{ clear: 'both' }} />
      <SC.LinkWrapper>
        <Link to={'/posts'}>Обратно к публикациям</Link>
      </SC.LinkWrapper>
    </Container>
  );
};
