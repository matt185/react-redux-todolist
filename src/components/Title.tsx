import React from 'react'
import styles from "../styles/modules/title.module.scss"

interface TitleProps {
    children: string
}

const Title: React.FC<TitleProps> = ({ children, ...rest }) => {
    return (
        <p className={styles.title}> {children}</p>
    );
}

export default Title