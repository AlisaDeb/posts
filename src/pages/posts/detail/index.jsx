import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from '../../../components/UI/Container';
import { Link } from '../../../components/UI/Link';
import { Typo } from '../../../components/UI/Typo';
import {
  deletePost,
  getPostById,
  showPost,
} from '../../../redux/slices/postSlice';
import * as SC from './styles';

export const DetailPostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { list } = useSelector((state) => state.posts.posts);
  const postForView = useSelector((state) => state.posts.postForView);
  const { user } = useSelector((state) => state.auth);

  const [postForDelete, setPostForDelete] = useState(null);

  const showEditAndDeleteBtn = list && user;

  const onDeletePost = () => {
    dispatch(deletePost(postForDelete));
    setPostForDelete(null);
    navigate('/posts');
  };

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
      {postForDelete && (
        <SC.ModalWrapper>
          <SC.Modal>
            <SC.ModalText>
              Вы точно уверены, что хотите удалить публикацию c ID -
              {postForDelete.id}?
            </SC.ModalText>
            <SC.ModalContent>
              <SC.DeleteButton onClick={onDeletePost}>Да</SC.DeleteButton>
              <button onClick={() => setPostForDelete(null)}>Нет</button>
            </SC.ModalContent>
          </SC.Modal>
        </SC.ModalWrapper>
      )}
      <Typo>{post.title}</Typo>
      <SC.Image src={image} alt={post.title} />
      <SC.Text>{post.body}</SC.Text>
      {/* после флоат возвращает поток данных в правилньое направление */}
      <div style={{ clear: 'both' }} />
      <SC.LinkWrapper>
        <Link to={'/posts'}>Обратно к публикациям</Link>
        {showEditAndDeleteBtn && (
          <Link to={`/posts/${id}/edit`}>Редактировать</Link>
        )}
        {showEditAndDeleteBtn && (
          <SC.DeleteButton onClick={() => setPostForDelete(post)}>
            Удалить
          </SC.DeleteButton>
        )}
      </SC.LinkWrapper>
    </Container>
  );
};
