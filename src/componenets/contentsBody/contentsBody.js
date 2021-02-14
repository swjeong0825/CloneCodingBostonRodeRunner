import React from "react";
import classnames from "classnames";

import classes from "./contentsBody.module.css";

//150
const contentsBody = (props) =>{

    return (
        <div className = {classes.wrapper}>
            <div className = {classnames(classes.contents, classes.mission)}>
                <span className = {classes.head}>Our mission</span>
                <span className = {classes.underline}>Our Goal, Vision & Commitment </span>

            </div>  
            <div className = {classnames(classes.contents, classes.events)}>
                <span className = {classes.head} >Our Events</span>
                <span className = {classes.underline}>Register & Help Make Change</span>
            </div>
            <div className = {classnames(classes.contents, classes.involved)}>
                <span className = {classes.head}>Get Involved</span>
                <span className = {classes.underline}>Volunteer, Participate, or Donate</span>
            </div>
            
        </div>
    )
}

export default contentsBody;