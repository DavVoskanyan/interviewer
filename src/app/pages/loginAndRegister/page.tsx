"use client";

import styles from "./LoginAndRegister.module.css";
import {JSX, useState} from "react";
import FormSwitcher from "@/app/components/formSwitcher/FormSwitcher";

export default function LoginAndRegister(): JSX.Element {
    let [isLoginActivated, changeForm] = useState(true)
    const switchForm = (): void => changeForm(!isLoginActivated);

    return (
        <main className={styles.main}>
            <div className={styles.contentContainer}>
                <FormSwitcher switchForm={switchForm} isLoginActive={isLoginActivated}/>
                <div className={styles.formsContainer}>

                </div>
            </div>
        </main>
    )
}
