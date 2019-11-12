import React, { Component } from 'react'
import {Link} from 'gatsby'
import {floor} from 'lodash' 

import headerStyles from './header.module.scss'
import Logo from './logo'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'
import airbnbIcon from '../assets/airbnb.svg'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
          temp: '18',
          wind: '03'
        }
    }

    getTemp() {
        let obj;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=42.8115&lon=10.3146&units=metric&APPID=56cac97d299a0850168ec70675151e14`)
            .then(res => res.json())
            .then(data => obj = data)
            // .then(function(obj) {
            //      let temperature = ()
            //      console.log(temperature);
            //     })
            .then(() => this.setState({
                temp: floor(obj.main.temp),
                wind: obj.wind.speed
            }))
            .then(() => console.log(obj))
            .catch(error => console.log("Si è verificato un errore!"));
    }
    componentDidMount() {
        this.getTemp();
    }
    render() {
        return (
            <header className={headerStyles.navigation}>
                <Logo />
                <div className={headerStyles.navgiationBarWrapper}>
                    <nav className={headerStyles.topbarHeader}>
                        <div className={headerStyles.dataWeather}>{this.state.wind}<sup>kn</sup></div>
                        <div className={headerStyles.dataWeather}>{this.state.temp}&#176;</div>
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
}
