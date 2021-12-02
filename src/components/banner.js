import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "../components/styles/Banner.scss"


const Banner = () => {

  return (
    <div className="Banner">
      <h1 className="Banner__header">Save the Date</h1>
      <div className="Banner__logoContainer">
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


      <p className="Banner__date">Thursday, <br />April 07, 2022</p>
      <p className="Banner__location">Pasadena,CA</p>

      <div className="Banner__buttons">
        <AnchorLink className="Banner__btn" to="/#siteform" title="Site Form">
          <span>RSVP</span>
        </AnchorLink>

        <Link className="Banner__btn" to="/faq"> <span>FAQ</span></Link>
      </div>


    </div>
  )
}

export default Banner