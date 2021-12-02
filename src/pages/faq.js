import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import OneColumn from "../components/onecolumn"
import Seo from "../components/seo"
import "../components/styles/SiteMain.scss"

const FaqPage = () =>(
    <>
    <Layout>
      <Seo title="FAQ | Ingrid and Charlie" />
      <div className="SiteMain">
        <OneColumn/>
      </div>
    </Layout>
    
    
    </>
)

export default FaqPage

