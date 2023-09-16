import React from 'react'
import './booking.css'
import { Link } from 'react-router-dom'

function Booking({fromData,whereData,whenData}) {
    return (
        <div>
            <div className="containerr">
                <div className="d-flex">
                    <form action="" method="">
                        <label>
                            <span className="fname">From<span className="required">*</span></span>
                            <h3>{fromData}</h3>
                        </label>
                        <label>
                            <span className="lname">To <span className="required">*</span></span>
                            <h3>{whereData}</h3>
                        </label>
                        <label>
                            <span>flight name</span>
                            <h3>indigo (india)</h3>
                        </label>
                        <label>
                            <span>Date <span className="required">*</span></span>
                            <h3>{whenData}</h3>
                        </label>
                        <label>
                            <span>time<span className="required">*</span></span>
                            <h3>19:20 pm</h3>
                        </label>
                        <label>
                            <span>Phone <span className="required">*</span></span>
                            <input type="tel" name="city" />
                        </label>
                        <label>
                            <span>Telephone <span className="required">*</span></span>
                            <input type="tel" name="city" />
                        </label>
                        <label>
                            <span>Total $ :<span className="required">*</span></span>
                            <h2>$ 368.45</h2>
                        </label>
                    </form>
                    <div className="Yorder">
                        <br />
                        <div>
                            flight payment more....
                        </div>
                        <p>
                            You can sort flights by price to see them from cheapest to most expensive. To find the cheapest flights, you also need to consider factors such as when you are booking and when you want to travel.
                        </p>
                        <div>
                            <input type="radio" name="dbt" value="cd" /> google pay
                            <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50" />
                        </div>
                        <div>
                            <input type="radio" name="dbt" value="cd" /> phone pay <span>
                                <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50" />
                            </span>
                        </div>
                        <Link to='/'><button onClick={()=>alert('booking success')} type="buttonn">Book now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking
