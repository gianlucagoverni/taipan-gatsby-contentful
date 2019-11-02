import React from 'react'
import {Link} from 'gatsby'

import headerStyles from './header.module.scss'
import Logo from './logo'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'

const Header = () => {
    return (
        <header className={headerStyles.navigation}>
            <Logo />
            <nav className={headerStyles.navContainer}>
                <ul className={headerStyles.navList}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/">Home</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/about">About</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/blog">Blog</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className={headerStyles.flexContainer}>
                <Link to="https://www.facebook.com" target="_blank">
                    <img className={headerStyles.socialIcon} src={facebookIcon} alt="facebook"/>
                </Link>
                <Link to="https://www.instagram.com" target="_blank">
                    <img className={headerStyles.socialIcon} src={instagramIcon} alt="instagram"/>
                </Link>
            </div>
        </header>
    )
}

export default Header