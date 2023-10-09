import React from 'react'
import styles from './ListTasks.module.css'
export function ListTasks({
  tasks,
  handleRemoveTask,
  handleIsComplete,
  isTasksEmpty,
}) {
  return (
    !isTasksEmpty && (
      <div role="list" className={styles.container}>
        {tasks.map((task) => {
          return (
            <div role="listitem" key={task.id} className="ls-n">
              <div className="d-flex  jc-sb al-c">
                <button onClick={() => handleIsComplete(task.id)}>
                  {task.isComplete ? 'feito' : 'a fazer'}
                </button>
                <div>
                  <p>
                    {task.title} + {task.id}
                  </p>
                </div>
                <button onClick={() => handleRemoveTask(task.id)}>
                  remover
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  )
}
