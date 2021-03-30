import React from 'react'
import {Link} from 'gatsby'

class Form extends React.Component {
  render = () => {
    return <div className='form'>
    <h2>Send Me a Message</h2><br />
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" action='/thanks/' netifly>
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact" />
    <label>
    <input type="text" name="name" placeholder='your name'/><br />
    </label>
    <label>
    <input type="email" name="email" placeholder='your email'/><br />
    </label>
    <label>
    <textarea type="text" name="message" cols='20' rows='5' placeholder='message'></textarea><br />
    </label>
    <button type='submit'>Send</button>
    <input type='reset' value='clear'  />
  </form><br />
    </div>
  }
}

export default Form
