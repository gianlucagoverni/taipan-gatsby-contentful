import React from 'react'

import styles from './aboutSection.module.scss'
import image from '../assets/about-section.jpg'
import Heading from './heading'
import Btn from './btn'

export const AboutSection = () => {
    return (
        <div className={styles.aboutSection}>
            <div className={styles.imageWrapper}>
                <div className={styles.mobileBg}></div>
                <img className={styles.imageBordered} src={image} alt="tai pan charter"/>
            </div>
            <div className={styles.textWrapper}>
                <Heading text="About us" type="subtitle"/>
                <Heading text="Tai Pan Charter"/>
                <p className={styles.paragraph}>Even ourselves, who know it well and who have been caring about it for more than thirty years, we do not know its whole story. We know only that the project had been born in Taiwan where the hull had been built. It sailed then over the ocean towards the South-American seas where all wooden parts were added. It still remains a mystery how it arrived in Europe... I remember that during travels in childhood my grandfather was telling me how he had bought the yacht – fantastic stories about pirates which in my eyes and in darkness of a lonely creek could have become reality... Thus, from bay to bay, from harbour to harbour, our travel with Tai Pan continued over the Mediterranean. I have travelled a lot with this yacht and from the beginning it seemed to me slow, clumsy and annoying... As time passed, I have learned though to appreciate and admire it, and to understand that sailing on a powerboat is not necessarily fast.</p>
                <Btn link="/about" title="Discover more" center  />
            </div>
        </div>
    )
}

export default AboutSection
