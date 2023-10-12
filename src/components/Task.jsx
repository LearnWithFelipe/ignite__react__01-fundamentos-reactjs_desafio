import React from 'react'
import styles from './Task.module.css'
import { Trash, RadioButton } from '@phosphor-icons/react'
export default function Task({ task, handleIsComplete, handleRemoveTask }) {
  return (
    <div
      role="listitem"
      className={`
      ${styles.task}  
      ${task.isComplete ? styles.taskDone : styles.taskTodo}`}
    >
      <div>
        <header className={styles.taskHeader}>
          <button
            className={styles.radioButton}
            onClick={() => handleIsComplete(task.id)}
            aria-label={` ${
              task.isComplete ? 'Turn task to do' : 'Make task done'
            }  ${task.title}`}
          >
            {task.isComplete ? (
              <RadioButton
                className={styles.radioButtonIcon}
                size={24}
                color="#c922a4"
                weight="fill"
              />
            ) : (
              <RadioButton
                className={styles.radioButtonIcon}
                size={24}
                color="#c922a4"
              />
            )}
            <span className={styles.radioButtonName}>
              {task.isComplete ? 'Turn task to do' : 'Make task done'}
            </span>
          </button>

          <button
            className={styles.deleteButton}
            title={`Remover task: ` + task.title}
            onClick={() => handleRemoveTask(task.id)}
          >
            <span className={styles.deleteButtonName}>Remove task</span>
            <Trash
              className={styles.deleteButtonIcon}
              size={24}
              color="#c922a4"
            />
          </button>
        </header>

        <div className={styles.taskContent}>
          <p>
            {task.title}
            {/* {task.id} */}
          </p>
        </div>
      </div>
    </div>
  )
}
