import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <a href='https://triplejpainting.herokuapp.com/' target='_blank'>TripleJ Painting Company</a><br />
    <a href='https://recordstore666.herokuapp.com/recordstore' target='_blank'>CounterCulture Records</a><br />
    <a href='https://react-quiz-js.herokuapp.com/' target='_blank'>Quiz.js <i>(collaboration project)</i></a><br />
    <a href='https://benpitts-interview-flashcards.herokuapp.com/' target='_blank'>Interview Flashcards</a><br />
    <a href='https://benjaminpitts.github.io/thejokestore/' target='_blank'>The Joke Store</a><br />
    <a href='https://disney-itinerary.herokuapp.com/' target='_blank'>Itinerary <i>(collaboration with UX?UI team)</i></a><br />

    <h2>Technologies used:</h2>
    <br /><br /><br /><br /><br /><br />
    <p><Link to="/">Go back to the homepage</Link></p>
  </Layout>
)

export default ThirdPage
