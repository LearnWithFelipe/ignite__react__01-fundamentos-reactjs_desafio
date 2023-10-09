import React from 'react'
import { Horse } from '@phosphor-icons/react'
import styles from './EmptyState.module.css'

export function EmptyState({ isTasksEmpty }) {
  return (
    isTasksEmpty && (
      <section className={styles.container}>
        <Horse color="#AE2983" weight="duotone" size={32} />
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
