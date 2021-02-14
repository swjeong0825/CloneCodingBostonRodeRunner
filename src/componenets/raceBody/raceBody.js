import React from "react";
import classnames from "classnames";

import classes from "./raceBody.module.css";

//images
import turkey from "../../assets/images/turkey.webp"
import spring from "../../assets/images/springRace.png"
import fall from "../../assets/images/fallRace.jpg"


//images

const racebody = (props) => {
    return (    
        <div className = {classes.wrapper}>
            <h1 className = {classes.head}>2 0 2 1 &nbsp; R A C E S</h1>
            <div style = {{display: "flex"}} className = {classes.body}>
                <div>
                    <h1>SPRING RACE</h1>
                    <img src = {spring}></img>
                </div>
                <div>
                    <h1>FALL RACE</h1>
                    <img src = {fall}></img>
                </div>
                <div>
                    <h1>TURKEY TROT</h1>
                    <img src = {turkey}></img>
                </div>
            </div>

        </div>
    )
}

export default racebody;