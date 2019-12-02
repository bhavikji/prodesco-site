import React from "react"

import classes from './hero.module.css'

import idea from '../../../content/illus/idea4.svg'
import blob from '../../../content/bgillus/blob2DGr.svg'
import down from '../../../content/icons/downArrowEd.svg'

const Hero = () => {
    return(
        <div className={classes.heroWrap}>
            <img src={blob} alt="blob" className={classes.blob} />
            <img src={idea} alt="Idea hero" className={classes.heroIm}/>
            <div className={classes.heroTx}>
                <React.Fragment>
                    <p className={classes.heroTxHead}>Design to&nbsp; 
                        <div className={classes.animatedWords}>
                            <span>Inspire.</span>
                            <span>Innovate.</span>
                            <span>Empower.</span>
                            <span>Influence.</span>
                            <span>Change.</span>
                            <span>Deliver.</span>
                        </div>
                    </p>
                </React.Fragment>
                <div className={classes.heroTxCont}>National level competition to unearth the inventors of tomorrow</div>
                <a href="/#challenge-section" rel="noopener noreferrer" target="_blank" className={classes.rgBtn}>
                    Register
                </a>
            </div>
            <img src={down} alt="Down Arrow" className={classes.downArr} />
        </div>
    )
}

export default Hero;