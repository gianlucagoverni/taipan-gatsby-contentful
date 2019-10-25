import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact me</h1>
            <p>You can contact me directly at <a href="mailto:taipan@gmail.com">taipan@gmail.com</a></p>

            <p>
                Interested for my boat? <Link to="/about">Find out more!</Link>
            </p>
        </Layout>
    )
}

export default ContactPage