import React, { Component } from 'react'
import {Link} from 'gatsby'

import headerStyles from './header.module.scss'
import Logo from './logo'
import DataWeather from './dataWeather'
import ContactIcon from './contactIcon'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
          active: false
        }
    }

    toggleClass(e) {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        e.stopPropagation();
    };

    calcHeight() {
        let vh = window.innerHeight;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    componentDidMount() {

        this.calcHeight();

        window.addEventListener('resize', () => {
            this.calcHeight()
        });
    }

    render() {
        return (
            <header className={headerStyles.navigation}>
                <Logo />
                <div className={headerStyles.navgiationBarWrapper}>
                    <nav className={headerStyles.topbarHeader}>
                        <DataWeather />
                        <ContactIcon />
                    </nav>
                    <button 
                        className={ `${headerStyles.menu} ${this.state.active ? headerStyles.menuActive : headerStyles.menuInactive}`} 
                        onClick={this.toggleClass}
                    >
                        <span className={headerStyles.hamburgerLine}></span>
                        <span className={headerStyles.hamburgerLine}></span>
                        <span className={headerStyles.hamburgerLine}></span>
                        <span className={headerStyles.hamburgerLine}></span>
                    </button>
                    <nav className={`${headerStyles.mainNavContainer} ${this.state.active ? headerStyles.show : headerStyles.hide}`}>
                        <ul className={headerStyles.navList}>
                            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/">Home</Link></li>
                            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/about">About us</Link></li>
                            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/services">Services</Link></li>
                            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/boat">Boat</Link></li>
                            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/itineraries">Itineraries</Link></li>
                            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/contact">Contact us</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
