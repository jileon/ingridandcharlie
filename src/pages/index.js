import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import OneColumn from "../components/onecolumn"

import Seo from "../components/seo"
import "../components/styles/SiteMain.scss"


const IndexPage = () =>{

const leftSide ='' ;
return(
  (
    <Layout>
      <Seo title="Ingrid and Charlie" />

      <div className="SiteMain">

        <OneColumn/>

   
      </div>





    </Layout>
  )

)
} 

export default IndexPage
