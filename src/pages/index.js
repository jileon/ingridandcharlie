import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import OneColumnBanner from "../components/onecolumnbanner"
import OneColumn from "../components/onecolumn"

import TypeForm from "../components/typeform"
import Seo from "../components/seo"

import Palm from "../svg/SVG_palm.svg";
import Leaf from "../svg/SVG_leafBouquet.svg";
import FanLeaf from "../svg/SVG_fanLeaf.svg";

import "../components/styles/Button.scss"
import "../components/styles/SiteIntro.scss"


const IndexPage = () => {

  const leftSide = '';
  return (
    (
      <>
        <Layout>
          <Seo title="Ingrid and Charlie" />
          <div className="SiteIntro">
            <OneColumnBanner />
          </div>

          <div id="travel" className="SitePage">
            <OneColumn bgcolor="white">
              <div className="palmIcon">
              <Leaf />
              </div>
              <div class="OneColumn__infoText">
                <h2 className="OneColumn__heading2">Travel Accomodations</h2>
                <p>Reserve blocked off rooms at The Westin Pasadena</p>

                <div className="OneColumn__address">
                  <h3 className="OneColumn__heading3">The Westin Pasadena</h3>
                  <p>191 North Los Robles</p>

                  <p>Pasadena, California 91101 USA</p>

                </div>


                <a
                  className="Banner__btnText"
                  target="_blank"
                  rel="noopener"
                  href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1634321567175&key=GRP&app=resvlink"
                >Hotel Reservations</a>
              </div>
            </OneColumn>
          </div>


          <div id="covid" className="SitePage">
            <OneColumn bgcolor="ltgrey">
            <div className="palmIcon">
                <Palm />
              </div>

              <div class="OneColumn__infoText">
                <h2 className="OneColumn__heading2">Covid-19 Info</h2>
                <p>

                  As of January 1, 2022, we require all hosts and guests (age 12 and up) of events at the Castle to be fully vaccinated against COVID-19 or submit proof of a negative test within 72 hours of the event.   </p>
                <p>
                  Please complete the following form and submit proof of vaccination no less than 7 days prior to the event. A negative test must be submitted within 72 hours of the event date.
                </p>
                <p>
                  *Fully vaccinated as ascribed by the CDC meaning: an individual is two weeks past the Johnson & Johnson dose, or two weeks past the second dose of either the Pfizer or Moderna vaccine.
                  *For the testing option: a COVID-19 test must be completed by a healthcare provider – either a PCR or an antigen test (an at-home test is not accepted). Proof of a negative result must be submitted no more than 72 hours prior to the event date.
                </p>
                <p>
                  For any questions, please contact the Events Office at 626-793-0359 or at info@castlegreen.com.
                </p>

                <p>
                  We appreciate your cooperation in creating and maintaining a safe environment for our couples, their guests, and all staff. Thank you!
                </p>



                <a
                  className="Button__textTransparent"
                  target="_blank"
                  rel="noopener"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfmoXpQxojG0Cw_js1uwBwZDw5mEC5KRpZ70TKlfX2McFzhOQ/viewform"
                >COVID-19 FORM</a>
              </div>
            </OneColumn>
          </div>


          <div id="registry" className="SitePage">
            <OneColumn bgcolor="white">
            <div className="palmIcon">
                <Leaf />
              </div>
              <div class="OneColumn__infoText">
                <h2 className="OneColumn__heading2">Registry</h2>
                <p>

                  Should you wish to honor us with a gift, we've created a convenient registry at Amazon.The list can be viewed by clicking the link below. </p>



                <a
                  className="Button__textTransparent"
                  target="_blank"
                  rel="noopener"
                  href="https://www.amazon.com/wedding/charles-burroughs-ingrid-villanueva-pasadena-april-2022/registry/2UFI9JK3SOP0K"
                >Registry</a>
              </div>
            </OneColumn>
          </div>
        </Layout>







        <Layout>
          <TypeForm />
        </Layout>

      </>
    )

  )
}

export default IndexPage
