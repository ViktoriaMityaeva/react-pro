import { useCallback, useEffect, useMemo, useState } from "react";
import { useGetTasksQuery, type Task } from "entities/task";
 
export type Filter = 'all' | 'completed' | 'incomplete'; 

type UseTasksResult = {
  tasks: Task[];
  filter: Filter;
  setFilter: (f: Filter) => void;
  removeTask: (id: number) => void;
};

export function useTasks(): UseTasksResult {
  const { data: remoteTasks } = useGetTasksQuery();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>('all');

  useEffect(() => {
    if (remoteTasks && tasks.length === 0) {
      setTasks(remoteTasks);
    }
  }, [remoteTasks]);

  const removeTask = useCallback((removeId: number) => {
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
