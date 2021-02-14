import React from 'react';

import classes from "./backgroundImg.module.css"
import bgImgSource from "../../assets/images/backgroundImg.jpg"

const backgroundImg = (props) =>{
    return (
        <div className = {classes.outer}>
            <img src = {bgImgSource}/>
        </div>
    )
}

export default backgroundImg;