import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>About Benjamin Pitts</h1>
    <p>I am a software developer with a robust work history.
I’ve worked for companies ranging from small/independent, medium/franchise, to large corporations and can adapt to any type of working environment. I have a well rounded knowledge of frontend languages/backend frameworks and have deployed an [array] of projects to showcase this fluency. I have also collaborated with other software developers on projects and have the ability to learn new languages and concepts.

I have over 8 years of experience in restaurant management. I have successfully launched menus, organized charitable community events and piloted merchandising, marketing and training initiatives. During my tenure in that industry, I was able to continuously grow quarterly sales while keeping team morale at an all time high. My previous supervisor described me as a “dedicated leader that sets a great example with his positive approach to problem solving”. I love overcoming challenges and using my communication skills to maintain a fun, creative, and productive work environment .</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
