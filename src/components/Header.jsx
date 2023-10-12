import React from 'react'
import { Horse } from '@phosphor-icons/react'
import styles from './Header.module.css'

import '../utils/i18n.jsx'
import { useTranslation } from 'react-i18next'

export function Header() {
  const { t, i18n } = useTranslation()
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Horse color="#fff" weight="thin" size={60} />

        <h1 className={styles.headline}>{t('TITLE')}</h1>
        <p className={styles.paragraph}> {t('SLOGAN')}</p>
      </div>
    </header>
  )
}
