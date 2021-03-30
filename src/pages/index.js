import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import axios from 'axios'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Test from '../components/test.js'


// try {
//   axios.get("https://triplejpainting.herokuapp.com/")
//   axios.get("https://recordstore666.herokuapp.com/recordstore")
//   axios.get("https://react-quiz-js.herokuapp.com/")
//   axios.get("https://benpitts-interview-flashcards.herokuapp.com/")
//   axios.get("https://benjaminpitts.github.io/thejokestore/")
//   axios.get("https://disney-itinerary.herokuapp.com/")
//
// } catch (error) {}


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      <Link to="/page-2/">About</Link> |
      <Link to="/page-3/"> Projects</Link> |
      <Link to='/page-4/'> Contact</Link>
    </p>
    <p><StaticImage
      src="../images/profile.jpg"
      width={900}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Benjamin Pitts"
      style={{ margin: `1rem` }}
    />
</p>
    <p>I am a software developer with a strong passion for solving problems and helping people which reflects my brand of leadership and sets a good example for my peers. Pairing these skills with my passion for human rights, community outreach, and environmental responsibility, I am an asset to any professional team and always do everything I can to make the world a better place. </p>
    <Test />
  </Layout>
)

export default IndexPage
