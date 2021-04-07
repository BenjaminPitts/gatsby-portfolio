import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReCAPTCHA from "react-google-recaptcha"
import Form from '../components/form'

const Contact = () => (
  <Layout>

  <p>
    <Link to='/'> Home </Link> |
    <Link to="/about/"> About</Link> |
    <Link to="/projects/"> Projects</Link> |
    <Link to='/contact/'> Contact</Link>
  </p>
    <SEO title="Contact" />
    <Form />

    <p>
    <a href='https://drive.google.com/file/d/1ZQhmPSUI-n_q-jxrKvVSQ56T-cM-L1gx/view?usp=sharing' target='_blank' > Resume </a> |
    <a href='mailto:benjaminjackpitts@gmail.com' target='_blank'> Email </a> |
    <a href='https://www.linkedin.com/in/benjaminjackpitts/' target='_blank'> LinkedIn </a> |
    <a href='https://github.com/BenjaminPitts' target='_blank'> GitHub </a> |
    <a href='https://www.facebook.com/ben.pitts.7/' target='_blank'> Facebook</a><br /><br />

    <Link to="/">Back to Homepage</Link></p>
  </Layout>
)

export default Contact
