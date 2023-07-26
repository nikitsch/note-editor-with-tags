import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { addTask } from '../../../store/taskSlice';


export const NewTask: React.FC = () => {

  const tasks = useAppSelector(state => state.tasks.list);

  const isChanges = tasks.map(el => el.isChange).includes(true)

  const [textTask, setTextTask] = useState('');

  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (textTask.trim().length) {
      dispatch(addTask(textTask));
      setTextTask('');
    }
  }

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    setTextTask(e.target.value)
  }

  const hash = textTask.match(/(^|\s)#\S+/gi)

  return (
    <div>
      <h3>Write a task</h3>

      <label>
        <input
          placeholder='Entry field'
          value={textTask}
          onChange={handleSubmit}
        />
        <button
          disabled={isChanges}
          onClick={handleAction}
        >ADD</button>
      </label>

      <p>
        {hash?.map((h, index) => (
          <span key={index} style={{ color: "red", padding: "10px" }}>{h}</span>
        ))}
      </p>

    </div>
  );
};