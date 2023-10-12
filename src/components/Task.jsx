import React from 'react'
import styles from './Task.module.css'
import { Trash, RadioButton } from '@phosphor-icons/react'

import '../utils/i18n.jsx'
import { useTranslation } from 'react-i18next'

export default function Task({ task, handleIsComplete, handleRemoveTask }) {
  const { t, i18n } = useTranslation()
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
            aria-label={` {task.isComplete ? t('RETURN_TASK_TO_TODO') : t('SET_IT_TO_DONE')}  ${task.title}`}
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
              {task.isComplete ? t('RETURN_TASK_TO_TODO') : t('SET_IT_TO_DONE')}
            </span>
          </button>

          <button
            className={styles.deleteButton}
            title={t('REMOVE_TASK') + ': ' + task.title}
            onClick={() => handleRemoveTask(task.id)}
          >
            <span className={styles.deleteButtonName}>{t('REMOVE_TASK')}</span>
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
