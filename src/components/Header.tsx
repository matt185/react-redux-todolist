import React, { useState } from "react"
import styles from "../styles/modules/app.module.scss"
import Button from "./Button";
import SelectButton from "./SelectButton";
import TodoModal from "./TodoModal";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({ }) => {

    const [modalOpen, setModalOpen] = useState<boolean>(false)

    return (
        <div className={styles.header}> 
            <Button variant="primary" onClick={() => setModalOpen(true)}>Add Todo</Button>
            <SelectButton id="status">
                <option value="all">ALL</option>
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
            </SelectButton>
            <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div >
    );
}

export default Header