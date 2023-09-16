import React from 'react'
import { Link } from 'react-router-dom'
import './details.css'

function Details({fromData,whereData}) {
  return (
    <div className='box-main'>
<div className="squire">
        <h4>Select flight from <i>{fromData}</i> to <i>{whereData}</i></h4>
      
</div>
      <div className="details">
     
        <div className="brand">INDIGO(flight Name)</div>
        <div className="s-time"> <h3>12:05</h3><b>DXB</b><p >{fromData}</p></div>
        <div className="blank"> 20h 20min</div>
        <div className="e-time"> <h3>19:05</h3><b>CCJ</b><p>{whereData}</p></div>
        <div className="kg"> <p>30 kg</p></div>
      </div>

      <div className="details">
        <div className="brand">oman air</div>
        <div className="e-time"> <h3>19:05</h3><b>CCJ</b><p>{whereData}</p></div>
        <div className="blank"> 9h 30min </div>
        <div className="s-time"> <h3>11:05</h3><b>DXB</b><p>{fromData}</p></div>
        <div className="kg"> <p>30 kg</p></div>
      </div>
     <div className='book-btn'> $ 368.45 <button> <Link to="/booking" style={{ textDecoration: 'none' }}>book now</Link></button></div> 
    </div>
  )
}

export default Details
