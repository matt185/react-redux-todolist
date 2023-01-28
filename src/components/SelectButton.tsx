import React from 'react'
import styles from "../styles/modules/button.module.scss"
import { getClasses } from '../utils/getClasses';

interface SelectButtonProps {
    children: any;
    id: string;
    onClick?: any

}

const SelectButton: React.FC<SelectButtonProps> = ({ children, id, ...rest }) => {
    return (
        <select className={getClasses([styles.button, styles.button__select])} id={id}>{children}</select>
    );
}

export default SelectButton