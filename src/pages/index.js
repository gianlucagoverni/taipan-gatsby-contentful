import React from "react"
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import HeroSlider from '../components/heroSlider'
import About from '../components/aboutSection'
import MoreInfo from '../components/moreInfo'
import indexStyles from './index.module.scss'
// import HeroImage from '../components/heroImage'
// import hero from '../assets/hero-image.jpg'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <div className={indexStyles.heroSliderWrapper}>
                <HeroSlider />
            </div>
            <About />
           <MoreInfo />
        </Layout>
    )
}

export default IndexPage
