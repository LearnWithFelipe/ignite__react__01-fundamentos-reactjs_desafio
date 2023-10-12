import React from 'react'
import styles from './ListTasks.module.css'
import Task from './Task'
export function ListTasks({
  tasks,
  handleRemoveTask,
  handleIsComplete,
  isTasksEmpty,
}) {
  return (
    !isTasksEmpty && (
      <div className={styles.container}>
        <div className={styles.content}>
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                handleIsComplete={handleIsComplete}
                handleRemoveTask={handleRemoveTask}
              />
            )
          })}
        </div>
      </div>
    )
  )
}
