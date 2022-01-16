import * as React from "react"
import Banner from "./banner"
import './styles/OneColumn.scss'


const OneColumn = ({ children, bgcolor }) => {

  return (
    <div className={`OneColumn OneColumn--${bgcolor}`}>
      {children}
    </div>
  )

}

export default OneColumn