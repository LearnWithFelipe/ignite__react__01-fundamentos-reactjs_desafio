import React from 'react'
import { ArrowBendLeftUp } from '@phosphor-icons/react'
import styles from './EmptyState.module.css'

export function EmptyState({ isTasksEmpty }) {
  return (
    isTasksEmpty && (
      <section className={styles.container}>
        <ArrowBendLeftUp size={80} color="#0f0e17" weight="thin" />

        <div className={styles.content} aria-live="polite" role="alert">
          <h3 className={styles.headline}>
            Você ainda não tem tarefas cadastradas
          </h3>
          <p className={styles.subHeadline}>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      </section>
    )
  )
}
