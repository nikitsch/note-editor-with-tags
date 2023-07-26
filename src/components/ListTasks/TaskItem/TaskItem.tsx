import React, { useState } from "react"

interface TaskItemProps {
  id: string,
  title: string,
  hashtag: Array<string>,
  completed: boolean,
  isChange: boolean
}

export const TaskItem: React.FC<TaskItemProps> = ({ id, title, hashtag, completed, isChange }) => {

  const [text, setText] = useState(title);

  return (
    <div>
      <li>
        <input
          type='checkbox'
          checked={completed}
        />
        <h3>{text}</h3>
        <button>Delete</button>
        <button>Edit</button>
      </li>
    </div>
  )
}