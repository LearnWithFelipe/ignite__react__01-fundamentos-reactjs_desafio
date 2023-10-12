import React, { useState } from 'react'
import styles from './ChangeLanguage.module.css'

import '../utils/i18n.jsx'
import { useTranslation } from 'react-i18next'

import { US, BR } from 'country-flag-icons/react/3x2'

export default function ChangeLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState('pt')

  const { t, i18n } = useTranslation()
  const clickLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => {
        console.log('LINGUAGEM ALTERADA PARA ' + value)
        setCurrentLanguage(value)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <button
                title={t('change_language_en')}
                className={` ${styles.button}   ${
                  currentLanguage === 'en' && styles.buttonSelected
                } `}
                onClick={() => clickLanguage('en')}
              >
                <US
                  aria-hidden="true"
                  alt={t('change_language_en')}
                  className={styles.flag}
                />
              </button>
            </li>

            <li className={styles.item}>
              <button
                title={t('change_language_pt')}
                className={` ${styles.button}   ${
                  currentLanguage === 'pt' && styles.buttonSelected
                } `}
                onClick={() => clickLanguage('pt')}
              >
                <BR alt={t('change_language_pt')} className={styles.flag} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
