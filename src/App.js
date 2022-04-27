import React from 'react';
import NewTask from './components/NewTask';
import TaskHeader from './components/TaskHeader';
import TasksList from './components/TasksList'
import { useTasks } from '../src/components/TaskContext-hooks';

const App=()=> {
  const {todoTasks, doneTasks} = useTasks();
  console.log(doneTasks)
  return (
    <div className="App">
        <NewTask/>
        <TaskHeader/>
        <TasksList tasks={todoTasks}/>
        <TaskHeader done={true}/>
        <TasksList tasks={doneTasks}/>
    </div>
  );
}

export default App;
