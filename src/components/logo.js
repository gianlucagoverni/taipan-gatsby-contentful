import React, { Component } from "react"
import {Link} from 'gatsby'

import headerStyles from './header.module.scss'
import logo from '../assets/taipan-white-logo.png'

export class Logo extends Component {
    shouldComponentUpdate(nextProps) {
        return (
            nextProps.ids !== this.props.ids || nextProps.data !== this.props.data
        );
    }

    render() {
        return (
            <Link className={headerStyles.logo} to="/">
                <img src={logo} alt="Tai Pan Charter Logo" />
            </Link>
        )
    }
}

export default Logo
