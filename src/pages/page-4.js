import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FourthPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1><br />

    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" netifly>
    <label>
      Name: <input type="text" name="name" /><br />
    </label>
    <label>
    Email: <input type="email" name="email" /><br />
    </label>
    <label>
      Message: <textarea type="text" name="message"></textarea><br />
    </label>
    <button type='submit'>Send</button>
    <input type='reset' value='clear' />
  </form>




    <p><a href='mailto:benjaminjackpitts@gmail.com' target='_blank'>Email</a> |
    <a href='https://www.linkedin.com/in/benjaminjackpitts/'>LinkedIn</a> |
    <a href='https://github.com/BenjaminPitts' target='_blank'>GitHub</a> |
    <a href='https://www.facebook.com/ben.pitts.7/' target='_blank'>Facebook</a><br /><br /><br />

    <Link to="/">Go back to the homepage</Link></p>
  </Layout>
)

export default FourthPage
