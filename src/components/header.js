import React, { Component } from 'react'
import {Link} from 'gatsby'
import {round} from 'lodash'

import headerStyles from './header.module.scss'
import Logo from './logo'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'
import airbnbIcon from '../assets/airbnb.svg'
import seaIcon from '../assets/seaIcon.svg'
import windIcon from '../assets/windIcon.svg'
import sunIcon from '../assets/sunIcon.svg'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
          temp: '',
          wind: '',
          beaufortScale: '',
          active: false
        }
    }

    toggleClass(e) {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        e.stopPropagation();
    };

    fetchData = () => {
        let obj;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=42.8115&lon=10.3146&units=metric&APPID=56cac97d299a0850168ec70675151e14`)
            .then(res => res.json())
            .then(data => obj = data)
            .then(() => this.setState({
                temp: round(obj.main.temp),
                wind: round(obj.wind.speed * 1.9438445),
                beaufortScale: round(Math.cbrt((obj.wind.speed * obj.wind.speed)))
            }))
            .then(() => console.log(obj))
            .catch(error => console.log("Si è verificato un errore!"));
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <header className={headerStyles.navigation}>
                <Logo />
                <div className={headerStyles.navgiationBarWrapper}>
                    <nav className={headerStyles.topbarHeader}>
                        <div className={headerStyles.dataWeatherWrapper}>
                            <div className={headerStyles.dataWeather}>
                                <span className={headerStyles.iconData}><img src={seaIcon} alt="sea icon"/></span>
                                {this.state.beaufortScale}
                            </div>
                            <div className={headerStyles.dataWeather}>
                                <span className={headerStyles.iconData}><img src={windIcon} alt="sea icon"/></span>
                            {this.state.wind}<sup>kn</sup>
                            </div>
                            <div className={headerStyles.dataWeather}>
                                <span className={headerStyles.iconData}><img src={sunIcon} alt="sea icon"/></span>
                                {this.state.temp}&#176;
                            </div>
                        </div>
                        <a className={headerStyles.socialIconWrapper} href="https://www.airbnb.it/rooms/2482317" target="_blank" rel="noopener noreferrer">
                            <img className={headerStyles.socialIcon} src={airbnbIcon} alt="airbnb"/>
                        </a>
                        <a className={headerStyles.socialIconWrapper} href="https://www.facebook.com/TaiPanCharter/" target="_blank" rel="noopener noreferrer">
                            <img className={headerStyles.socialIcon} src={facebookIcon} alt="facebook"/>
                        </a>
                        <a className={headerStyles.socialIconWrapper} href="https://www.instagram.com/tai_pan_sailor/" target="_blank" rel="noopener noreferrer">
                            <img className={headerStyles.socialIcon} src={instagramIcon} alt="instagram"/>
                        </a>
                    </nav>
                    <button 
                        className={ `${headerStyles.menu} ${this.state.active ? headerStyles.menuActive : headerStyles.menuInactive}`} 
                        onClick={this.toggleClass}
                    >
                        <span className={headerStyles.hamburgerLine}></span>
                        <span className={headerStyles.hamburgerLine}></span>
                        <span className={headerStyles.hamburgerLine}></span>
                    </button>
                    <nav className={headerStyles.mainNavContainer}>
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
