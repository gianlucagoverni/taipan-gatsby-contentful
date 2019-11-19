import React, { Component } from 'react'

import contactIconStyles from './contactIcon.module.scss'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'
import airbnbIcon from '../assets/airbnb.svg'

export default class contactIcon extends Component {
    render() {
        return (
            <div className={contactIconStyles.wrapper}>
                <a className={contactIconStyles.socialIconWrapper} href="https://www.airbnb.it/rooms/2482317" target="_blank" rel="noopener noreferrer">
                    <img className={contactIconStyles.socialIcon} src={airbnbIcon} alt="airbnb"/>
                </a>
                <a className={contactIconStyles.socialIconWrapper} href="https://www.facebook.com/TaiPanCharter/" target="_blank" rel="noopener noreferrer">
                    <img className={contactIconStyles.socialIcon} src={facebookIcon} alt="facebook"/>
                </a>
                <a className={contactIconStyles.socialIconWrapper} href="https://www.instagram.com/tai_pan_sailor/" target="_blank" rel="noopener noreferrer">
                    <img className={contactIconStyles.socialIcon} src={instagramIcon} alt="instagram"/>
                </a>
            </div>
        )
    }
}
