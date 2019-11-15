import React, { Component } from 'react'
import PropTypes from 'prop-types'

import moreInfoStyles from './moreInfo.module.scss'
import Btn from '../components/btn'
import image from '../assets/needInfo.webp'

export default class moreInfo extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className={moreInfoStyles.moreInfoContainer} style={ { backgroundImage: "url("+image+")" } }>
                <h3 className={moreInfoStyles.moreInfoTagline}>Need more information?</h3>
                <p className={moreInfoStyles.moreInfoSubtitle}>we would gladly answer all your questions</p>
                <Btn type='primary' link='/contact' title='Contact us'></Btn>
            </div>
        )
    }
}
