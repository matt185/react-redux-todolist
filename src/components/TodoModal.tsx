import React, { useState } from "react"
import styles from "../styles/modules/modal.module.scss"
import { MdOutlineClose } from "react-icons/md"
import Button from "./Button";

interface TodoModalProps {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>

}

const TodoModal: React.FC<TodoModalProps> = ({ modalOpen, setModalOpen }) => {
    const [title, setTitle] = useState<string>("")
    const [status, setStatus] = useState<string>("incomplete")
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(title, status)
    }
    return (
        <div>
            {modalOpen && (
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <div className={styles.closeButton}>
                            <MdOutlineClose
                                onClick={() => setModalOpen(false)}
                                onKeyDown={() => setModalOpen(false)}
                                tabIndex={0}
                                role="button"
                            />
                        </div>
                        <form
                            className={styles.form}
                            onSubmit={(e) => submitHandler(e)}
                        >
                            <h1 className="styles.formTitle">Add Todo</h1>
                            <label htmlFor="title">
                                Title
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="New Todo"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)} />
                            </label>
                            <label htmlFor="status">
                                Status
                                <select
                                    name="status"
                                    id="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}>
                                    <option value="incomplete">Incomplete</option>
                                    <option value="complete">Complete</option>
                                </select>
                            </label>
                            <div className={styles.buttonContainer}>
                                <Button type="submit" variant="primary">Add</Button>
                                <Button
                                    variant="secondary"
                                    onClick={() => setModalOpen(false)}
                                    onKeyDown={() => setModalOpen(false)}>
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </div>
                </div >
            )}
        </div>
    );
}

export default TodoModal