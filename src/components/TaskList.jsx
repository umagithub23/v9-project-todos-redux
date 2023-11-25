import { useSelector } from "react-redux";

import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <section className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </section>
  );
};
