import React, {useState} from 'react';

export const TaskCreator = props => {

    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskValue = e => setNewTaskName(e.target.value);

    const creaeNewTask = () => {
        props.callback(newTaskName);
        setNewTaskName('');
    }

    return (
        <div className="container">
            <div className="my-2">
                <input 
                    type="text"
                    className="form-control"
                    value={newTaskName} 
                    onChange={updateNewTaskValue}    
                    placeholder="Agregar Tarea"           
                />
        </div>
            <div className="container">                
                <button className="btn btn-primary mt-1" onClick={creaeNewTask}>
                    Agregar
                </button>                    
            </div>
        </div>
    )
}