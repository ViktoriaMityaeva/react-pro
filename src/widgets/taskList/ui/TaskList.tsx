import { FilterButton } from "shared/ui/FilterButton";
import { useTasks } from "../model/useTasks";
import { TaskCard } from "entities/task";

export function TaskList() {
  const { tasks, setFilter, removeTask } = useTasks();

  return (
    <div>
      <div>
        <FilterButton
          title="All"
          onClick={() => setFilter('all')}
        />

        <FilterButton
          title="Completed"
          onClick={() => setFilter('completed')}
        />

        <FilterButton
          title="Incomplete"
          onClick={() => setFilter('incomplete')}
        />
      </div>

      {tasks.map(task => (
        <TaskCard 
          key={task.id} 
          task={task}
          removeTask={removeTask}
        />
      ))}
    </div>
  )
}