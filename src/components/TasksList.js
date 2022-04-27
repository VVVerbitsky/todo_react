import React from 'react';
import './TaskList.css';
import TaskCell from './TaskCell'

const TaskList = ({tasks, done=false}) => {

    return (
        <div className='task-list'>
            {tasks.length !== 0 ? tasks.map(
                    task => <TaskCell key={task.id} {...task} done={done} />) : <div>empty list</div>}
        </div>
    )
}
export default TaskList