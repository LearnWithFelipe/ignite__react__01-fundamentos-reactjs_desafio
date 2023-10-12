import React from 'react'
import styles from './InfoTask.module.css'

import '../utils/i18n.jsx'
import { useTranslation } from 'react-i18next'

export function InfoTask({ tasks, taskFinished, isTasksEmpty }) {
  const { t, i18n } = useTranslation()
  return (
    !isTasksEmpty && (
      <section className={styles.container}>
        <div className={styles.content}>
          <div>
            <h2 className={styles.headline}>
              {t('task', { context: 'created', count: tasks.length })}
            </h2>
          </div>
          {taskFinished.length >= 1 && (
            <div>
              <h2 className={styles.headline}>
                {t('task', {
                  context: 'completed',
                  count: taskFinished.length,
                })}
                {t('task', { context: 'created', count: tasks.length })}
              </h2>
            </div>
          )}
        </div>
      </section>
    )
  )
}
