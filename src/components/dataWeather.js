import React, { Component } from 'react'
import {round} from 'lodash'

import dataWeatherStyles from './dataWeather.module.scss'
import seaIcon from '../assets/seaIcon.svg'
import windIcon from '../assets/windIcon.svg'
import sunIcon from '../assets/sunIcon.svg'

export default class DataWeather extends Component {
    constructor(props){
        super(props);
        this.state = {
          temp: '',
          wind: '',
          beaufortScale: '',
        }
    }

    fetchData = () => {
        let obj;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=42.8115&lon=10.3146&units=metric&APPID=56cac97d299a0850168ec70675151e14`)
            .then(res => res.json())
            .then(data => obj = data)
            .then(() => this.setState({
                temp: round(obj.main.temp),
                wind: round(obj.wind.speed * 1.9438445),
                beaufortScale: round(Math.cbrt((obj.wind.speed * obj.wind.speed)))
            }))
            //.then(() => console.log(obj))
            .catch(error => console.log("Si è verificato un errore!"));
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div className={dataWeatherStyles.wrapper}>
                <div className={dataWeatherStyles.data}>
                    <span className={dataWeatherStyles.iconData}><img src={seaIcon} alt="sea icon"/></span>
                    {this.state.beaufortScale}
                </div>
                <div className={dataWeatherStyles.data}>
                    <span className={dataWeatherStyles.iconData}><img src={windIcon} alt="sea icon"/></span>
                {this.state.wind}<sup>kn</sup>
                </div>
                <div className={dataWeatherStyles.data}>
                    <span className={dataWeatherStyles.iconData}><img src={sunIcon} alt="sea icon"/></span>
                    {this.state.temp}&#176;
                </div>
            </div>
        )
    }
}
