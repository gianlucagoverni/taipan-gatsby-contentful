import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello.</h1>
            <h2>This is the website of the the Tai Pan boat.</h2>

            <p>
                Need a boat? <Link to="/contact">contact me!</Link>
            </p>
        </Layout>
    )
}

export default IndexPage
