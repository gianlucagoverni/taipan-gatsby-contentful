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

    shouldComponentUpdate() {
        if (localStorage.getItem('temp')) {
            return true
        } else {
            return false
        }
    }

    fetchData = () => {
        
        const cachedTemp = localStorage.getItem('temp');
        const cachedWind = localStorage.getItem('wind');
        const cachedBeaufort = localStorage.getItem('beaufort');
        
        if (cachedTemp) {
            this.setState({
                temp: JSON.parse(cachedTemp),
                wind: JSON.parse(cachedWind),
                beaufortScale: JSON.parse(cachedBeaufort)
            });
        } else {
            let result;
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=42.8115&lon=10.3146&units=metric&APPID=56cac97d299a0850168ec70675151e14`)
                .then(response => response.json())
                .then(data => result = data)
                .then(result => this.onSetResult(result))
        }
    };

    onSetResult = (result) => {
        localStorage.setItem('temp', JSON.stringify(round(result.main.temp)));
        localStorage.setItem('wind', JSON.stringify(round(result.wind.speed * 1.9438445)));
        localStorage.setItem('beaufort', JSON.stringify(round(Math.cbrt((result.wind.speed * result.wind.speed)))));
        this.setState({
            temp: round(result.main.temp),
            wind: round(result.wind.speed * 1.9438445),
            beaufortScale: round(Math.cbrt((result.wind.speed * result.wind.speed)))
        });
    };


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
