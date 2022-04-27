import React, { useState} from 'react';
import { useTasks } from './TaskContext-hooks';
import './button.css';
import Button from './Button';
import TaskInput from './TaskInput';

const Task = ({ id, content, type }) => {
    const {change,remove,changeType } = useTasks();
    const [value, setValue] = useState(content);
    const [editable, setEditable] = useState(false);
    const [saved, setSaved] = useState(false);
    
    if (!type){
        return(
            <div className='task'>
                <input
                    className='button'
                    type='checkbox'
                    onChange={() => changeType(id, value, type)}
                    checked={!type ? true : false}
                />

                <TaskInput
                    className={!saved ? 'content butt-field' : 'content'}
                    content={value}
                    editable={false}
                />

                <Button
                    clickHandler={() => remove(id, type)}
                    name='delete'
                />
            </div>
        )
    } else {

        const clickEdit = () => {
            const newEditable = !editable;
            const newSaved = !saved;

            setEditable(newEditable);            
            setSaved(newSaved);

            if (editable) {
                if (!value) remove(id, type)
                else change(id, value, type);
            }
        }

        const pressKey = (key) => {
        if (key === 'Enter') clickEdit()
        }

        return (
            <div className='task'>
                <input
                    className='button'
                    type='checkbox'
                    onChange={() => changeType(id, value, type)}
                    checked={!type ? true : false}
                />
                
                <TaskInput
                    className={!saved ? 'content butt-field' : 'content'}
                    content={value}
                    editable={editable}
                    onChanger={e => setValue(e)}
                    keyHandler={pressKey}
                />
                <Button
                    clickHandler={() => remove(id, type)}
                    name='delete'
                />
                <Button
                    clickHandler={clickEdit}
                    name={editable ? 'save' : 'edit'}
                />
            </div>
        )
    }
}

export default Task;