import React from 'react'
import styles from './CreateTask.module.css'
import { NotePencil } from '@phosphor-icons/react'

export function CreateTask({
  handleCreateNewTask,
  newTask,
  handleNewTaskChange,
  handleNewTaskInvalid,
  isNewTaskEmpty,
}) {
  return (
    <section className={styles.container}>
      <form onSubmit={handleCreateNewTask} className={styles.content}>
        {/* <label htmlFor="todo">Label</label> */}
        <textarea
          id="todo"
          type="text"
          value={newTask}
          placeholder="insert new task"
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          aria-label="Insert new task"
          ref={(textarea) => textarea && textarea.focus()}
        />

        <div className={styles.buttonBox}>
          <button
            type="submit"
            disabled={isNewTaskEmpty}
            aria-label="criar nota"
            title={isNewTaskEmpty ? 'Preencha a tarefa' : 'Criar tarefa'}
          >
            <NotePencil color="#e53170" weight="regular" size={24} />
          </button>
        </div>
      </form>
    </section>
  )
}
