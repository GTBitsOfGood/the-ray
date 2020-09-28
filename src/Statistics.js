import React from 'react';
import './static/css/Stats.css'
import './static/css/main.css'
import Crash from './static/images/car-crash-crop.jpg'
import FlatTire from './static/images/flat-tire-crop.jpg'
import GasStation from './static/images/gas-station-crop.jpg'
// import CarAccidentIcon from './static/images/car-accident-icon.svg'
// import { ReactComponent as CarAccidentIcon } from './static/images/car-accident-icon.svg'
import carAccidentIcon from './static/images/car-accident-icon.svg'


function Statistics(props) {
    // if (!selection) {
    //     selection=Crash
    // }
    
    // if (!text) {
    //     text="car accidents due to underinflated tires every year"
    // }

    let image = GasStation
    let number = "2,000,000,000"

    if (props.image === "Crash") {
        image = Crash
    } else if (props.image === "FlatTire") {
        image = FlatTire
    }

    if (props.number) {
        number = props.number
    }

    return (
        <div className="body">
            <div className="image-container">
                <img className="image" src={image}></img>
                <div className="main-text">
                    {number}
                </div>
            </div>
            <div className="lower-elements">
                <p className="secondary-text">
                    {props.text}
                </p>
                <hr />
                <div className="icons">
                    <img src={carAccidentIcon} />
                    {/* <CarAccidentIcon color="white"/> */}
                    <img src={carAccidentIcon} />
                    {/* <CarAccidentIcon /> */}
                    {/* <div className="ellipse-full" /> */}
                    {/* <svg width="78" height="44" viewBox="0 0 78 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22.2778" cy="38.4999" r="5" fill="#092342"/>
                        <circle r="5" transform="matrix(-1 0 0 1 55.6777 38.4999)" fill="#092342"/>
                        <path d="M29.9471 22.8251L26.4778 16.816L34.773 18.9391L38.9404 11.1917L42.5373 19.3264L51.8783 17.5467L47.4339 23.726" stroke="#092342" stroke-width="3" stroke-linecap="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.22438 16.0203C1.78945 15.9478 1.34466 16.0704 1.00822 16.3554C0.671784 16.6404 0.477783 17.059 0.477783 17.4999V37.4999C0.477783 38.3283 1.14936 38.9999 1.97778 38.9999H16.0542C16.0039 38.6739 15.9778 38.34 15.9778 37.9999C15.9778 37.3021 16.0877 36.63 16.2913 35.9999H3.47778V19.2706L13.1488 20.8824L17.7888 26.9145C17.9994 27.1882 18.298 27.3809 18.6342 27.46L34.4778 31.1879V35.9999H28.6643C28.8678 36.63 28.9778 37.3021 28.9778 37.9999C28.9778 38.34 28.9517 38.6739 28.9013 38.9999H35.9778C36.8062 38.9999 37.4778 38.3283 37.4778 37.4999V29.9999C37.4778 29.3038 36.9989 28.6992 36.3213 28.5398L19.8411 24.6621L15.1667 18.5853C14.9354 18.2846 14.5987 18.0827 14.2244 18.0203L2.22438 16.0203Z" fill="#092342"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M75.7312 16.0203C76.1661 15.9478 76.6109 16.0704 76.9473 16.3554C77.2838 16.6404 77.4778 17.059 77.4778 17.4999V37.4999C77.4778 38.3283 76.8062 38.9999 75.9778 38.9999H61.9013C61.9517 38.6739 61.9778 38.34 61.9778 37.9999C61.9778 37.3021 61.8678 36.63 61.6643 35.9999H74.4778V19.2706L64.8067 20.8824L60.1667 26.9145C59.9561 27.1882 59.6575 27.3809 59.3213 27.46L43.4778 31.1879V35.9999H49.2913C49.0877 36.63 48.9778 37.3021 48.9778 37.9999C48.9778 38.34 49.0039 38.6739 49.0542 38.9999H41.9778C41.1494 38.9999 40.4778 38.3283 40.4778 37.4999V29.9999C40.4778 29.3038 40.9566 28.6992 41.6342 28.5398L58.1144 24.6621L62.7888 18.5853C63.0202 18.2846 63.3569 18.0827 63.7312 18.0203L75.7312 16.0203Z" fill="#092342"/>
                    </svg> */}

                </div>
            </div>
        </div>
    )
}

export default Statistics