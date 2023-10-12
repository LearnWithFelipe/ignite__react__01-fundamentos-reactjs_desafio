import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './utils/i18n.jsx'
import { useTranslation } from 'react-i18next'

import './App.css'
import { CreateTask } from './components/CreateTask'
import { EmptyState } from './components/EmptyState'
import { ListTasks } from './components/ListTasks'
import { Header } from './components/Header'
import { InfoTask } from './components/InfoTask'

function App() {
  const { t, i18n } = useTranslation()
  const [tasks, setTasks] = useState([])
  const [newTask, setNewtask] = useState('')

  function handleCreateNewTask() {
    event.preventDefault()

    const newTaskContent = {
      id: uuidv4(),
      title: newTask,
      isComplete: false,
    }

    setTasks([...tasks, newTaskContent])
    setNewtask('')
  }

  function handleNewTaskChange() {
    setNewtask(event.target.value)
    event.target.setCustomValidity('')
  }

  function handleNewTaskInvalid() {
    event.target.setCustomValidity(`{t('THIS_FIELD_IS_REQUIRE')}`)
  }

  function handleIsComplete(id) {
    const taskSelectedIsComplete = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task,
    )
    setTasks(taskSelectedIsComplete)
  }

  function handleRemoveTask(id) {
    const filteredTaks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTaks)
  }

  const isNewTaskEmpty = newTask.length === 0
  const isTasksEmpty = tasks.length === 0
  const taskFinished = tasks.filter((finished) => finished.isComplete === true)

  return (
    <div className="app">
      <Header />
      <CreateTask
        handleCreateNewTask={handleCreateNewTask}
        newTask={newTask}
        handleNewTaskChange={handleNewTaskChange}
        handleNewTaskInvalid={handleNewTaskInvalid}
        isNewTaskEmpty={isNewTaskEmpty}
      />

      <EmptyState isTasksEmpty={isTasksEmpty} />

      <InfoTask
        tasks={tasks}
        taskFinished={taskFinished}
        isTasksEmpty={isTasksEmpty}
      />

      <ListTasks
        tasks={tasks}
        handleRemoveTask={handleRemoveTask}
        handleIsComplete={handleIsComplete}
        isTasksEmpty={isTasksEmpty}
      />
    </div>
  )
}

export default App
