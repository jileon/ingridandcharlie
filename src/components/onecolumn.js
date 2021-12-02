import * as React from "react"
import Banner from "./banner"
import './styles/OneColumn.scss'



const OneColumn = ({ children }) => {

  return (
    <div className='OneColumn'>
      <Banner />
    </div>
  )

}

export default OneColumn