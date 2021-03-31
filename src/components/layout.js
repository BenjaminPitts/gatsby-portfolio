/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Typography from '../utils/typography.js'
import Header from "./header"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          slogan
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title}
      siteSlogan={data.site.siteMetadata?.slogan} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,

        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `12rem`,
          }}
        >

          <p>© {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.linkedin.com/in/benjaminjackpitts/" target='_blank'>Benjamin Pitts</a></p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
