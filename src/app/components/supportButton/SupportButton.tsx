import styles from "./SupportButton.module.css";
import {JSX} from "react";
import Image from "next/image";

const SupportButton = (props: any): JSX.Element => {
    return (
        <a className={styles.supportButton} href={props.supportLink} target="_blank">
            <Image className={styles.buttonImage} src={props.buttonImage} alt="buttonImage"/>
            <span className={styles.buttonText}>
                {props.buttonText}
            </span>
        </a>
    )
}

export default SupportButton;