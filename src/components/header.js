import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/styles/SiteHeader.scss"

const Header = ({ siteTitle }) => (
  <div className="SiteHeader">

      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}

        </Link>
      </h1> */}

      <ul className="SiteHeader__nav">
        <li class="SiteHeader__navLink">
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
         Home

        </Link>

        </li>
      </ul>

  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
