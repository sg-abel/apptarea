import React, {useState} from 'react';
import {TaskRow} from './components/TaskRow'
import {TaskBanner} from './components/taskBanner'
import {TaskCreator} from './components/TaskCreator'
import {VisibilityControl} from './components/VisibilityControl'

function App() {

  const [userName, setUserName] = useState('Abel');
  const [taskItems, setTaskItems] = useState([
    { name: 'Aprender React', done: false },
    { name: 'Hacer Test', done: false},
    { name: 'Enviar Test', done: false},
    { name: 'Quedar Contratado',done: true},
  ])

  const [showCompleted, setShowCompleted] = useState(true)
  
  const createNewTask = taskName => {
    if (!taskItems.find(t=> t.name === taskName)){
      setTaskItems([...taskItems, {name: taskName, done: false}])
    }
  }

  const toggleTask = task =>
    setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)))

  const taskTableRows = (doneValue) => 
    taskItems
    .filter(task => task.done === doneValue)
    .map(task => (
    <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
  ))
  
  return (

    <div>
      <TaskBanner userName={userName} taskItems={taskItems}/>
      <div className="bg-secondary-text-white text-center p-2">
        <VisibilityControl
          description="completas"
          isChecked={showCompleted}
          callback= {checked => setShowCompleted(checked)}          
        />
      </div>
     
      <TaskCreator callback={createNewTask}/>
      <div className="container my-4">
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>Descripción</th> 
              <th>Terminado</th> 
            </tr>
          </thead>
          <tbody>
            {taskTableRows(false)}
          </tbody>
        </table>
      </div>
        {
          showCompleted && (
            <div className="container ">
              <table className="table table-dark table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Descripcion</th>
                    <th>Terminado</th>
                  </tr>
                </thead>
                <tbody>
                  {taskTableRows(true)}
                </tbody>
              </table>
            </div>
          )
        }      
    </div>
  );
}

export default App;

