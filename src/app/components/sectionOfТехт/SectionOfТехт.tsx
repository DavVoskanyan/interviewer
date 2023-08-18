"use client";

import styles from './SectionOfТехт.module.css';
import {MutableRefObject, ReactElement, useEffect, useRef} from "react";
import Image from "next/image";

const SectionOf = (props: any): ReactElement => {
    const screenWidth: number = window.innerWidth;
    const screenHeight: number = window.innerHeight;
    const countPointX: number = screenWidth - (screenWidth * 15 / 100) - 15;
    const countPointY: number = screenHeight / 2;

    const componentMainElement: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const inComponentImage: MutableRefObject<HTMLImageElement | null> = useRef(null);

    useEffect((): void => {
        if(componentMainElement.current && inComponentImage.current) {
            componentMainElement.current?.addEventListener('mousemove', (eventObject: MouseEvent): void => {
                const relativeX: number = eventObject.x - countPointX;
                const relativeY: number = eventObject.y - countPointY;
                if(inComponentImage.current) {
                    inComponentImage.current.classList.remove(styles.animated);
                    inComponentImage.current.style.translate = `${relativeX / 50}px ${relativeY / 20}px`;
                }
            })
            componentMainElement.current?.addEventListener('mouseout', (): void => {
                if(inComponentImage.current) {
                    inComponentImage.current.classList.add(styles.animated);
                    inComponentImage.current.style.translate = `0 0`;
                }
            })
        }
    })

    return (
        <div id='sectionOfAI'
             ref={componentMainElement}
             className={styles.sectionOfAI}
             style={{ backgroundColor: `var(${props.backgroundColor})`}}>

            <div className={styles.textPart}>
                <h2 className={styles.titleOfSection}>
                    {props.sectionTitle}
                </h2>
                <p className={styles.paragraphOfSection}>
                    {props.sectionText}
                </p>
            </div>

            <div className={styles.imageContainer}>
                <div className={styles.blurBackground}>
                    <Image
                        ref={inComponentImage}
                        className={styles.imageGPT}
                        src={props.image}
                        alt='sectionImage'/>
                </div>
            </div>

        </div>
    )
}

export default SectionOf;