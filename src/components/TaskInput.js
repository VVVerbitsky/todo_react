import React from 'react'; 
import './button.css'

const TaskInput = ({
    className='',
    content='', 
    editable=true, 
    onChanger=f=>f, 
    keyHandler=f=>f
}) => {
    return(
        <input
            className={className}
            disabled={!editable}
            value={content}
            onChange={e=>onChanger(e.target.value)}
            onKeyDown={e=>keyHandler(e.key)}
            placeholder='enter task'
            type='text'
            required
        />
    )
}

export default TaskInput;