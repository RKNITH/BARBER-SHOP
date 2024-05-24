import React from 'react'
import one from '../Images/about.png';


export default function PriceText() {
    return (
        <div className="card">
            <div className="row no-gutters">
                <div className="col">
                    <img src={one} alt="pic" className="card-img" />
                </div>
                <div className="col">
                    <div className="card-body">
                        <h2 className="card-title">Hair Cutting</h2>
                        <p className="card-text">Only in Rs: 300</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
