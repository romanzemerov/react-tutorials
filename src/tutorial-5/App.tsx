import './App.css';
import { useState } from 'react';
import { EmptyBlock } from './components/EmptyBlock';
import { Phrase } from './components/Phrase';

const adjectivesArr = [
  'абсолютный',
  'адский',
  'азартный',
  'активный',
  'ангельский',
  'астрономический',
  'баснословный',
  'безбожный',
  'безбрежный',
  'безвозвратный',
  'безграничный',
  'бездонный',
  'бездушный',
  'безжалостный',
  'замечательно',
  'замечательный',
  'записной',
  'запредельный',
  'заядлый',
  'звериный',
  'зверский',
  'зеленый',
  'злой',
  'злостный',
  'значительный',
  'неоспоримый',
  'неотразимый',
  'неоценимый',
  'непередаваемый',
];

const nounsArr = [
  'лгун',
  'день',
  'конь',
  'олень',
  'человек',
  'программист',
  'ребёнок',
  'конец',
  'город',
  'дурак',
];

const getRandomInt = (min: number, max: number) => {
  [min, max] = [Math.ceil(min), Math.floor(max)];
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generatePhrase = (adjectives: string[], nouns: string[]) => {
  let copyAdjectivesArr = [...adjectivesArr];

  const firstAdjective = `${copyAdjectivesArr.splice(
    getRandomInt(0, copyAdjectivesArr.length - 1),
    1,
  )}`;
  const secondAdjective = `${copyAdjectivesArr.splice(
    getRandomInt(0, copyAdjectivesArr.length - 1),
    1,
  )}`;
  const noun = nouns[getRandomInt(0, nounsArr.length - 1)];

  return `${firstAdjective} ${secondAdjective} ${noun}`;
};

const App = () => {
  const [phrases, setPhrases] = useState<string[]>([]);

  const generateButtonHandler = () => {
    setPhrases((prev) => {
      return [...prev, generatePhrase(adjectivesArr, nounsArr)];
    });
  };

  const clearButtonHandler = () => {
    setPhrases([]);
  };

  const getPhrasesMarkup = (list: string[]) => {
    return (
      <div className="list">
        {list.map((el, index) => {
          return <Phrase key={index} text={el} />;
        })}
      </div>
    );
  };

  return (
    <div className="wrapper">
      {phrases.length === 0 ? <EmptyBlock /> : getPhrasesMarkup(phrases)}

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
