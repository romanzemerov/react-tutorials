import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FormField, FormFieldValues, Review } from '../types';
import { nanoid } from 'nanoid';

type FormProps = {
  fields: FormField[];
  onSubmit: (newReview: Review) => void;
};

const getFormValues = (formState: FormField[]) => {
  return formState.reduce((result, current) => {
    return { ...result, [current.id]: current.value };
  }, {}) as FormFieldValues;
};

const isFormHaveEmptyField = (formState: FormField[]) => {
  const formValues = getFormValues(formState);

  return Object.values(formValues).some((value) => value.trim() === '');
};

export const Form = ({ fields, onSubmit }: FormProps) => {
  const [form, setForm] = useState<FormField[]>(fields);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formFieldValues = getFormValues(form);
    const newComment = {
      id: nanoid(),
      fullName: formFieldValues.name,
      email: formFieldValues.email,
      text: formFieldValues.text,
      createdAt: new Date(),
    };

    setForm((prev) => {
      return prev.map((field) => ({ ...field, value: '' }));
    });
    onSubmit(newComment);
  };

  const changeInputHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { target } = e;

    setForm((prevState) => {
      const changedFieldIdx = prevState.findIndex(
        (el) => el.id === target.name,
      );
      const newField = {
        ...prevState[changedFieldIdx],
        value: target.value,
      };

      return [
        ...prevState.slice(0, changedFieldIdx),
        newField,
        ...prevState.slice(changedFieldIdx + 1),
      ];
    });
  };
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography fontSize={'1.6rem'} marginBottom={2}>
          <strong>Обратная свзязь: </strong>
        </Typography>
        <form onSubmit={submitHandler}>
          <Stack spacing={2}>
            {form.map(({ id, value, label, multiline }) => {
              return multiline ? (
                <TextField
                  key={id}
                  name={id}
                  label={label}
                  value={value}
                  minRows={4}
                  fullWidth
                  multiline
                  onChange={changeInputHandler}
                />
              ) : (
                <TextField
                  key={id}
                  name={id}
                  label={label}
                  value={value}
                  fullWidth
                  onChange={changeInputHandler}
                />
              );
            })}

            <Button
              type={'submit'}
              variant={'contained'}
              disabled={isFormHaveEmptyField(form)}
            >
              Отправить
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
};
