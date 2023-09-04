"use client";

import styles from "./page.module.css"
import Banner from "@/app/components/banner/Banner";
import CardsContainer from "@/app/components/cardsContainer/CardsContainer";
import SectionOfText from "@/app/components/sectionOfТехт/SectionOfТехт";
import {JSX} from "react";

import imageGPT from "../../public/images/imageGPT.png";
import Footer from "@/app/components/footer/Footer";
import LinkToApp from "@/app/components/linkToApp/LinkToApp";

export default function Home(): JSX.Element {
    type sectionObject = {
        image: any,
        elementId: string,
        sectionTitle: string,
        sectionText: string,
        backgroundColor: string,
    }
    const sections: Array<sectionObject> = [
        {
            image: imageGPT,
            elementId: "sectionOfAI",
            sectionTitle: "AI",
            sectionText: "{ Interviewer } uses whole potential of ChatGPT created by OpenAI to bring to user new experience in web and new level of comfort.",
            backgroundColor: "--dark-background",
        },
        {
            image: imageGPT,
            elementId: "sectionOfDesign",
            sectionTitle: "Design",
            sectionText: "{ Interviewer } has comfortable and rich design to bring UI/UX to fully new level.",
            backgroundColor: "--darker-background",
        },
        {
            image: imageGPT,
            elementId: "sectionOfPotential",
            sectionTitle: "Potential",
            sectionText: "By using new technologies and having perfect vision on our purpose, we will never stop making our project better.",
            backgroundColor: "--dark-background",
        }
    ]

    return (
        <main className={styles.main}>
            <Banner />
            <LinkToApp />
            <CardsContainer />
            {
                sections.map((section: sectionObject, index: number): JSX.Element => {
                    return (
                        <SectionOfText
                            key={index}
                            elementId={section.elementId}
                            image={section.image}
                            sectionTitle={section.sectionTitle}
                            sectionText={section.sectionText}
                            backgroundColor={section.backgroundColor}
                        />
                    )
                })
            }
            <Footer />
        </main>
    )
}
