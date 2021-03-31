import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReCAPTCHA from "react-google-recaptcha"
import Form from '../components/form'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Form />

    <p><a href='mailto:benjaminjackpitts@gmail.com' target='_blank'>Email </a> |
    <a href='https://www.linkedin.com/in/benjaminjackpitts/' target='_blank'> LinkedIn </a> |
    <a href='https://github.com/BenjaminPitts' target='_blank'> GitHub </a> |
    <a href='https://www.facebook.com/ben.pitts.7/' target='_blank'> Facebook</a><br /><br /><br /><br /><br />

    <Link to="/">Back to Homepage</Link></p>
  </Layout>
)

export default Contact
