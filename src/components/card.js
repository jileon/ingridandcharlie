import * as React from "react"
import Banner from "./banner"
import './styles/OneColumn.scss'

const Card = ({ children }) => {

  return (
    <div className='OneColumn'>
      <section class="card-section">
            <div class="card">
              <div class="flip-card">
                <div class="flip-card__container">
                  <div class="card-front">
                    <div class="card-front__tp card-front__tp--beach">
          


                    </div>

                    <div class="card-front__bt">
                   
                    </div>
                  </div>
                  <div class="card-back">

                  </div>
                </div>
              </div>

              <div class="inside-page">
                <div class="inside-page__container">
                  <h3 class="inside-page__heading inside-page__heading--beach">
           
                  </h3>
                  <p class="inside-page__text">
              
                  </p>
            
                </div>
              </div>
            </div>
          </section>
    </div>
  )

}

export default Card