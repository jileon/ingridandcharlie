import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "../components/styles/Banner.scss"


const Banner = () => {

  return (
    <div className="Banner">
      <h1 className="Banner__header">Save the Date</h1>
      <div className="Banner__logoContainer">

        {/* Ingrid &amp; Charlie */}
        <StaticImage
          backgroundColor="transparent"
          fadeIn="false"
          src="../images/iclogobronze.png"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Ingrid and Charlie name logo"
          style={{ width: `100%` }}
        />

      </div>


      <p className="Banner__date">Thursday, April 07, 2022</p>
      <p className="Banner__location">Pasadena,CA</p>
      
      <div class="Banner__nav"> 
      <AnchorLink className="Banner__btnText" to="/#siteform" title="Site Form">
        <span>RSVP</span>
      </AnchorLink>
      <AnchorLink className="Banner__btnText" to="/#travel" title="travel">
        <span>Travel</span>
      </AnchorLink>
     


      <AnchorLink className="Banner__btnText" to="/#covid" title="Covid">
        <span>Covid-19 Info</span>
      </AnchorLink>
      <AnchorLink className="Banner__btnText" to="/#registry" title="registry">
        <span>Gift Registry</span>
      </AnchorLink>
      </div>
   

    </div>
  )
}

export default Banner