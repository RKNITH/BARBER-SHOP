import React from 'react'
import first from '../Images/service1.png';
import second from '../Images/service2.png';
import third from '../Images/service3.png';


export default function Services() {
    return (
        <div id="services"><br />
            <h1>Services</h1>
            <p>At Groomly, we offer a range of premium grooming services designed to elevate your look and boost your confidence. Our skilled barbers specialize in:</p>

            <div className="card">
                <br />
                <img src={first} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Stylish Hair Cut</h2>
                    <p className="text">Precision Haircuts at Groomly are more than just a trim; they're a statement of style and sophistication. Our expert barbers are trained to deliver precision cuts that enhance your facial features and reflect your unique personality. Whether you prefer a sleek and contemporary look or a timeless classic style, we've got you covered. With attention to detail and skilled craftsmanship, we ensure every cut is executed to perfection, leaving you feeling confident and looking your absolute best. Trust Groomly for precision haircuts that elevate your grooming experience to the next level.</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={second} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Shave</h2>
                    <p className="text">Relaxing Shaves at Groomly offer more than just a close shave; they provide a moment of relaxation and indulgence in your grooming routine. Our skilled barbers use traditional techniques combined with modern amenities to deliver a soothing and rejuvenating experience. With the application of warm towels and premium shaving products, we ensure a smooth and irritation-free shave every time. Step into our grooming lounge, unwind in our comfortable chairs, and let our experts work their magic to leave your skin feeling refreshed and revitalized. Trust Groomly for a luxurious shaving experience that leaves you feeling invigorated and ready to conquer the day.</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={third} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Color & Hair Wash</h2>
                    <p className="text">Color Services at The Gentlemen's Grooming Lounge go beyond mere hair coloring; they're about enhancing your style and confidence. Our expert colorists specialize in creating custom shades that complement your skin tone and personal aesthetic. Whether you're looking to add subtle highlights, cover gray hairs, or make a bold statement with vibrant hues, we've got you covered. Using high-quality products and advanced techniques, we ensure natural-looking results with minimal damage to your hair. Step into our salon and let our skilled team elevate your look with precision and care. Trust us to deliver flawless color services that leave you looking and feeling your best, every time.</p>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
        </div>
    )
}
