import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
          <div className={styles.wrapper}>
            <p className={styles.p} id={styles.small}>&copy; {new Date().getFullYear()} Not in Kansas, Quilts by Dorothy</p>
            <p className={styles.p}>Site design by 23carnies</p>
          </div>
        </footer>
    )
}