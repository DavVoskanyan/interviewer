import styles from "./LinkToApp.module.css";
import {JSX} from "react";

const LinkToApp = (): JSX.Element => {
    return (
        <a className={styles.linkToApp} href="">Try Now</a>
    )
}

export default LinkToApp;