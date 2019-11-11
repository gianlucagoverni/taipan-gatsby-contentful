import React from 'react';

import Btn from './btn';


const HeroImage = ({ src, title }) => {
    return (
        <div>
            <img src={`${src}`} alt={`${title}`} />
            <div>
                <p>Let's feel</p>
                <h1>Cruise Experience</h1>
                <Btn type="Primary" link="/about" title="Find out more"/>
            </div>
        </div> 
    )
}

export default HeroImage;
