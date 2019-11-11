import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import btnStyles from './btn.module.scss'

function Btn(props) {
    return (
        <button className={btnStyles.btn`{props.type}`}>
            <Link to={props.link}>{props.title}</Link>
        </button>
    )
}

Btn.propTypes = {
    type: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Btn

