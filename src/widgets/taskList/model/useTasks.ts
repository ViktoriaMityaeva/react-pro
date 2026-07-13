import type { Task } from "entities/task";
import { useCallback, useMemo, useState } from "react";
 
export type Filter = 'all' | 'completed' | 'incomplete'; 

type UseTasksResult = {
  tasks: Task[];
  filter: Filter;
  setFilter: (f: Filter) => void;
  removeTask: (id: string) => void;
};

const initialTasks: Task[] = [
  { id: '1', title: "Create app", completed: true },
  { id: '2', title: "Configure ESLint", completed: false },
  { id: '3', title: "Create folder entities", completed: false },
  { id: '4', title: "Create folder features", completed: false },
  { id: '5', title: "Create folder shared", completed: true },
  { id: '6', title: "Create folder pages", completed: false },
];

export function useTasks(initial: Task[] = initialTasks): UseTasksResult {
  const [tasks, setTasks] = useState<Task[]>(initial);
  const [filter, setFilter] = useState<Filter>('all');

  const removeTask = useCallback((removeId: string) => {
    setTasks(prev => prev.filter(task => task.id !== removeId));
  }, []);

  const filteredTasks: Task[] = useMemo(() => (
    filter === 'all' ? tasks
      : filter === 'completed' ? tasks.filter(task => task.completed)
      : tasks.filter(task => !task.completed)
  ), [filter, tasks]);

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    removeTask,
  };
}
