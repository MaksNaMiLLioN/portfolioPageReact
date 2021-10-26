import React from 'react'
import './intro.css'
import Man from '../../img/man.png'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-into">My name is </h2>
                    <h1 className="i-name">John Doe </h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Photographer</div>
                            <div className="i-title-item">Writer</div>
                            <div className="i-title-item">Content Creator</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I design a develop services for customers of all sizes, specializing 
                        in creating stylish, moder websites, web services and online stores.
                    </p>
                </div>
                
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Man} alt="" className="i-img"/>
            </div>
        </div>
            
    )
}

export default Intro
