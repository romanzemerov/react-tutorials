import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import './App.css';

function App() {
  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      about: '',
    },
  });

  const onSubmit = (values) => console.log('ФОРМА!', values);
  const onReset = () => reset();

  return (
    <div className="App">
      <div className="row">
        <TextField
          name="firstName"
          label="Имя"
          {...register('firstName', {
            validate: (value) => value !== 'admin' || 'Nice try!',
          })}
          helperText={
            formState.errors.firstName && formState.errors.firstName.message
          }
          error={!!formState.errors.firstName}
          fullWidth
        />
        <TextField
          name="lastName"
          label="Фамилия"
          {...register('lastName', {
            required: 'Это обязательное поле!',
          })}
          helperText={
            formState.errors.lastName && formState.errors.lastName.message
          }
          error={!!formState.errors.lastName}
          fullWidth
        />
      </div>
      <div className="row">
        <TextField
          {...register('email', {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
              message: 'Это неверная почта!',
            },
          })}
          helperText={formState.errors.email && formState.errors.email.message}
          error={!!formState.errors.email}
          name="email"
          label="E-Mail"
          fullWidth
        />
        <TextField
          {...register('password', {
            required: 'Это обязательное поле!',
          })}
          helperText={
            formState.errors.password && formState.errors.password.message
          }
          error={!!formState.errors.password}
          name="password"
          type="password"
          label="Пароль"
          fullWidth
        />
      </div>
      <div className="row">
        <TextField
          {...register('about', {})}
          name="about"
          label="Обо мне"
          fullWidth
        />
      </div>
      <br />
      <div className="row">
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="primary"
        >
          Зарегистрироваться
        </Button>
        <Button onClick={onReset} variant="contained" color="secondary">
          Очистить
        </Button>
      </div>
    </div>
  );
}

export default App;
