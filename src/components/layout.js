import React from 'react'
import Div100vh from 'react-div-100vh'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
import "typeface-roboto-slab";
import "typeface-raleway";

const Layout = (props) => {
    return (
        <Div100vh>
            <div className={layoutStyles.container}>
                <div className={layoutStyles.content}>
                    <Header/>
                    {props.children}
                </div>
                <Footer/>
            </div>
        </Div100vh>
    )
}

export default Layout