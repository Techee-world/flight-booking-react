import React from 'react'
import './card.css'

function Card() {
        return (

                <div className='card-box'>
                        <div className="card">
                                <img src="https://images.pexels.com/photos/2441844/pexels-photo-2441844.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Avatar" />
                                <div className="container">
                                        <h4><b>Round-trip</b></h4>
                                        <p>470$</p>
                                </div>
                        </div>
                        <div className="card">
                                <img src="https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Avatar" />
                                <div className="container">
                                        <h4><b>Round-trip</b></h4>
                                        <p>370$</p>
                                </div>
                        </div>
                        <div className="card">
                                <img src="https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Avatar" />
                                <div className="container">
                                        <h4><b>Round-trip</b></h4>
                                        <p>400$</p>
                                </div>
                        </div>
                        <div className="card">
                                <img src="https://images.pexels.com/photos/91217/pexels-photo-91217.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Avatar" />
                                <div className="container">
                                        <h4><b>Round-trip</b></h4>
                                        <p>350$</p>
                                </div>
                        </div>
                </div>
        )
}

export default Card
