import react from "react";
import {Route} from "react-router-dom";

import classes from "./firstHeader.module.css"


const firstHeader = (props) =>{
    return (
        <header className = {classes.header}>
            <div className = {classes.outerBody}>
                <div>logo</div>
                <ul>
                    <li><a href = "/about">about</a></li>
                    <li>races</li>
                    <li>run club</li>
                    <li>community</li>
                    <li>youth initiative</li>
                    <li>volunteer</li>
                </ul>
                <button className = {classes.donateButton}>Donate</button>
            </div>
        </header>
    )
}

export default firstHeader;