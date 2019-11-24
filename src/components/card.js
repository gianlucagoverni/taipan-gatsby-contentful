import React from 'react'
import PropTypes from 'prop-types'

import styles from './card.module.scss'

function Card(props) {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={props.imgSrc} alt={props.imgAlt}/>
            <h6 className={styles.title}>{props.title}</h6>
            <p className={styles.text}>{props.text}</p>
        </div>
    )
}

Card.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Card

