
import HeadTitle from '../HeadTitle/HeadTitle'
import {useState} from "react"
import "./Design.css"
import { Link } from 'react-router-dom'
import {useUserAuth} from "../../context/UserAuthContext"



const Login = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {login} = useUserAuth();

    const [allValue, setAllValue] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault();
        error("");
        try {
            await login(email, password);
        }catch (err){

        }
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
                    <p>Enter your e-mail and password below to log in to your account and use the benefit of our website</p>
                    <form onSubmit={handleSubmit}>
                         <input type="email" name="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                         <input type="password" name="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                    
                    <div className="flex_space">
                        <div className="flex">
                            <input type="checkbox" />
                            <label>Remember Me</label>
                        </div>
                        <div className="flex">
                            <span>I forgot my password</span>
                        </div>
                 
                    </div>
                    <button type="submit" className="primary-btn"> Sign In</button>
                    <div className="new-account">
                   <p>Don't Have An Account? <Link to="/register">Sign Up</Link></p>
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
