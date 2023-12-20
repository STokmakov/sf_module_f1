import React from "react";

const Weather = props => (
    <div className="infoWeath">
    { props.city  &&
        <div>
            <p></p>
            <p></p>
            <p>Город: {props.city}, {props.country} </p>
            <p>Температура: {props.temp}</p>
            <p>Давление: {props.pressure}</p>   
        </div>
        }
    <p className="error">{props.error}</p>
    </div>
    )

export default Weather;