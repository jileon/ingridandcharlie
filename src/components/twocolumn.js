import * as React from "react"
import Banner from "./banner"

import './styles/TwoColumn.scss'

const TwoColumn = ({ children }) => {

return(
  <div className='TwoColumn row'>
    <div className="TwoColumn__left col-12 col-md-6">
      <Banner />
    </div>

    <div className="TwoColumn__right col-12 col-md-6">

      
      
      <div data-tf-widget="UwkqWUIr" 
      style={{
        width: `100%`,
        height: `90%`,
        color:`none`,
        backgroundColor: `none`,
      }}
      >
      </div>
      {/* <button data-tf-slider="UwkqWUIr" data-tf-width="550" >RSVP</button> */}
    </div>
  </div>
  )

}

export default TwoColumn