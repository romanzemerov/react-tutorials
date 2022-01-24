import { tabClickHandlerType, TabType } from './App';

type TabProps = {
  active: boolean;
  id: number;
  onClick: tabClickHandlerType;
} & TabType;

export const Tab = ({ id, title, content, active, onClick }: TabProps) => {
  const tabClasses = active ? 'tab active' : 'tab';

  return (
    <div className={tabClasses}>
      <input type="checkbox" name="tabs" />
      <label htmlFor="tab-one" onClick={() => onClick(id)}>
        {title}
      </label>
      <div className="tab-content">
        <p>{content}</p>
      </div>
    </div>
  );
};
