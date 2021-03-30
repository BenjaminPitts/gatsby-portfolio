import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Links from '../components/project-links'
import Tech from '../components/technologies'

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <Links />
    <Tech />
    <br /><br />
    <p><Link to="/">Go back to the homepage</Link></p>
  </Layout>
)

export default Projects
