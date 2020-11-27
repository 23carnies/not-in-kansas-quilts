import React from 'react'
import { Link } from 'gatsby'
import styles from './navbar.module.css'

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.wrapper}>
            <Link to="/" id={styles.siteTitle}>Not in Kansas, Quilts by Dorothy</Link>
            <Link to="/memory">Memory Quilts</Link>
            <Link to="/design">Designed Quilts</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
} 