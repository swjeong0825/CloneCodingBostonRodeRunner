import React from "react";

import classes from "./footer.module.css"

import facebookLogo from "../../assets/logos/facebookLogo.webp"
import instagramLogo from "../../assets/logos/instagramLogo.webp"
import twitterLogo from "../../assets/logos/twitterLogo.webp"


const footer = (props) => {
    return (
        <div className = {classes.wrapper}>
            <span className = {classes.body}>We Need Your Support Today!</span>
            <button>Donate</button>
            <ul>
                <li>
                    <img alt = "" src = {facebookLogo}/>
                </li>
                <li>
                    <img alt = "" src = {instagramLogo}/>
                </li>
                <li>
                    <img alt = "" src = {twitterLogo}/>
                </li>
            </ul>
        </div>
    )
}

export default footer;