import styles from "./FormSwitcher.module.css";
import {JSX} from "react";

const FormSwitcher = (props: any): JSX.Element => {
    return (
        <button className={styles.formSwitcher} onClick={props.switchForm}>
            <div className={`${styles.textBackground} ${props.isLoginActive ? styles.login : styles.signup}`}></div>
            <span className={styles.switcherOption}>login</span>
            <span className={styles.switcherOption}>signup</span>
        </button>
    )
}

export default FormSwitcher;