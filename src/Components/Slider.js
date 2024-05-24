import React from 'react'
import { Link } from 'react-router-dom';


export default function Slider() {
    return (
        <div id="slider">
            <div id="slidertext">
                <h3>Elevate Your Grooming Experience</h3>
                <br />
                <h1>GOOD LOOK GUARANTEED</h1><br />
                <p>Step into a realm of refined masculinity at The Gentlemen's Grooming Lounge. Discover the epitome of modern grooming where precision meets relaxation, offering expert haircuts, luxurious shaves, and professional color services. Experience grooming excellence in a sophisticated atmosphere tailored exclusively for the modern man.</p><br />
                <button className="btn"><Link to="/contact">Make an appointment</Link></button>&nbsp;&nbsp;
                <button className="btn"><Link to="/contact">Contact Us</Link></button>
            </div>

            <div id="sliderimg"></div>
        </div>
    )
}
