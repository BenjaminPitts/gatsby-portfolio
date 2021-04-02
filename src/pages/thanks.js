import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Thanks = () => (
  <Layout>
    <SEO title="Thanks" /><p><br /><br />
    <h2>Thanks for your message,<br />I will follow up with you shortly!</h2>
    <br /><br /><br /><br /><br /><br />
    <Link to="/">Go back to the homepage</Link></p>
  </Layout>
)

export default Thanks
