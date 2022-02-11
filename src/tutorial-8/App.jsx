import React, { useState } from 'react';
import './App.css';

const LOADING_STATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
};

function App() {
  const [usersState, setUsersState] = useState({
    users: [],
    loadingState: LOADING_STATES.IDLE,
    error: null,
  });

  const getUsers = async () => {
    let users = [];
    let error = null;

    try {
      const res = await fetch(
        'https://62053dd1161670001741b6d3.mockapi.io/api/v1/users',
      );

      if (!res.ok || res.status !== 200) {
        throw new Error('Не смогли загрузить юзеров');
      }

      users = await res.json();
    } catch (e) {
      error = e;
    }

    return [users, error];
  };

  const buttonClickHandler = async () => {
    setUsersState({ ...usersState, loadingState: LOADING_STATES.LOADING });
    const [users, error] = await getUsers();

    if (error) {
      setUsersState({
        ...usersState,
        loadingState: LOADING_STATES.FAILED,
        error,
      });

      return;
    }

    setUsersState({
      ...usersState,
      loadingState: LOADING_STATES.SUCCEEDED,
      users,
    });
  };

  return (
    <div>
      <button onClick={buttonClickHandler}>
        Получить список пользователей
      </button>

      {usersState.loadingState === LOADING_STATES.LOADING && (
        <div>Загрузка...</div>
      )}

      {usersState.loadingState === LOADING_STATES.FAILED && (
        <div>Что-то пошло не так 😒</div>
      )}

      {!!usersState.users.length
        ? usersState.users.map(({ id, name }) => {
            return <div key={id}>{name}</div>;
          })
        : null}
    </div>
  );
}

export default App;
