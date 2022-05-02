import React  from 'react'
import HeadTitle from '../HeadTitle/HeadTitle'
import "./Register.css"
import { Link } from 'react-router-dom'
import {useState} from "react"


const Register = () => {

     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")

    return (
        <>
           <HeadTitle/> 

                     <div className="register">
               <div className="register__container">

               <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
                 />

                   <input
                 type="password"
               className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button className="register__btn" >
          Register
        </button>
       
        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
    </div>
  );

        </>
    )
    }
 

export default Register
