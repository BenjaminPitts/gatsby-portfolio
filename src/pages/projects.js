import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Links from '../components/project-links'
import Tech from '../components/technologies'

const Projects = () => (
  <Layout>

  <p>
    <Link to='/'> Home </Link> |
    <Link to="/about/"> About</Link> |
    <Link to="/projects/"> Projects</Link> |
    <Link to='/contact/'> Contact</Link>
  </p>
    <SEO title="Projects" />
    <br />
    <Links />
    <Tech />
    <br /><br />
    
    <a href='https://drive.google.com/file/d/1ZQhmPSUI-n_q-jxrKvVSQ56T-cM-L1gx/view?usp=sharing' target='_blank' > Resume </a> |
    <a href='https://github.com/BenjaminPitts' target='_blank'> GitHub </a> |
    <a href='https://www.linkedin.com/in/benjaminjackpitts/' target='_blank'> LinkedIn </a><br /><br />

    <p><Link to="/">Back to Homepage</Link></p>
  </Layout>
)

export default Projects
