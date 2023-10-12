import React from 'react'
import styles from './CreateTask.module.css'
import { NotePencil } from '@phosphor-icons/react'

import '../utils/i18n.jsx'
import { useTranslation } from 'react-i18next'

export function CreateTask({
  handleCreateNewTask,
  newTask,
  handleNewTaskChange,
  handleNewTaskInvalid,
  isNewTaskEmpty,
}) {
  const { t, i18n } = useTranslation()

  return (
    <section className={styles.container}>
      <form onSubmit={handleCreateNewTask} className={styles.content}>
        <label htmlFor="todo">{t('WRITE_A_NEW_TASK')}</label>
        <textarea
          id="todo"
          type="text"
          value={newTask}
          placeholder={t('WRITE_A_NEW_TASK')}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          aria-label={t('WRITE_A_NEW_TASK')}
          ref={(textarea) => textarea && textarea.focus()}
        />

        <div className={styles.buttonBox}>
          <button
            type="submit"
            disabled={isNewTaskEmpty}
            aria-label={t('CREATE_NEW_TASK')}
            title={
              isNewTaskEmpty ? t('TASK_TEXTAREA_EMPTY') : t('CREATE_NEW_TASK')
            }
          >
            <NotePencil color="#e53170" weight="regular" size={24} />
          </button>
        </div>
      </form>
    </section>
  )
}
