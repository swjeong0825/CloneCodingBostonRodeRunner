import React from "react";
import classes from "./aboutUs.module.css";

import runners from "../../assets/images/runners.webp";

const aboutUs = (props) => {
    return (
        <div className = {classes.wrapper}>
            <div>
                <img src = {runners}></img>
            </div>
            <div className = {classes.body}>
                <article>
                    <h1>ABOUTUS</h1>
                    <p>Boston Road Runners (BRR) is a community of runners coming together to motivate each other to run. </p>
                    <button>LEARN MORE</button>
                </article>
            </div>

        </div>
    )
}

export default aboutUs;