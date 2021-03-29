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
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Bio</Link> <br />
      <Link to="/page-3/">Projects</Link>
    </p>
  </Layout>
)

export default IndexPage
