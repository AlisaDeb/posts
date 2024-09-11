import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/UI/Container';
import { Field } from '../../components/UI/Field';
import { Form } from '../../components/UI/Form';
import { Input } from '../../components/UI/Input';
import { Typo } from '../../components/UI/Typo';
import { login } from '../../redux/slices/authSlice';

export const AuthPage = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      const users = JSON.parse(localStorage.getItem('users'));

      if (!users) {
        alert('Данный пользователь не найден в системе');
        return;
      }

      const currentUser = users.find(
        (user) =>
          user.email === formValues.email &&
          user.password === formValues.password
      );

      if (!currentUser) {
        alert('Данный пользователь не найден в системе');
        return;
      }

      dispatch(login(currentUser));
      navigate('/posts');
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const disabled = !formValues.email || !formValues.password;

  return (
    <Container>
      <Typo>Cтраница авторизации</Typo>
      <Form onSubmit={onSubmit} autoComplete="off">
        <Field>
          <Input
            type="email"
            name="email"
            value={formValues.email}
            placeholder="Email"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Field>
          <Input
            type="password"
            name="password"
            value={formValues.password}
            placeholder="Пароль"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <button type="submit" disabled={disabled}>
          Авторизация
        </button>
      </Form>
    </Container>
  );
};
