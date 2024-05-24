import React from 'react'
import fb from '../Images/fb.png';
import twi from '../Images/twi5.png';
import ins from '../Images/ins1.jpg';
import lin from '../Images/lin5.png';

export default function Footer() {
    return (
        <div id="footer" className="myfooter">
            <div className="card">
                <br />
                <div className="card-body">
                    <h3 className="card-title">About Us</h3>
                    <p className="text">Whether you're preparing for a big event or just need a fresh look, our team is dedicated to making you look and feel your best.</p>
                    <a href="#"><img src={fb} alt="social media" /></a>
                    <a href="#"><img src={twi} alt="social media" /></a>
                    <a href="#"><img src={ins} alt="social media" /></a>
                    <a href="#"><img src={lin} alt="social media" /></a>
                </div>
            </div>

            <div className="card">
                <br />
                <div className="card-body">
                    <h3 className="card-title">Opening Hours</h3>
                    <p className="text">Monday to Saturday: 12PM to 10PM</p>
                    <p className="text">Saturday: 12PM to 12AM</p>
                    <p className="text">Sunday: 12PM to 12AM</p>
                </div>
            </div>

            <div className="card">
                <br />
                <div className="card-body">
                    <h3 className="card-title">Contact Info</h3>
                    <p className="text">Address: Bihar, India</p>
                    <p className="text">Phone: 7973002267</p>
                    <p className="text">Email: rr8422617@gmail.com</p>
                </div>
            </div>

            <div><br /><br />
                <p id="rights">2024 All rights reserved to Trimify</p><br />
            </div>

        </div>
    )
}
