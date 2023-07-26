import { useState } from "react";
import { useAppSelector } from "../../store/hooks/hook";
import { TaskItem } from "./TaskItem/TaskItem";

export const TaskList: React.FC = () => {

  const tasks = useAppSelector(state => state.tasks.list);

  const [filterHash, setFilter] = useState("all")

  const setToFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    setFilter(event.target.value)
  }

  const lists = tasks?.map(item => ["all"].concat(item.hashtag)).flat()
  const exercicesId = lists.filter((value, index, array) => array.indexOf(value) === index);

  return (
    <>
      <div>
        <select onChange={setToFilter}>
          {exercicesId.map((list, index) => <option key={index} value={list}>{list}</option>)}
        </select>
      </div>
      <ul>
        {tasks.map((item) => {
          if (filterHash === "all") return <TaskItem key={item.id} {...item} />
          if (item.hashtag.includes(filterHash)) {
            return (
              <TaskItem key={item.id} {...item} />
            )
          }
        })}
      </ul>
    </>
  );
};