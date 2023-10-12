import { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './utils/i18n.jsx'
import { useTranslation } from 'react-i18next'
import useSound from 'use-sound'

import './App.css'
import { CreateTask } from './components/CreateTask'
import { EmptyState } from './components/EmptyState'
import { ListTasks } from './components/ListTasks'
import { Header } from './components/Header'
import { InfoTask } from './components/InfoTask'
import ChangeLanguage from './components/ChangeLanguage.jsx'

import popUrl from './assets/sounds/pop.mp3'
import popDownUrl from './assets/sounds/pop-down.mp3'
import popOffUrl from './assets/sounds/pop-off.mp3'
import fanfareUrl from './assets/sounds/fanfare.mp3'

function App() {
  const { t, i18n } = useTranslation()
  const [tasks, setTasks] = useState([])
  const [newTask, setNewtask] = useState('')
  const listRef = useRef(null)
  const [triggered, setTriggered] = useState(false)

  const [haveNoTask, { stop }] = useSound(fanfareUrl, {
    volume: 0.3,
    interrupt: true,
  })

  const [createTaskSound] = useSound(popUrl, {
    volume: 0.5,
  })
  const [deleteTaskSound] = useSound(popDownUrl, {
    volume: 0.5,
  })

  const [completeTaskSound] = useSound(popOffUrl, {
    volume: 0.5,
  })

  function handleCreateNewTask() {
    event.preventDefault()

    const newTaskContent = {
      id: uuidv4(),
      title: newTask,
      isComplete: false,
    }
    createTaskSound()

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
    completeTaskSound()
  }

  function handleRemoveTask(id) {
    const filteredTaks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTaks)
    deleteTaskSound()
  }

  const handleClickScroll = () => {
    listRef.current.scrollIntoView()
  }

  function triggerHaveNoTask() {
    haveNoTask()
  }

  const isNewTaskEmpty = newTask.length === 0
  const isTasksEmpty = tasks.length === 0
  const taskFinished = tasks.filter((finished) => finished.isComplete === true)

  return (
    <div className="app">
      <ChangeLanguage />
      <Header />
      <CreateTask
        listRef={listRef}
        handleClickScroll={handleClickScroll}
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
        taskFinished={taskFinished}
        triggerHaveNoTask={triggerHaveNoTask}
      />
    </div>
  )
}

export default App
