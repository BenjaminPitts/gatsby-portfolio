import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import axios from 'axios'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Brand from '../components/brand.js'


try {
  axios.get("https://triplejpainting.herokuapp.com/")
  axios.get("https://recordstore666.herokuapp.com/recordstore")
  axios.get("https://react-quiz-js.herokuapp.com/")
  axios.get("https://benpitts-interview-flashcards.herokuapp.com/")
  axios.get("https://benjaminpitts.github.io/thejokestore/")
  axios.get("https://disney-itinerary.herokuapp.com/")
} catch (error) {}


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      <Link to="/about/">About</Link> |
      <Link to="/projects/"> Projects</Link> |
      <Link to='/contact/'> Contact</Link>
    </p>
    <strong>
    <StaticImage
      src="../images/profile.jpg"
      width={900}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Benjamin Pitts"
      style={{ margin: `1rem` }}
    />
    </strong>

    <Brand />
    <a href='https://drive.google.com/file/d/1ZQhmPSUI-n_q-jxrKvVSQ56T-cM-L1gx/view?usp=sharing' target='_blank' > Resume </a> |
    <a href='https://github.com/BenjaminPitts' target='_blank'> GitHub </a> |
    <a href='https://www.linkedin.com/in/benjaminjackpitts/' target='_blank'> LinkedIn </a>
  </Layout>
)

export default IndexPage
