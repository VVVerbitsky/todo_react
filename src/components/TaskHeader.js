import React from 'react';
import './TaskList.css';

const TaskHeader=({done=false})=>{
    return(
        <div className='TODO'>{done?'DONE':'TODO'}</div>
    )
}

export default TaskHeader