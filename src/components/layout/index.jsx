import React from 'react'
import styles from './layout.module.css'
import NavBar from '../navbar'
import Footer from '../footer'


export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <main>
            <NavBar />
                {children}
            <Footer />
            </main>
        </div>
    )
}