import styles from './Banner.module.css';
import {ReactElement} from "react";

const Banner = (): ReactElement => {
    return (
        <div className={styles.banner}>
            <div className={styles.darkLayer}>
                <h1 className={styles.onBannerTitle}>
                    Prepare yourself with {`{ `}Interviewer{` }`}
                </h1>
                <p className={styles.onBannerText}>
                    web-application, that allows you to
                    prepare for your real interview
                    by training on simulation.
                </p>
            </div>
        </div>
    )
}

export default Banner;