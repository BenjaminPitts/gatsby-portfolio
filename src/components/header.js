import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styles from './styles.module.css'

const Header = ({ siteTitle, siteSlogan }) => (
  <header
    style={{
      background: `gray`,
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `ivory`,
            textDecoration: `none`,
            textShadow: `none`,
            fontSize: `40px`

          }}
        >
          {siteTitle}
        </Link>
      </h1>
      {siteSlogan}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
