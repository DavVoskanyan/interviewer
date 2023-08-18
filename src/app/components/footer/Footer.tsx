import styles from "./Footer.module.css";
import keyframes from "@/app/keyframes.module.css";

import {JSX} from "react";
import SupportButton from "@/app/components/supportButton/SupportButton";

import artsakhFlag from "../../../../public/images/artsakhFlag.jpeg";
import ukraineFlag from "../../../../public/images/ukraineFlag.jpeg";

const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <div className={styles.supportContainer}>
                <SupportButton
                    buttonImage={ukraineFlag}
                    buttonText="Support Ukraine"
                    supportLink="https://war.ukraine.ua/support-ukraine/"/>

                <p className={styles.createdBy}>
                    web-page created by

                </p>
                <SupportButton
                    buttonImage={artsakhFlag}
                    buttonText="Support Artsakh"
                    supportLink="https://artsakhsupportbody.com/"/>
            </div>
                <span className={styles.creator} style={{animationName: keyframes.textGradientMovement}}>
                    {' '}Sicmundus
                </span>

            <span className={styles.rights}>
                    All rights reserved 2023
                </span>
        </footer>
    )
}

export default Footer;