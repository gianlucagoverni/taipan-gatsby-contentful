import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import footerStyles from './footer.module.scss'
import Logo from './logo'
import ContactIcon from './contactIcon'
import logo from '../assets/taipan-white-logo.png'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer className={footerStyles.footerContainer}>
            {/* <p>Createdy by {data.site.siteMetadata.author}, 2019</p> */}
            <div className={footerStyles.logoWrapper}>
                <ContactIcon />
                <Logo src={logo}/>
                <div><a href="https://goo.gl/maps/PGbBdZnkdHNrg6kB6" className={footerStyles.coordinate} target="_blank" rel="noopener noreferrer">+42° 4’ 35.1’’, +10° 18’ 55.53’</a></div>
            </div>
        </footer>
    )
}

export default Footer