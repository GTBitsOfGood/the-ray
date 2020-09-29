import React from 'react';
import './static/css/Stats.css'
import './static/css/main.css'
import Crash from './static/images/car-crash-crop.jpg'
import FlatTire from './static/images/flat-tire-crop.jpg'
import GasStation from './static/images/gas-station-crop.jpg'
import carAccidentIcon from './static/images/car-accident-icon.svg'
import carAccidentIconBlack from './static/images/car-accident-icon-black.svg'
import gasIcon from './static/images/gas-icon.svg'
import gasIconBlack from './static/images/gas-icon-black.svg'

function Statistics(props) {

    let image = GasStation

    if (props.selection === "Crash") {
        image = Crash
    } else if (props.image === "FlatTire") {
        image = FlatTire
    }

    return (
        <div className="body">
            <div className="image-container">
                <img className="image" src={image}></img>
                <div className="main-text">
                    {props.number}
                </div>
            </div>
            <div className="lower-elements">
                <p className="secondary-text">
                    {props.text}
                </p>
                <hr />
                <div className="icons">
                    <div className="icon">
                        {(props.selection == 0) &&
                            <div className="border-container" >
                                <img src={gasIconBlack} style={{width: "4vw", height: "8vw"}} />
                            </div>
                        }
                        {(props.selection != 0) &&
                            <div className="no-border-container" >
                                <img src={gasIcon} style={{width: "4vw", height: "8vw"}} />
                            </div>
                        }
                        <p>
                            gas
                        </p>
                    </div>
                    <div className="icon">
                        <div>
                            {(props.selection != 0) &&
                                <div className="border-container">
                                    <img src={carAccidentIconBlack} style={{width: "7vw", height: "8vw"}} />
                                </div>
                            }
                            {(props.selection == 0) &&
                                <div className="no-border-container">
                                    <img src={carAccidentIcon} style={{width: "7vw", height: "8vw"}} />
                                </div>
                            }
                        </div>
                        <p>
                            car accidents
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics