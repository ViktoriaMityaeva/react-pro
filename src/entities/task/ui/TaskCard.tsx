import type { Task } from "../model/types";
import styles from "./TaskCard.module.css";

type RemoveTask = (taskId: string) => void;

type Props = {
  task: Task;
  removeTask: RemoveTask;
};

export function TaskCard({ task, removeTask }: Props) {
  return (
    <div className={styles.card}>
      {task.completed ? <>✓</> : <>✗</>}
      <p>{task.title}</p>
      <button onClick={() => {removeTask(task.id)}}>delete</button>
    </div>
  );
}
