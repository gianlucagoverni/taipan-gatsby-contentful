import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import headerStyles from './header.module.scss'
import Img from 'gatsby-image'

const Logo = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "assets/taipan-white-logo.png" }) {
                childImageSharp {
                  fluid {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
        }
    `)
    return (
        <Link className={headerStyles.logo} to="/">
            <Img className={headerStyles.logoImg} fluid={data.file.childImageSharp.fluid} alt="Tai Pan Logo" />
        </Link>
    )
}

export default Logo
