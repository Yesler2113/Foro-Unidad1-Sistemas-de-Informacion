import { useState } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  return {
    tasks,
    addTask,
  };
};

export default useTasks;

