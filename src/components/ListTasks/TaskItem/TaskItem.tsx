import React, { useState } from "react"
import { useAppDispatch } from "../../../store/hooks/hook";
import { removeTask } from "../../../store/taskSlice";

interface TaskItemProps {
  id: string,
  title: string,
  hashtag: Array<string>,
  completed: boolean,
  isChange: boolean
}

export const TaskItem: React.FC<TaskItemProps> = ({ id, title, hashtag, completed, isChange }) => {

  const dispatch = useAppDispatch();

  const [text, setText] = useState(title);

  return (
    <div>
      <li>
        <input
          type='checkbox'
          checked={completed}
        />
        <h3>{text}</h3>
        <button onClick={() => dispatch(removeTask(id))}>DELETE</button>
        <button>Edit</button>
      </li>
    </div>
  )
}