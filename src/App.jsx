import { useState } from 'react'
 import {v4 as uuidv4} from 'uuid'
import './App.css'


 

function App() {

 

const [selected, setSelected] = useState(false)
const [deleted, setDeleted] = useState(false)
 
const [tasks, setTasks] = useState([])

const [newTask, setNewtask] = useState('')

console.log('tasks',tasks)
console.log('---')
console.log('newTask',newTask)

function handleCreateNewTask(){
  event.preventDefault()
 
  const newTaskContent = {
    id: uuidv4(),
    title: newTask,
    isComplete: false
  }
    
  setTasks([...tasks, newTaskContent])
  setNewtask('')
   
}


function handleNewTaskChange(){
  setNewtask( event.target.value  )
  event.target.setCustomValidity('')
}

function handleNewTaskInvalid(){
  event.target.setCustomValidity('Este campo é obrigatório');
}

const isNewTaskEmpty = newTask.length === 0;
 



function handleIsComplete(id){
  const taskSelectedIsComplete = tasks.map( task => task.id === id 
      ? {...task, isComplete: !task.isComplete }
      : task )
  ;
 setTasks(taskSelectedIsComplete)  
}

//contagem de itens finalizados
const taskFinished = tasks.filter( finished => 
  finished.isComplete === true
)



function handleRemoveTask(id){
   const filteredTaks = tasks.filter( task => task.id !== id)
   setTasks(filteredTaks)  
}




  return (
    <div className='app'>
      <header>
        <form onSubmit={handleCreateNewTask} action="" className='d-flex'>
        <div>
        <label htmlFor="todo1"></label>
        <input 
          id="todo1" 
          type="text" 
          value={newTask}
          placeholder='insert new task'
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          />
        </div>

        <div>
          <button type='submit' 
          disabled={isNewTaskEmpty}> Criar</button>
        </div>

        </form>
      </header>

      <section> 
        <header className='d-flex jc-sb al-c'>
          <div className='d-flex'>
            <h2> Tarefas criadas {tasks.length}</h2> 
          </div>

          <div className='d-flex'>
            <strong>concluidas</strong>
            <span>{taskFinished.length} de {tasks.length}</span>
          </div>
        </header>

        <ul className='p-0 m-0'>
         

        { tasks.map( task=> {
              return (
                <li key={task.id} className='ls-n' >
                <div className='d-flex  jc-sb al-c'>
                  <button onClick={()=>handleIsComplete(task.id)} name={task.id}>{task.isComplete ? 'feito' : 'a fazer'}</button>
                  <div>
                    <p> {task.title} + {task.id}</p>
                  </div>
                  <button onClick={()=> handleRemoveTask(task.id)}>remover</button>
                </div>
              </li>
              )
          })
        }

        </ul>
      </section>
    </div>
  )
}

export default App
