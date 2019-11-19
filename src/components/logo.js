import React, { Component } from "react"
import {Link} from 'gatsby'

import headerStyles from './header.module.scss'


export class Logo extends Component {
    shouldComponentUpdate(nextProps) {
        return (
            nextProps.ids !== this.props.ids || nextProps.data !== this.props.data
        );
    }

    render() {
        return (
            <Link className={headerStyles.logo} to="/">
                <img src={this.props.src} alt="Tai Pan Charter Logo" />
            </Link>
        )
    }
}

export default Logo
