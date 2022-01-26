import './App.css';
import { useState } from 'react';
import { EmptyBlock } from './components/EmptyBlock';
import { Phrase } from './components/Phrase';
import { adjectivesList } from './static/adjectives';
import { nounsList } from './static/nouns';

const getRandomInt = (min: number, max: number) => {
  [min, max] = [Math.ceil(min), Math.floor(max)];
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generatePhrase = (adjectives: string[], nouns: string[]) => {
  let copyAdjectivesList = [...adjectivesList];

  const firstAdjective = `${copyAdjectivesList.splice(
    getRandomInt(0, copyAdjectivesList.length - 1),
    1,
  )}`;
  const secondAdjective = `${copyAdjectivesList.splice(
    getRandomInt(0, copyAdjectivesList.length - 1),
    1,
  )}`;
  const noun = nouns[getRandomInt(0, nounsList.length - 1)];

  return `${firstAdjective} ${secondAdjective} ${noun}`;
};

const App = () => {
  const [phrases, setPhrases] = useState<string[]>([]);

  const generateButtonHandler = () => {
    setPhrases((prev) => {
      return [...prev, generatePhrase(adjectivesList, nounsList)];
    });
  };

  const clearButtonHandler = () => {
    setPhrases([]);
  };

  return (
    <div className="wrapper">
      {!phrases.length ? (
        <EmptyBlock />
      ) : (
        <div className="list">
          {phrases.map((phrase, index) => {
            return <Phrase key={index} text={phrase} />;
          })}
        </div>
      )}

      <button className="btn btn_generate" onClick={generateButtonHandler}>
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={clearButtonHandler}>
        Очистить
      </button>
    </div>
  );
};

export default App;
