import { useEffect, useRef, useMemo } from 'react';
import { GITHUB_URL } from '../../consts';
import axios from 'axios';
import debounce from 'lodash.debounce';

export function Search({
  isLoading,
  onStartLoad,
  onSuccessLoad,
  onFailLoad,
  defaultValue,
}) {
  const formRef = useRef();

  const searchUser = async (userName) => {
    onStartLoad();

    try {
      const { data } = await axios.get(`${GITHUB_URL}${userName}`);
      onSuccessLoad(data);
    } catch (e) {
      if (e.isAxiosError && e.response.status === 404) {
        onFailLoad('Мы не нашли такого пользователя');
        return;
      }

      onFailLoad('Не смогли загрузить пользователя');
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const userName = form['query'].value.trim();

    if (!userName) {
      return;
    }

    searchUser(userName);
  };

  const changeQueryHandler = (e) => {
    const userName = e.target.value.trim();

    if (userName.length > 3) {
      searchUser(userName);
    }
  };

  const debouncedChangeQueryHandler = useMemo(() => {
    return debounce(changeQueryHandler, 500);
  }, []);

  useEffect(() => {
    if (defaultValue) {
      searchUser(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className="app-container">
      <form ref={formRef} className="app-form" onSubmit={submitHandler}>
        <input
          type="text"
          name={'query'}
          className="app-input"
          placeholder="Укажите GitHub-аккаунт"
          defaultValue={defaultValue}
          onChange={debouncedChangeQueryHandler}
        />
        <button className="app-form_btn" disabled={isLoading}>
          Найти
        </button>
      </form>
    </div>
  );
}
