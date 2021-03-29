import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FourthPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <a href='mailto:benjaminjackpitts@gmail.com' target='_blank'>Shoot me an email!</a><br />
    <a href='https://www.linkedin.com/in/benjaminjackpitts/'>Message me on LinkedIn</a><br />
    <a href='https://github.com/BenjaminPitts' target='_blank'>Check out my GitHub</a><br />
    <a href='https://www.facebook.com/ben.pitts.7/' target='_blank'>Friend me on Facebook</a><br /><br />

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FourthPage
