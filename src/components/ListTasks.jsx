import React from 'react'
import styles from './ListTasks.module.css'
import Task from './Task'
import { Champagne } from '@phosphor-icons/react'
export function ListTasks({
  tasks,
  handleRemoveTask,
  handleIsComplete,
  isTasksEmpty,
  taskFinished,
}) {
  return (
    !isTasksEmpty && (
      <div className={styles.container}>
        {taskFinished.length === tasks.length && (
          <div className={styles.emptyContent}>
            <Champagne size={80} color="#0f0e17" weight="thin" />

            <h3 className={styles.emptyHeadline}>You have no task to do! </h3>
            <p className={styles.emptySubHeadline}>Enjoy your day</p>
          </div>
        )}

        <div className={styles.content}>
          {tasks
            .slice(0)
            .reverse()
            .map((task) => {
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
