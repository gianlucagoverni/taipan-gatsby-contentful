import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About Us</h1>
            <p>Nemmeno noi, che la consociamo e la curiamo da trent'anni, siamo a conoscenza della sua vera storia. Sappiamo solo che il progetto nasce a Taiwan dove viene realizzato lo scafo, questo attraversa l'oceano e arriva nelle acque sudamericane per essere completato e rifinito in tutti i suoi particolari in legno. Come arriva in Europa, rimane un mistero... Ricordo che durante i nostri viaggi, da bambino mio nonno mi raccontava storie di come aveva avuto la barca – storie fantastiche di pirati che nel buio di una cala sperduta ai miei occhi diventavano realtà...</p>

            <p>
                Need a boat? <Link to="/contact">contact me!</Link>
            </p>
        </Layout>
    )
}

export default AboutPage