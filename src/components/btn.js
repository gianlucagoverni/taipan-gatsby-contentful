import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import btnStyles from './btn.module.scss'

function Btn(props) {
    return (
        <button className={ `${btnStyles.btn} ${props.type === 'primary' ? btnStyles.primary : btnStyles.secondary}`}>
            <Link to={props.link}>{props.title}</Link>
        </button>
    )
}

Btn.propTypes = {
    type: PropTypes.oneOf([ 'primary', 'secondary']),
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}
Btn.defaultProps = {
    type: 'primary'
}

export default Btn

