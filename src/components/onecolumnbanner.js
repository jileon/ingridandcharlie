import * as React from "react"
import Banner from "./banner"
import './styles/OneColumnBanner.scss'


const OneColumnBanner = ({ children }) => {

  return (
    <div className='OneColumnBanner'>
      <Banner />
      { children }
    </div>
  )

}

export default OneColumnBanner