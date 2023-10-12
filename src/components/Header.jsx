import React from 'react'
import { Horse } from '@phosphor-icons/react'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Horse color="#fff" weight="thin" size={60} />

        <h1 className={styles.headline}>My Notes</h1>
        <p className={styles.paragraph}>Não perca nada.</p>
      </div>
    </header>
  )
}
