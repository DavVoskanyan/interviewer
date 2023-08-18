import styles from "./CardsContainer.module.css";
import {ReactElement} from "react";
import LinkCard from "@/app/components/linkCard/LinkCard";

const CardsContainer = (): ReactElement => {
    return (
        <div className={styles.cardsContainer}>
            <LinkCard cardTitle='AI' target={"#sectionOfТехт"}/>
            <LinkCard cardTitle='Design' target={"#sectionOfDesign"}/>
            <LinkCard cardTitle='Potential' target={"#sectionOfТехт"}/>
        </div>
    )
}

export default CardsContainer;