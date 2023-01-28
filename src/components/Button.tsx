import React from "react"
import { getClasses } from "../utils/getClasses"
import styles from "../styles/modules/button.module.scss"

export type ButtonVariant = "primary" | "secondary";
export type ButtonType = "submit" | "button"

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
    children: string;
    variant: ButtonVariant;
    type?: ButtonType;
}

const Button: React.FC<ButtonProps> = ({ children, variant, type, ...rest }) => {
    return (
        <button
            type={type === "submit" ? "submit" : "button"}
            className={getClasses([styles.button, styles[`button--${variant}`]])}
            {...rest}>
            {children}
        </button>
    );
}

export default Button