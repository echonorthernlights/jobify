import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import {FormRow, Logo} from "../components"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <Wrapper>
        <form className='form'>
          <Logo/>
          <h4>Login</h4>
          <FormRow type="email" name="email" defaultValue="admin@admin.com" />
          <FormRow type="password" name="password" defaultValue="root1234" />
      
          <button type="submit" className="btn btn-block">submit</button>
          <p>
            Not a member ?
            <Link to="/register" className="member-btn"> Register </Link>
          </p>
        </form>
    </Wrapper>
  )
}

export default Login
