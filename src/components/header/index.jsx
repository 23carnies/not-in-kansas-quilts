import React from 'react'
import styles from './header.module.css'

export default function Header(props) {
    return (
        <h1>{props.headerText}</h1>
    )
}