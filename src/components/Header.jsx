import React from 'react'
import { Note } from '@phosphor-icons/react'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Note
          className={styles.brand}
          color="#e53170"
          weight="thin"
          size={48}
        />
        <h1 className={styles.headline}>My Notes</h1>
        <p className={styles.paragraph}>Não perca nada.</p>
      </div>
    </header>
  )
}
