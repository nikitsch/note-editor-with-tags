import React from "react"

interface TaskItemProps {
  id: string,
  title: string,
  hashtag: Array<string>,
  completed: boolean,
  isChange: boolean
}

export const TaskItem: React.FC<TaskItemProps> = ({id, title, hashtag, completed, isChange}) => {
  
  return (
    <div>
      
    </div>
  )
}