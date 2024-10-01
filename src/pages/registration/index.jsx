import React, { useState } from 'react';
import { Typo } from '../../components/UI/Typo';
import { Container } from '../../components/UI/Container';
import { Form } from '../../components/UI/Form';
import { Field } from '../../components/UI/Field';
import { Input } from '../../components/UI/Input';
import { useNavigate } from 'react-router-dom';
import * as SC from './styles';

export const RegistrationPage = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const validEmail = (email) => {
    const isValid =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return isValid.test(String(email).toLowerCase());
  };

  const validPassword = (password) => {
    if (password.length < 8) {
      return false;
    }
    if (!/\d/.test(password)) {
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      return false;
    }
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      return false;
    }
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validEmail(formValues.email)) {
      newErrors.email = 'Неверный формат email';
    }
    if (!validPassword(formValues.password)) {
      newErrors.password =
        'Пароль должен содержать минимум 8 символов, включая цифру, прописную букву и специальный символ';
    }

    // console.log('Ошибки после валидации:', newErrors);

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    setError({
      email: '',
      password: '',
    });

    try {
      const users = JSON.parse(localStorage.getItem('users'));
      const userId = Date.now();
      const newUser = { id: userId, ...formValues };

      if (!users) {
        localStorage.setItem('users', JSON.stringify([newUser]));
        alert('Вы успешно зарегестрировались');
        navigate('/auth');
        return;
      }
      if (users.find((user) => user.email === formValues.email)) {
        alert('Пользователь с таким email уже существует');
        return;
      }

      users.push(newUser);

      localStorage.setItem('users', JSON.stringify(users));
      alert('Вы успешно зарегестрировались');
      navigate('/auth');
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
      <Typo>Cтраница регистрации</Typo>
      <Form onSubmit={onSubmit} autoComplete="off" noValidate>
        <Field>
          <Input
            type="text"
            name="name"
            value={formValues.name}
            placeholder="Имя"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Field>
          <Input
            type="text"
            name="surname"
            value={formValues.surname}
            placeholder="Фамилия"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Field>
          <Input
            type="email"
            name="email"
            value={formValues.email}
            placeholder="Email"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        {error.email && <div>{error.email}</div>}
        <Field>
          <Input
            type="password"
            name="password"
            value={formValues.password}
            placeholder="Пароль"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        {error.password && <div>{error.password}</div>}
        <SC.RegistrButton type="submit" disabled={disabled}>
          Регистрация
        </SC.RegistrButton>
      </Form>
    </Container>
  );
};
