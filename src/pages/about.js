import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from 'gatsby-plugin-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from '../components/bio'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
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
    </article><br />


<Bio /><br />
    <p><Link to="/">Back to Homepage</Link></p>
  </Layout>
)

export default SecondPage
