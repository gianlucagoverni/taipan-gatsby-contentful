import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import HeroSlider from '../components/heroSlider'
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
            <h1>Hello.</h1>
            <h2>This is the website of the the Tai Pan boat.</h2>
            
            <p>
                Need a boat or a skipper? <Link to="/contact">contact me!</Link>
            </p>
        </Layout>
    )
}

export default IndexPage
