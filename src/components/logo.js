import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import headerStyles from './header.module.scss'
import logo from '../assets/taipan-white-logo.png'

const Logo = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <Link className={headerStyles.logo} to="/">
            <img src={logo} alt={data.site.siteMetadata.title} />
        </Link>
    )
}

export default Logo