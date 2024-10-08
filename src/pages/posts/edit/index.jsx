import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editPost } from '../../../redux/slices/postSlice';
import { PostForm } from '../components/PostForm';

export const EditPostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list } = useSelector((state) => state.posts.posts);

  const onSubmitForm = (formValues) => {
    dispatch(editPost(formValues));
    navigate(`/posts/${id}`);
  };

  if (!list) {
    return <>Пост не найден</>;
  }
  const findedPost = list.find((item) => item.id === Number(id));

  return (
    <PostForm
      title={`Редактирвоание поста - ${id}`}
      onSubmitForm={onSubmitForm}
      defaultValues={findedPost}
    />
  );
};
