import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage"
import logo from "../assets/images/logo.svg"
import main from "../assets/images/main.svg"

const StyledButton = styled.button`
  font-size: 1.5rem;
  background-color: blue;
  color: white;
`

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='Jobify' className='logo'/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Job <span>Tracking</span> App</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio animi reprehenderit, ratione esse in ducimus facilis rerum ex aliquid tempore, provident consequatur veritatis molestias nihil magni voluptates. Molestiae, eius itaque?</p>
          <Link to="/register" className="btn register-link">Register</Link>
          <Link to="/login" className="btn">Login | User Demo</Link>
        </div>
        <img src={main} alt='main image' className='img main-img'/>
      </div>
    </Wrapper>
  )
}

export default Landing
