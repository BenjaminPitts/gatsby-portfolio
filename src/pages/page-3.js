import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <ul>
    <li><a href='https://triplejpainting.herokuapp.com/' target='_blank'>TripleJ Painting Company</a></li>
    <li><a href='https://recordstore666.herokuapp.com/recordstore' target='_blank'>CounterCulture Records</a></li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
