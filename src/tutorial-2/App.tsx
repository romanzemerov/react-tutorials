import { ChangeEvent, FC, FormEvent } from 'react';
import s from './app.module.css';

const filedNames = {
  EMAIL_FIELD_NAME: 'email',
  PASSWORD_FIELD_NAME: 'password',
};

const App: FC = () => {
  let email: string = '';
  let password: string = '';

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!email || !password) {
      alert('Нужно заполнить почту и пароль!');

      return;
    }

    console.log({ email, password });
    [email, password] = ['', ''];

    // Вообще не понял этого прикола от TS
    // @ts-ignore
    e.target.reset();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (name === filedNames.EMAIL_FIELD_NAME) {
      email = value.trim();
    }

    if (name === filedNames.PASSWORD_FIELD_NAME) {
      password = value.trim();
    }
  };

  return (
    <div className="App">
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name={filedNames.EMAIL_FIELD_NAME}
          placeholder={'Email'}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name={filedNames.PASSWORD_FIELD_NAME}
          placeholder={'Password'}
          onChange={handleInputChange}
        />
        <button>Войти</button>
      </form>
    </div>
  );
};

export default App;
