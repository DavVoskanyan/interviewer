import styles from "./LinkCard.module.css";
import keyframes from "@/app/keyframes.module.css";
import {ReactElement} from "react";

const LinkCard = (props: any): ReactElement => {

    return (
        <a href={props.target} className={styles.linkCard} tabIndex={1}>
            <span className={styles.cardTitle} style={{animationName: keyframes.textGradientMovement}}>
                {props.cardTitle}
            </span>
        </a>
    )
}

export default LinkCard;