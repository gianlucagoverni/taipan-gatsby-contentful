import React from 'react'
import {Link} from 'gatsby'

import headerStyles from './header.module.scss'
import Logo from './logo'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'
import airbnbIcon from '../assets/airbnb.svg'

const Header = () => {
    return (
        <header className={headerStyles.navigation}>
            <Logo />
            <div className={headerStyles.navgiationBarWrapper}>
                <nav className={headerStyles.topbarHeader}>
                    <Link className={headerStyles.socialIconWrapper} to="https://www.airbnb.it/rooms/2482317?source_impression_id=p3_1573494839_o7MX%2FbptRw0GcfFb" target="_blank">
                        <img className={headerStyles.socialIcon} src={airbnbIcon} alt="airbnb"/>
                    </Link>
                    <Link className={headerStyles.socialIconWrapper} to="https://www.facebook.com/TaiPanCharter/" target="_blank">
                        <img className={headerStyles.socialIcon} src={facebookIcon} alt="facebook"/>
                    </Link>
                    <Link className={headerStyles.socialIconWrapper} to="https://www.instagram.com/tai_pan_sailor/" target="_blank">
                        <img className={headerStyles.socialIcon} src={instagramIcon} alt="instagram"/>
                    </Link>
                </nav>
                <nav className={headerStyles.mainNavContainer}>
                    <ul className={headerStyles.navList}>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/">Home</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/about">About us</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/boat">Boat</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/services">Services</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/blog">Harbours</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/contact">Contact us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header