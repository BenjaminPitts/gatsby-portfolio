import React from 'react'


class Links extends React.Component {
  render = () => {
    return <>
    <nav>
    <span>
    <a href='https://triplejpainting.herokuapp.com/' target='_blank'>TripleJ Painting</a>&nbsp;|&nbsp;
    <a href='https://github.com/BenjaminPitts/TripleJ' target='_blank'> GitHub</a>
    <img src='https://i.imgur.com/4QhvKEy.png' data-toggle="tooltip" title='Triple J Painting Company is a full-CRUD, single page application built on a Laravel/PHP stack with React on the frontend. It uses a postgreSQL database for relational queries and has an admin route for update/delete functions. Users can easily see the bio, look at portfolio pictures, contact the company, and leave reviews about their experience. This app is responsive, mobile friendly, and users are able to quickly toggle between the different views.' /><br />
    </span>
    <b>PHP/Laravel/React/PostgreSQL</b><br />

    <span>
    <a href='https://recordstore666.herokuapp.com/recordstore' target='_blank'>CC Records </a>&nbsp;|&nbsp;
    <a href='https://github.com/BenjaminPitts/recordstore' target='_blank'> GitHub</a>
    <img src='https://i.imgur.com/jhloCPY.png' data-toggle="tooltip" title='Recordstore was built using HTML, CSS, JavaScript, EJS, Bcrypt, Node, Express, Mongoose, and MongoDB. This was my first time using databases and servers to create a functional and interactive full-CRUD application. Users can create an account and log in to create/update/delete content. The content can then be accessed by category and has a clean, mobile-friendly layout. There is also a randomly generated album that appears on the index page upon refresh and a link to my portfolio in the footer of the page.' /><br />
    </span>
    <b>Node/Express/EJS/MongoDB</b><br />

    <span>
    <a href='https://benpitts-interview-flashcards.herokuapp.com/' target='_blank'>BP Flashcards </a>&nbsp;|&nbsp;
    <a href='https://github.com/BenjaminPitts/Spring-React-Stack' target='_blank'> GitHub</a>
    <img src='https://i.imgur.com/CeeXiAj.png' data-toggle="tooltip" title='Flashcards is a full CRUD application built with Java and Spring Boot with React on the front end and a PostgreSQL database. I used IntelliJ for local development and deployed this on Heroku using the "Heroku Postgres add-on". I populated each interview question with answers specific to my experiences and use this app to preprare for interviews and networking questions.' /><br />
    </span>
    <b>Java/Spring/React/PostgreSQL</b><br />

    <span>
    <a href='https://benjaminpitts-musician.herokuapp.com/' target='_blank'>Musician Portfolio </a>&nbsp;|&nbsp;
    <a href='https://github.com/BenjaminPitts/django_contacts' target='_blank'> GitHub</a>
    <img src='https://i.imgur.com/kx4z459.png' data-toggle="tooltip" title='Musician Portfolio is a full CRUD app and was built using a Python/Django stack. I learned how to create a virtual environment for local development and run migration locally and on heroku. I also created a superuser account on the Django backend for /admin functions.' /><br />
    </span>
    <b>Python/Django/HTML/CSS</b><br />

    <span>
    <a href='https://react-quiz-js.herokuapp.com/' target='_blank'>Quiz.js <i>(collab)</i></a>&nbsp;|&nbsp;
    <a href='https://github.com/BenjaminPitts/quiz.js' target='_blank'>GitHub</a>
    <img src='https://i.imgur.com/f8RH651.png' data-toggle="tooltip" title='Quiz.js is a full CRUD, Single Page Application built with React, Laravel, PHP, and PostgresQL. It is a collaboration project between Anand Patel, Andrew Bayles, and Ben Pitts. The user is prompted to answer questions that can help solidify their understanding of JavaScript fundamentals. The team used axios to handle routing, and PHP to query/return questions from the database. Using React, the question is dynamically rendered to the page and the user is able to input a multiple choice answer. A program was written to compare the user input to the stored answer in the data. If the answer matches, a "correct" statement is rendered to the page, a point value accumulates, and the next question is randomly generated. Users also have the ability to create, update, and delete questions from the database and the app if fully responsive and mobile friendly!' /><br />
    </span>
    <b>PHP/Laravel/React/PostgreSQL</b><br />

    <span>
    <a href='https://benjaminpitts.github.io/thejokestore/' target='_blank'>The Joke Store </a>&nbsp;|&nbsp;<a href='https://github.com/BenjaminPitts/BenjaminPitts.github.io/tree/main/thejokestore' target='_blank'> GitHub</a>
    <img src='https://i.imgur.com/2X28xOO.png' data-toggle="tooltip" title='The joke staore was created using HTML, CSS, JavaScript, and jQuery. First, I made a "carousel of Dads" to be a visual aid in deploying a "dad" joke. I also included some tooltips that are specific to each Dad. Next, I linked an API to append jokes into an empty div when a button is clicked. I also created a button to save a "go-to" joke in the users local storage and retrieve that joke from the browser at any point. Finally, I linked a 2nd API that uses the value of a form field to output several weather conditions. Some "Dad phrases" are also displayed and are specific to the users current local temperature.' /><br />
    </span>
    <b>HTML/CSS/jQuery/Axios</b><br />

    <span>
    <a href='https://disney-itinerary.herokuapp.com/' target='_blank'>Itinerary <i>(collab) </i></a>&nbsp;|&nbsp;
    <a href='https://github.com/BenjaminPitts/mern-itinerary' target='_blank'> GitHub</a>
    <img src='https://i.imgur.com/s8Jd1GU.png' data-toggle="tooltip" title='Itinerary is a full CRUD MERN stack and was a collaboration with a dev team and a UX/UI team. This app is a solution to Disneys Magic Kingdom app which does not have an option for event planning. The UX/UI team created the user story and used a Figma board to present their design ideas. The development team then used the Figma board to build out the application. In addition to helping build all aspects of functionality, I served as SCRUM Master and used a Trello board to delegate. I set up daily stands with all team members and made sure we met MVP before our deadline.' /><br />
    </span>
    <b>Node/Express/React/MongoDB</b><br />

    </nav>

    </>
  }
}

export default Links
