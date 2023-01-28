import React from "react"
import styles from "../styles/modules/header.module.scss"

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({ }) => {
    return (
        <div className={styles.header}>
            <p>component1</p>
            <p>component1</p>
        </div>
    );
}