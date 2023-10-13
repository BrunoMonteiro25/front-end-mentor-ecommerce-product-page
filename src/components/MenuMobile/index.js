/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react'

import styles from './MenuMobile.module.css'

// import IconClose from '../../assets/icon-close.svg'

const MenuMobile = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <>
      {mobileMenuOpen && (
        <div className={styles.opacity}>
          <div className={styles.container}>
            <div className={styles.menu}>
              <button onClick={() => setMobileMenuOpen(false)}>
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fill="#69707D"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>

              <ul>
                <li>
                  <a href="#">Colletions</a>
                </li>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MenuMobile
