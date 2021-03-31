import React from 'react'
import {Link} from 'gatsby'

class Links extends React.Component {
  render = () => {
    return <>
    <nav>
    <a href='https://triplejpainting.herokuapp.com/' data-toggle="tooltip" title='a project for JJ' target='_blank'>TripleJ Painting Company </a>|
    <a href='https://github.com/BenjaminPitts/TripleJ'> GitHub</a><br />
    <i>-PHP/Laravel/React/PostgreSQL</i><br /><br />

    <a href='https://recordstore666.herokuapp.com/recordstore' target='_blank'>CounterCulture Records </a>|
    <a href='https://github.com/BenjaminPitts/recordstore'> GitHub</a><br />
    <i>-Node/Express/EJS/MongoDB</i><br /><br />

    <a href='https://benpitts-interview-flashcards.herokuapp.com/' target='_blank'>Interview Flashcards </a>|
    <a href='https://github.com/BenjaminPitts/Spring-React-Stack'> GitHub</a><br />
    <i>-Java/Spring/React/PostgreSQL</i><br /><br />
</nav>
<span>
    <a href='https://react-quiz-js.herokuapp.com/' target='_blank'>Quiz.js <i>(collaboration project) </i></a>|
    <a href='https://github.com/BenjaminPitts/quiz.js'> GitHub</a><br />
    <i>-PHP/Laravel/React/PostgreSQL</i><br /><br />

    <a href='https://benjaminpitts.github.io/thejokestore/' target='_blank'>The Joke Store </a>|
    <a href='https://github.com/BenjaminPitts/BenjaminPitts.github.io/tree/main/thejokestore'> GitHub</a><br />
    <i>-HTML/CSS/jQuery/Axios</i><br /><br />

    <a href='https://disney-itinerary.herokuapp.com/' target='_blank'>Itinerary <i>(collaboration with UX/UI team) </i></a>|
    <a href='https://github.com/BenjaminPitts/mern-itinerary'> GitHub</a><br />
    <i>-Node/Express/React/MongoDB</i><br /><br />
    </span>

    </>
  }
}

export default Links
