import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styles from './styles.module.css'

const Header = ({ siteTitle, siteSlogan }) => (

  <header
    style={{
      background: `gray`,
      marginBottom: `2rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    <Link to='/'>
      <h1 style={{ margin: `.2rem`, fontSize:`50px` }}>
          {siteTitle}
      </h1>
      </Link>
      <h3 style={{ margin: `0`, color: `#090909`, fontSize:`20px`, align: `center`}}>
      {siteSlogan}
      </h3>
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
