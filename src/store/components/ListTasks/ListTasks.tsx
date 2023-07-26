import { useAppSelector } from "../../hooks/hook";

export const TaskList: React.FC = () => {

  const tasks = useAppSelector(state => state.tasks.list);

  return (

    <ul>
      {tasks.map((item) => {
        return <TaskItem key={item.id} {...item} />
      })}
    </ul>
  );
};