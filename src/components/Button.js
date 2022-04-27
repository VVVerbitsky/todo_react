import React from 'react';

const Button = ({ clickHandler = f => f, name = '', editable = '', saved = '', id, value }) => {
    return (
        <div
            className='button'
            onClick={clickHandler}
        >
            {name}
        </div>
    )
}

export default Button;