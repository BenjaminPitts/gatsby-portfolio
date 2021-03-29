import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Benjamin Jack Pitts</h1>
    <p>custom portfolio in progress</p>
    <p>built on gatsby, deployed on netifly</p>
    <StaticImage
      src="../images/me.jpg"
      width={200}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Benjamin Pitts"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Bio</Link> |
      <Link to="/page-3/"> Projects</Link> |
      <Link to='/page-4/'> Contact</Link>
    </p>
  </Layout>
)

export default IndexPage
