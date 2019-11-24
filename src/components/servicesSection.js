import React from 'react'

import styles from './servicesSection.module.scss'
import Heading from './heading'
import Card from './card';
import longCruise from '../assets/long-cruise.jpg'
import specialOccasion from '../assets/special-occasion.jpg'
import oneDayTrip from '../assets/one-day-trips.jpg'


export default function ServicesSection() {
    return (
        <div className={styles.wrapper}>
            <Heading type="subtitle" text="Services"/>
            <Heading type="title" text="Experience the sea with us"/>

            <p className={styles.servicesIntro}>Integer sagittis nisi nec tortor fermentum aliquet. Integer non neque tempor, porttitor lorem id, commodo nulla. Nullam sed ultricies erat, nec euismod metus. Morbi porttitor sapien vitae leo scelerisque consequat.</p>

            <div className={styles.cardContainer}>
                <Card imgSrc={longCruise} title="Long Cruise" imgAlt="Long cruise" text="Integer sagittis nisi nec tortor fermentum aliquet. Integer non neque tempor, porttitor lorem id, commodo nulla." />
                <Card imgSrc={specialOccasion} title="Special Occasions" imgAlt="Long cruise" text="Integer sagittis nisi nec tortor fermentum aliquet. Integer non neque tempor, porttitor lorem id, commodo nulla." />
                <Card imgSrc={oneDayTrip} title="One-Day Trips" imgAlt="Long cruise" text="Integer sagittis nisi nec tortor fermentum aliquet. Integer non neque tempor, porttitor lorem id, commodo nulla." />
            </div>
            
        </div>
    )
}
