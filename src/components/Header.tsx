import React from "react"
import styles from "../styles/modules/header.module.scss"
import Button from "./Button";
import SelectButton from "./SelectButton";

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({ }) => {
    return (
        <div className={styles.header}>
            <Button variant="primary">Add Todo</Button>
            <SelectButton id="status">
                <option value="all">ALL</option>
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
            </SelectButton>
        </div>
    );
}