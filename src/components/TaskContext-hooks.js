import React, { createContext, useContext, useState } from 'react';
import dataTasks from '../data/taskSetExample.json'
import { v4 } from 'uuid';

export const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
    const [todoTasks, setTodoTasks] = useState(dataTasks.filter((el) => el.type === true));
    const [doneTasks, setDoneTasks] = useState(dataTasks.filter((el) => el.type !== true));


    const stateSelect = (type) =>
        type ? [todoTasks, setTodoTasks] : [doneTasks, setDoneTasks];

    const add = (content, tasks, type, setFunc = f => f) =>
        setFunc([
            ...tasks,
            {
                id: v4(),
                content,
                type: type
            }
        ]);

    const addTask = (content) =>
        add(content, todoTasks, true, setTodoTasks)

    const remove = (id, type) => {
        const [newTasks, setFunc] = stateSelect(type);
        setFunc(
            newTasks.filter(task => task.id !== id)
        )

    }


    const changeType = (id, content, type) => {
        if (type) {
            remove(id, type);
            const [newTasks, setFunc] = stateSelect(!type);
            add(content, newTasks, type = !type, setFunc);
        } else {
            remove(id, type);
            const [newTasks, setFunc] = stateSelect(!type);
            add(content, newTasks, type = !type, setFunc);
        }
    }

    const change = (id, content, type) => {
        const [newTasks, setFunc] = stateSelect(type);
        const tasks = [...newTasks]
        const index = tasks.findIndex(el => id === el.id)
        newTasks[index] = { ...tasks[index], content };
        setFunc(tasks);
    }

    return (
        <div className='fuckProvider'>
            <TaskContext.Provider value={{
                todoTasks,
                doneTasks,
                change,
                addTask,
                remove,
                changeType
            }}>
                {children}
            </TaskContext.Provider>
        </div>
    )
};

export default TaskProvider;
