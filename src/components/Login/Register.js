import React from 'react'
import HeadTitle from '../HeadTitle/HeadTitle'
import {useState} from "react"
import "./Design.css"
import { Link } from 'react-router-dom'


const Login = () => {
  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [allValue, setAllValue] = useState([])
    const formSubmit = (e) => {
        e.preventDefault()

        const newValue = {email,password}
        setAllValue([...allValue,newValue])
         
        setEmail("")   
        setPassword("")

    }
    return (
        <>
        <HeadTitle/> 
        <section className="forms top">
            <div className="container">
                <div className="sign-box">
                    <p>Register for a new account</p>
                    <form onSubmit={formSubmit}>
                         <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                         <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    
                    <div className="flex_space">
                        <div className="flex">
                            <input type="checkbox" />
                            <label>Remember Me</label>
                        </div>
                       
                 
                    </div>
                    <button type="submit" className="primary-btn"> Sign Up</button>
                    <div className="new-account">
                   <p>Already have an account? <Link to="/register">Sign in</Link></p>
                   </div>
                  
                    </form>
                   
                </div>
            </div>
        </section>
        <section className="show-data">
                {allValue.map((currentValue) => {
                    const {email,password} = currentValue

                    return(

                        <div className="sign-box">
                        <h1>Send Successfully</h1>
                
                        <h3>
                            Email: <p>{email}</p>
                        </h3>
                        <h3>
                            Password: <p>{password}</p>
                        </h3>
                    </div>
                    )
                })}
          
            </section>
      


     </>
    )
}

export default Login
