import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const taskListNode = document.querySelector('#task-list') as HTMLElement;
    const taskInputNode = document.querySelector('#input') as HTMLInputElement;
    const form = document.querySelector('form') as HTMLFormElement;

    let tasks: string[] = ['First ToDo'];

    const render = (taskList: string[]) => {
      const markup = taskList.map((task, index) => {
        return `<li>${task} <button type="button" data-index={index}>Удалить</button></li>`;
      });

      taskListNode.innerHTML = '';
      taskListNode.insertAdjacentHTML('afterbegin', markup.join(''));
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const newTask = taskInputNode.value.trim();
      tasks.push(newTask);
      taskInputNode.value = '';
      render(tasks);
    });

    taskListNode.addEventListener('click', (e) => {
      const button = e.target as HTMLButtonElement;
      const index = Number(button.dataset.index);

      tasks.splice(index, 1);
      render(tasks);
      taskInputNode.value = '';
    });

    window.addEventListener('load', () => render(tasks));
  }, []);

  return (
    <div id="app">
      <ul id="task-list"></ul>
      <form>
        <input id="input" type="text" />
        <button id="add-button">Добавить</button>
      </form>
    </div>
  );
};

export default App;
