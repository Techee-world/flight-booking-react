import React from 'react'
import Details from '../component/details/Details'

function DetailsPage({fromData,whereData}) {
  return (
    <>
      <div className="details-box">
        <div className="box-01">
          <div className="one">
            <h5>Recommended</h5>
            <p><b>$368.56</b></p>
          </div>
          <div className="one">
            <h5>Campaign</h5>
            <p><b>$268.56</b></p>
          </div>
          <div className="one">
            <h5>Cheapest</h5>
            <p><b>$134.56</b></p>
          </div>
          <div className="one">
            <h5>Shortest</h5>
            <p><b>$474.56</b></p>
          </div>
        </div>
        <Details fromData={fromData} whereData={whereData} />
        <Details fromData={fromData} whereData={whereData} />
        <Details fromData={fromData} whereData={whereData} />
        <Details fromData={fromData} whereData={whereData} />
        <Details fromData={fromData} whereData={whereData} />
      </div>
    </>
  )
}

export default DetailsPage
