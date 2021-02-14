import React from "react"
import {Route, Switch} from "react-router-dom";

import "./layout.css"
import BackgroundImg from "../../componenets/backgroundImg/backgroundImg"
import FirstHeader from "../../componenets/firstHeader/firstHeader"
import SecondHeader from "../../componenets/secondHeader/secondHeader"
import TransparentBody from "../../componenets/transparentBody/transparentBody"
import ContentsBody from "../../componenets/contentsBody/contentsBody"
import Racebody from "../../componenets/raceBody/raceBody"
import AboutUs from "../../componenets/aboutUsBody/aboutUs";
import VideoBody from "../../componenets/videoBody/videoBody";
import Footer from "../../componenets/footer/footer";



const layout = (props) => {
    let mainPage = (
        <div>
            <BackgroundImg />
            <FirstHeader/>
            <SecondHeader/>
            <TransparentBody />
            <ContentsBody />
            <Racebody />
            <AboutUs />
            <VideoBody />
            <Footer />
            <div>
            </div>
        </div>
    )

    let aboutPage = (
        <h1>About</h1>
    )
    // <Route path = "/about" exact render = {() => aboutPage} />


    return (
        <Switch>
            <Route path = "/" exact render = {() => mainPage} />
        </Switch>
    )
}

export default layout;