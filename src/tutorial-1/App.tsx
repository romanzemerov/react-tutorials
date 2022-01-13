import { FC } from 'react';
import { Profile } from './Profile';

export const dateFormatter = new Intl.DateTimeFormat('ru', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const App: FC = () => {
  return (
    <div className="App">
      <Profile name="Alex Pupkin" registeredAt={new Date('05-10-2010')} />
    </div>
  );
};

export default App;
