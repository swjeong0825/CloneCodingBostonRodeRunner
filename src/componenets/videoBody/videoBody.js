import react from "react"

import classes from "./videoBody.module.css"
import video from "../../assets/videos/videoMainPage.mp4"

const videoBody = (props) => {
    return (
        <div className = {classes.wrapper}>
            <video height = "500" width = "100%" controls muted loop>
                <source src = {video} type = "video/mp4"/>
            </video>

            <div className = {classes.body}>
                <span style = {{display: "block"}}>RUNNING {"\n"}COMUNITY</span>
                <button>Volunteer</button>
            </div>
        </div>

    )
}

export default videoBody;