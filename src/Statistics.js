import React from 'react';
import './static/css/Stats.css'
// import './static/css/main.css'
import Crash from './static/images/car-crash-crop.jpg'
import FlatTire from './static/images/flat-tire-crop.jpg'
import GasStation from './static/images/gas-station.jpg'

function Statistics(props) {
    // if (!selection) {
    //     selection=Crash
    // }
    
    // if (!text) {
    //     text="car accidents due to underinflated tires every year"
    // }

    let selection = Crash

    if (props.selection) {
        selection = FlatTire
    }

    return (
        <div className="body">
            <img src={selection}></img>
            <div className="lower-elements">
                <p className="secondary-text">
                    {props.text}
                </p>
                <div>
                    Hello
                </div>
                <hr />
                <div>
                    World
                </div>
                {/* <div className="icons">
                    <div className="ellipse-full" />
                    <div className="ellipse-full" />
                </div> */}
            </div>
        </div>
    )
}

export default Statistics