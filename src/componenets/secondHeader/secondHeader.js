import React from "react"

import classes from "./secondHeader.module.css"

const secondHeader = (props) => {
    return (
        <div className = {classes.wrapper}>
            <div className = {classes.outerBody}>
                PANDEMIC RUNNING SURVEY
            </div>
            <button className = {classes.surveyButton}>
                Take The Survey!
            </button>
        </div>
    )
}

export default secondHeader;