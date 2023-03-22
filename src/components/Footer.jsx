import React from 'react'
import {BsGithub} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import './Footer.css'

function Footer() {
  const navigateGithub = () => {
    window.location.href = 'https://github.com/beckerhenrique'
  }

  return (
    <div className='footer'>
      <h3>Site responsivo para e-commerce, utilizando de React, Javascript e Css.</h3>
      <BsGithub className='githubIcon' onClick={navigateGithub}/>

    </div>
  )
}

export default Footer