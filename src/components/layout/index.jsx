import React from 'react'
import styles from './layout.module.css'
import NavBar from '../navbar'


export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <main>
            <NavBar />
                {children}
            </main>
        </div>
    )
}