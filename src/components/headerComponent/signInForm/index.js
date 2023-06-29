import React, {useState} from "react"

import "./style.css"

const SignInForm = ({handleName}) => {
    const [state, setState] = useState('')
    const userNameHandle = (e) => {
       setState(e.target.value)
    }

    const nameHandling = (e) => {
            handleName(state)
    }

    return(
        <div className="signInFormBlock">
            <form className="signInForm" >
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                <input onChange={userNameHandle} className="form-control signIn_input" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type="email" className="form-control signIn_input" id="inputEmail3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input type="password" className="form-control signIn_input" id="inputPassword3"/>
                <button onClick={(e) => nameHandling(e)} type="submit" className="btn btn-dark signInButton">Sign in</button>
                </div>
            </div>
            </form>
        </div>
            
    )
}

export default SignInForm
