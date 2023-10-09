import React from 'react'
import styles from './InfoTask.module.css'

export function InfoTask({ tasks, taskFinished, isTasksEmpty }) {
  return (
    !isTasksEmpty && (
      <section className={styles.container}>
        <div className={styles.content}>
          <div>
            <h2 className={styles.headline}> Tarefas criadas {tasks.length}</h2>
          </div>

          <div>
            <h2 className={styles.headline}>
              Concluídas {taskFinished.length} de {tasks.length}
            </h2>
          </div>
        </div>
      </section>
    )
  )
}
