import React from 'react'
import Contact from './Contact';
import Team from './Team';
import Price from './Price';
import Services from './Services';
import Slider from './Slider';
import About from './About';

export default function Home() {
    return (
        <div>
            <Slider />
            <About />
            <Services />
            <Price />
            <Team />
            <Contact />
        </div>
    )
}
