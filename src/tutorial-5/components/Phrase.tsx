type PhraseProps = {
  text: string;
};

export const Phrase = ({ text }: PhraseProps) => {
  return (
    <div className="block">
      <h3>{text}</h3>
    </div>
  );
};
