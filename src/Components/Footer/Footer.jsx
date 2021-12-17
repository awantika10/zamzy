import React from 'react'
import Logo from "../../assets/images/Logo.png"

function Footer() {
    return (
        <div className='Footer'>
            <div className='footer-profile'>
                <img src = {Logo} className = "logoFooter img-fluid" alt='footerImg' />
                <div className = "footerTxt">
                <h4>Home</h4>
                <h4>Stories</h4>
                <h4>Consult</h4>
            </div>
            <div className="footerCopy">
                <h4>Copyright by Team sOuls ©2021-2022 </h4>
            </div>
            </div>
            <div className='footer-profile' style = {{margin: "10px"}}>
            <p>Made with 💝 by Aryan & Awantika</p>
            </div>
        </div>
    )
}

export default Footer
