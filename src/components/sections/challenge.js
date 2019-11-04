import React from "react"

import classes from './challenge.module.css'

import blob from '../../../content/bgillus/blobDGr.svg'
import tinker from '../../../content/logos/tinkerLogo.png'
import fusion from '../../../content/logos/fusionLogo.png'

const Challenge = () => {
    return(
        <div className={classes.chalWrap} id="challenge-section">
            <img src={blob} alt="blob" className={classes.blob} />
            <div className={classes.chalTx}>
                <p className={classes.chalTxHead}>The Challenge</p>
                <p className={classes.chalTxCont}>Craft designs that can shape the future. 
                Build prototypes that can flourish into full-scale products. 
                The challenge is narrowed down for students of two categories.</p>
            </div>
            <div className={classes.chalSplit}>
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>Schools</p>
                    <p className={classes.chalSplitCont}>Design a portable low-cost plastic management device for residential purpose.</p>
                    <p className={classes.chalSplitCont2}>Software to be used: AUTODESK TINKERCAD</p>
                    <a href="https://www.tinkercad.com/" rel="noopener noreferrer" target="_blank" className={classes.chalSplitImg1}>
                        <img src={tinker} alt="tinkercad logo" />
                    </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8_baH2v2vWAHmwP6iEa40R9T-J1tDf4GF7bASfJcDstqtZg/viewform?usp=sf_link" rel="noopener noreferrer" target="_blank" className={classes.rgBtn}>
                        Register
                    </a>
                </div>

                <div className={classes.chalSplitLine}></div>

                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>Colleges &amp; Polytechnics</p>
                    <p className={classes.chalSplitCont}>Design a low-cost portable organic waste management device for residential purpose.</p>
                    <p className={classes.chalSplitCont2}>Software to be used: AUTODESK FUSION 360</p>
                    <a href="https://www.autodesk.in/products/fusion-360/overview" rel="noopener noreferrer" target="_blank" className={classes.chalSplitImg2}>
                        <img src={fusion} alt="fusion 360 logo" />
                    </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSebeEuPx5qd_8MLua1-8YpSgBRLAsFBgc9Hnh7sPVonZGfwdQ/viewform?usp=sf_link" rel="noopener noreferrer" target="_blank" className={classes.rgBtn}>
                        Register
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Challenge;