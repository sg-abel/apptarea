import React from 'react';

export const TaskBanner = props => (
    <h2 className="bg-primary text-white text-center p-4">
        Lista de Tareas ({props.taskItems.filter(t => !t.done).length} tareas por hacer)
    </h2>
)