import React from 'react'
import PropTypes from 'prop-types'

import styles from './heading.module.scss'

function Heading(props) {
    if (props.type === 'title') {
        return (
            <h2 className={styles.title}>
                {props.text}
            </h2>
        )
    } else {
            return (
                <h4 className={styles.subtitle}>
                    {props.text}
                </h4>
            ) 
        }
}

Heading.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf([ 'title', 'subtitle'])
}

Heading.defaultProps = {
    type: 'title'
}

export default Heading

