import React from 'react'
import { ArrowBendLeftUp } from '@phosphor-icons/react'
import styles from './EmptyState.module.css'

import '../utils/i18n.jsx'
import { useTranslation } from 'react-i18next'

export function EmptyState({ isTasksEmpty }) {
  const { t, i18n } = useTranslation()

  return (
    isTasksEmpty && (
      <section className={styles.container}>
        <ArrowBendLeftUp
          className={styles.icon}
          size={80}
          color="#0f0e17"
          weight="thin"
        />

        <div className={styles.content} aria-live="polite" role="alert">
          <h3 className={styles.headline}>{t('EMPTY_STATE_HEADLINE')}</h3>
          <p className={styles.subHeadline}>{t('EMPTY_STATE_SUBLINE')}</p>
        </div>
      </section>
    )
  )
}
