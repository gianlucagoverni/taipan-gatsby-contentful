import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import footerStyles from './footer.module.scss'
import Logo from './logo'
import ContactIcon from './contactIcon'

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
            <div className={footerStyles.rowsWrapper}>
                <ContactIcon />
                <Logo />
                <div><a href="https://goo.gl/maps/PGbBdZnkdHNrg6kB6" className={footerStyles.coordinate} target="_blank" rel="noopener noreferrer">+42° 4’ 35.1’’, +10° 18’ 55.53’</a></div>
            </div>
            <div className={footerStyles.rowsWrapper}>
                <div>
                    <ul className={footerStyles.listContainer}>
                        <li className={footerStyles.listItem}>Via G. Cacciò 23-25</li>
                        <li  className={footerStyles.listItem}>57037 Portoferraio (LI) - Isola d'Elba</li>
                        <li  className={footerStyles.listItem}>(+39) 339 18 87 577</li>
                        <li  className={footerStyles.listItem}>info@taipancharter.eu</li>
                    </ul>
                </div>
                <div>
                    <ul className={footerStyles.listContainer}>
                        <li  className={footerStyles.listItem}>
                            <Link className={footerStyles.footerItem} activeClassName={footerStyles.activeItem} to="/#">FAQ</Link>
                        </li>
                        <li  className={footerStyles.listItem}>57037 Portoferraio (LI) - Isola d'Elba</li>
                        <li  className={footerStyles.listItem}>V(+39) 339 188 7577</li>
                        <li  className={footerStyles.listItem}>info@taipancharter.eu</li>
                    </ul>
                </div>
                <div>
                    <ul className={footerStyles.listContainer}>
                        <li  className={footerStyles.listItem}>Via G. Cacciò 23-25</li>
                        <li  className={footerStyles.listItem}>57037 Portoferraio (LI) - Isola d'Elba</li>
                        <li  className={footerStyles.listItem}><Link className={footerStyles.footerItem} activeClassName={footerStyles.activeItem} to="/#">PRIVACY POLICY</Link></li>
                        <li  className={footerStyles.listItem}><a href="https://gianlucagoverni.com" target="_blank" rel="noopener noreferrer">CREDITS</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer