import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import OneColumn from "../components/onecolumnbanner"
import TypeForm from "../components/typeform"
import Seo from "../components/seo"
import Header from "../components/header"
import "../components/styles/SiteIntro.scss"


const rsvpPage = () =>{

const leftSide ='' ;
return(
  (
  <>
    <Layout>
      <Seo title="Ingrid and Charlie RSVP" />
    </Layout>
    
    <Layout>



        <TypeForm/>

    </Layout>
    
    </>
  )

)
} 

export default rsvpPage
