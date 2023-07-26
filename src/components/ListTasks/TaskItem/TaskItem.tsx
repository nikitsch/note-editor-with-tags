import React, { useState } from "react"
import { useAppDispatch } from "../../../store/hooks/hook";
import { changeTask, removeTask, toggleComplete, toggleIsChange } from "../../../store/taskSlice";

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

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(changeTask({ id, text }));
    }
  }

  const hash = text.match(/(^|\s)#\S+/gi)
  const styleIsCompleted = completed ? ({ textDecoration: "line-through", opacity: "0.2" }) : ({})

  return (
    <>
      {isChange
        ? <>
          <label>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAction}>SAVE</button>
          </label>
          <div>
            {hash?.map((h, index) => (
              <span key={index} style={{ color: "red", padding: "10px" }}>{h.trim()}</span>
            ))}
          </div>
        </>
        : <div style={styleIsCompleted}>
          <li style={{ listStyleType: "none", display: "flex", justifyContent: "center" }}>
            <input
              type='checkbox'
              checked={completed}
              onChange={() => dispatch(toggleComplete(id))}
            />
            <h3>{text}</h3>
            <button onClick={() => dispatch(removeTask(id))}>DELETE</button>
            <button onClick={() => dispatch(toggleIsChange(id))}>EDIT</button>
          </li>
        </div>}
    </>

  )
}