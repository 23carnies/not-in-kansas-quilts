import React from 'react'
import { Link } from 'gatsby'
import styles from './navbar.module.css'

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <Link to="/NIK" id={styles.siteTitle}>Not in Kansas, Quilts by Dorothy</Link>
            <Link to="/NIK/memory">Memory Quilts</Link>
            <Link to="/NIK/design">Designed Quilts</Link>
            <Link to="/NIK/testimonials">Testimonials</Link>
            <Link to="/NIK/contact">Contact</Link>
        </nav>
    )
} 