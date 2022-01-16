import { useState } from 'react';
import { Tab } from './Tab';
import './style.css';

export type TabType = {
  title: string;
  content: string;
};

export type tabClickHandlerType = (id: number) => void;

const tabs: TabType[] = [
  {
    title: `Сколько всего мест в доме?`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Non quos nemo corporis velit culpa veritatis asperiores deserunt, commodi ipsum at?
       Esse quibusdam dignissimos recusandae enim. Eaque expedita eum provident totam!`,
  },
  {
    title: `Самая дорогая квартира?`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Non quos nemo corporis velit culpa veritatis asperiores deserunt, commodi ipsum at?
       Esse quibusdam dignissimos recusandae enim. Eaque expedita eum provident totam!`,
  },
  {
    title: `Могу ли я отменить бронирование?`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Non quos nemo corporis velit culpa veritatis asperiores deserunt, commodi ipsum at?
       Esse quibusdam dignissimos recusandae enim. Eaque expedita eum provident totam!`,
  },
  {
    title: `Можно ли купить квартиру?`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Non quos nemo corporis velit culpa veritatis asperiores deserunt, commodi ipsum at?
       Esse quibusdam dignissimos recusandae enim. Eaque expedita eum provident totam!`,
  },
];

const App = () => {
  const [activeTabID, setActiveTabID] = useState(0);
  const tabClickHandler: tabClickHandlerType = (id) => {
    setActiveTabID(id);
  };

  return (
    <div id="app">
      <div className="app-container">
        <h1 className="app-title">FAQ</h1>
        <div className="app-tabs">
          {tabs.map((tab, index) => {
            return (
              <Tab
                key={index}
                {...tab}
                id={index}
                active={activeTabID === index}
                onClick={tabClickHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
