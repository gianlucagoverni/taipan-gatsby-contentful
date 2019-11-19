import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import footerStyles from './footer.module.scss'
import ContactIcon from './contactIcon'
import Logo from './logo'

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
                <Logo />
                <div><a href="https://goo.gl/maps/PGbBdZnkdHNrg6kB6" className={footerStyles.coordinate} target="_blank" rel="noopener noreferrer">+42° 4’ 35.1’’, +10° 18’ 55.53’</a></div>
            </div>
        </footer>
    )
}

export default Footer