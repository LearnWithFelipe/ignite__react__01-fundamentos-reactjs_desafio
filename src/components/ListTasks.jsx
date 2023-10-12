import React from 'react'
import styles from './ListTasks.module.css'
import Task from './Task'
import { Champagne } from '@phosphor-icons/react'

import '../utils/i18n.jsx'
import { useTranslation } from 'react-i18next'

export function ListTasks({
  tasks,
  handleRemoveTask,
  handleIsComplete,
  isTasksEmpty,
  taskFinished,
}) {
  const { t, i18n } = useTranslation()

  return (
    !isTasksEmpty && (
      <div className={styles.container}>
        {taskFinished.length === tasks.length && (
          <div className={styles.emptyContent}>
            <Champagne size={80} color="#0f0e17" weight="thin" />

            <h3 className={styles.emptyHeadline}>
              {t('NO_USER_TASK_HEADLINE')}
            </h3>
            <p className={styles.emptySubHeadline}>
              {t('NO_USER_TASK_SUBHEADLINE')}
            </p>
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
