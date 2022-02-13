import { useEffect, useReducer } from 'react';
import { Card } from './components/Card/Card';
import { Search } from './components/Search/Search';
import { LOADING_STATES } from './consts';
import './App.css';

const changeQueryAction = 'CHANGE_QUERY';

const initialState = {
  query: null,
  data: null,
  loadingState: LOADING_STATES.IDLE,
  error: null,
};

function accountReducer(state, action) {
  switch (action.type) {
    case LOADING_STATES.LOADING:
      return {
        ...state,
        data: null,
        loadingState: LOADING_STATES.LOADING,
        error: null,
      };
    case LOADING_STATES.SUCCEEDED:
      return {
        ...state,
        data: action.payload,
        loadingState: LOADING_STATES.SUCCEEDED,
        error: null,
      };
    case LOADING_STATES.FAILED:
      return {
        ...state,
        data: null,
        loadingState: LOADING_STATES.FAILED,
        error: action.payload,
      };
    case changeQueryAction:
      return { ...state, query: action.payload };
    default:
      throw new Error();
  }
}

function App() {
  const [accountState, dispatch] = useReducer(accountReducer, initialState);

  const getCard = () => {
    const {
      name,
      login,
      avatar_url,
      bio,
      public_repos,
      followers,
      following,
      location,
      blog,
    } = accountState.data;
    return (
      <Card
        name={name}
        login={login}
        avatar_url={avatar_url}
        bio={bio}
        public_repos={public_repos}
        followers={followers}
        following={following}
        location={location}
        blog={blog}
      />
    );
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('login')) {
      dispatch({ type: changeQueryAction, payload: urlParams.get('login') });
    }
  }, []);

  const onStartLoadingAccountData = () => {
    dispatch({ type: LOADING_STATES.LOADING });
  };

  const onLoadAccountData = (data) => {
    dispatch({ type: LOADING_STATES.SUCCEEDED, payload: data });
  };

  const onFailedLoadingAccountData = (error) => {
    dispatch({ type: LOADING_STATES.FAILED, payload: error });
  };

  return (
    <div id="app">
      <div className="app-container">
        <Search
          isLoading={accountState.loadingState === LOADING_STATES.LOADING}
          onStartLoad={onStartLoadingAccountData}
          onSuccessLoad={onLoadAccountData}
          onFailLoad={onFailedLoadingAccountData}
          defaultValue={accountState.query}
        />
        {accountState.data && getCard()}
        {accountState.loadingState === LOADING_STATES.LOADING && (
          <div>Загрузка...</div>
        )}
        {accountState.loadingState === LOADING_STATES.FAILED && (
          <div>{accountState.error}</div>
        )}
      </div>
    </div>
  );
}

export default App;
