import React from 'react';
import {useState} from "react"
import { useTasks } from './TaskContext-hooks';
import './button.css';
import './NewTask.css';
import Button from './Button'
import TaskInput from './TaskInput';

const NewTask = () => {
    const [value, setValue] = useState('');
    const {addTask} = useTasks();

    const createTask = (value)=>{
        if (value!=="") {
        addTask(value);
        setValue('')    }
    }

    const onChanger=(value)=>{
        setValue(value)
    }
    
    const pressKey= (key)=>{
        if (key==='Enter') 
            createTask(value)
    }

    return (
        
        <div className='new-task'>
            
            <TaskInput 
                content={value}
                onChanger={onChanger}
                keyHandler={pressKey}
            />

            <Button
            clickHandler={()=>createTask(value)}
            name='ADD'
            />
        </div>
    )
}

export default NewTask;