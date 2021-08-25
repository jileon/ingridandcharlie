import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../components/styles/Banner.scss"

const Banner = () => {

  return (
    <div className="Banner">
      <h1 className="Banner__header">Save the Date</h1>
      <div className="Banner__logoContainer">
        <StaticImage
          src="../images/namelogo.svg"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Ingrid and Charlie name logo"
          style={{ width: `100%` }}
        />
      </div>


      <p className="Banner__date">Thursday, <br/>April 07, 2022</p>
      <p className="Banner__location">Pasadena,CA</p>
      
      <a className="Banner__btn" href="#siteform">RSVP</a>
    </div>
  )
}

export default Banner