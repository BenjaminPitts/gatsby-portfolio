import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from 'gatsby-plugin-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from '../components/bio'

const About = () => (
  <Layout>
  <p>
    <Link to='/'> Home </Link> |
    <Link to="/about/"> About</Link> |
    <Link to="/projects/"> Projects</Link> |
    <Link to='/contact/'> Contact</Link>
  </p>

    <SEO title="About" />
    <article>
    <StaticImage
      src="../images/me.jpg"
      width={200}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Benjamin Pitts"
      style={{ margin: `1rem`, borderRadius: `10%` }}
    />
    <h2><i>I am a software developer with a robust work history</i></h2>
    <StaticImage
      src="https://i.imgur.com/plNrAnM.jpg"
      width={200}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Benjamin Pitts"
      style={{ margin: `1rem`, borderRadius: `10%` }}
    />
    </article><br />


<Bio /><br />

<a href='https://drive.google.com/file/d/1ZQhmPSUI-n_q-jxrKvVSQ56T-cM-L1gx/view?usp=sharing' target='_blank' > Resume </a> |
<a href='https://github.com/BenjaminPitts' target='_blank'> GitHub </a> |
<a href='https://www.linkedin.com/in/benjaminjackpitts/' target='_blank'> LinkedIn </a><br /><br />

<p><Link to="/">Back to Homepage</Link></p>
  </Layout>
)

export default About
