import React from "react";

import classes from "./transparentBody.module.css"
//500
const transparentBody = (props) => {
    const head = "We run stronger and faster\nas a community."

    return (
        <div className = {classes.wrapper}>
            <h1 className = {classes.head}>
                {head}
            </h1>
        </div>
    )
};

export default transparentBody;