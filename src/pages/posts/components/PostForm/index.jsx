import React, { useState } from 'react';
import { Container } from '../../../../components/UI/Container';
import { Field } from '../../../../components/UI/Field';
import { Form } from '../../../../components/UI/Form';
import { Input } from '../../../../components/UI/Input';
import { Typo } from '../../../../components/UI/Typo';
import * as SC from './styles';

const DEFAULT_VALUES = { title: '', body: '' };

export const PostForm = ({ title, onSubmitForm, defaultValues }) => {
  const [formValues, setFormValues] = useState(defaultValues || DEFAULT_VALUES);

  const onChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitForm(formValues);
    !defaultValues && setFormValues(DEFAULT_VALUES);
  };

  const disabled = !formValues.title || !formValues.body;

  return (
    <Container>
      <Typo>{title}</Typo>
      <Form onSubmit={onSubmit}>
        <Field>
          <Input
            type="text"
            name="title"
            value={formValues.title}
            placeholder="Заголовок"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Field>
          <SC.Textarea
            name="body"
            value={formValues.body}
            placeholder="Текст"
            rows={10}
            cols={30}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <SC.SaveButton type="submit" disabled={disabled}>
          Сохранить
        </SC.SaveButton>
      </Form>
    </Container>
  );
};
