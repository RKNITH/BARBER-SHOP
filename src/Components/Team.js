import React from 'react'
import first from '../Images/team1.png';


export default function Team() {
    return (
        <div id="team"><br />
            <h1>Meet Our Team</h1>
            <div className="teamtext">
                <br />
                <h4 className='flint'>Raju</h4>
                <img src={first} alt="pic" />
                <br />
                <p>With a meticulous eye for detail, our precision haircut specialist ensures that every snip and trim is executed with utmost accuracy. They excel in crafting modern and classic hairstyles tailored to each client's unique preferences, ensuring a flawless look every time. Whether it's a sleek executive cut or a trendy fade, their expertise guarantees a sharp and polished finish that exceeds expectations.</p>
            </div>

            <div className="teamtext">
                <br />
                <h4>Rizvan</h4>
                <img src={first} alt="pic" />
                <br />
                <p>Our creative haircut specialist is known for pushing the boundaries of style and innovation. With a keen sense of trends and a flair for creativity, they specialize in delivering cutting-edge hairstyles that make a statement. From bold undercuts to textured layers, they excel in bringing clients' vision to life while infusing their own artistic touch, creating looks that are both fashion-forward and timeless</p>
            </div>

            <div className="teamtext">
                <br />
                <h4>Munna</h4>
                <img src={first} alt="pic" />
                <br />
                <p> Steeped in tradition and craftsmanship, our classic barber specialist embodies the timeless art of barbering. They specialize in traditional haircuts and grooming techniques, paying homage to the heritage of the barbershop while catering to the modern man. With their mastery of straight razor shaves, tapered fades, and beard trims, they offer a timeless grooming experience that harkens back to the golden age of barbershops</p>
            </div>
        </div>
    )
}
