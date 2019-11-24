import React from "react"
// import { Link } from 'gatsby'

import indexStyles from './index.module.scss'
import Head from '../components/head'
import Layout from '../components/layout'
import HeroSlider from '../components/heroSlider'
import AboutSection from '../components/aboutSection'
import Divider from '../components/divider'
import ServicesSection from '../components/servicesSection'
import MoreInfo from '../components/moreInfo'
// import HeroImage from '../components/heroImage'
// import hero from '../assets/hero-image.jpg'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <div className={indexStyles.heroSliderWrapper}>
                <HeroSlider />
            </div>
            <AboutSection />
            <Divider />
            <ServicesSection />
           <MoreInfo />
        </Layout>
    )
}

export default IndexPage
