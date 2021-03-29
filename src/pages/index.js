import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Portfolio</h1><br />
    <p><StaticImage
      src="../images/profile-pic.jpeg"
      width={200}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Benjamin Pitts"
      style={{ margin: `1rem` }}
    />
    <StaticImage
      src="../images/me.jpg"
      width={200}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Benjamin Pitts"
      style={{ margin: `1rem` }}
    />
    <StaticImage
      src="../images/ben.jpg"
      width={200}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Benjamin Pitts"
      style={{ margin: `1rem` }}
    /></p>
    <p>I am a software developer with a strong passion for solving problems and helping people which reflects my brand of leadership and sets a good example for my peers. Pairing these skills with my passion for human rights, community outreach, and environmental responsibility, I am an asset to any professional team and always do everything I can to make the world a better place. </p>
    <p>
      <Link to="/page-2/">Bio</Link> |
      <Link to="/page-3/"> Projects</Link> |
      <Link to='/page-4/'> Contact</Link>
    </p>
  </Layout>
)

export default IndexPage
