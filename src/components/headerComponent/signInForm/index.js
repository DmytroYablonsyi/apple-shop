// import React, {useState} from "react"

// import "./style.css"

// const SignInForm = ({handleName}) => {
//     const [state, setState] = useState('')
//     const userNameHandle = (e) => {
//        setState(e.target.value)
//     }

//     const nameHandling = (e) => {
//             handleName(state)
//     }

//     return(
//         <div className="signInFormBlock">
//             <form className="signInForm" >
//             <div className="row mb-3">
//                 <label className="col-sm-2 col-form-label">Name</label>
//                 <div className="col-sm-10">
//                 <input onChange={userNameHandle} className="form-control signIn_input" />
//                 </div>
//             </div>
//             <div className="row mb-3">
//                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
//                 <div className="col-sm-10">
//                 <input type="email" className="form-control signIn_input" id="inputEmail3"/>
//                 </div>
//             </div>
//             <div className="row mb-3">
//                 <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
//                 <div className="col-sm-10">
//                 <input type="password" className="form-control signIn_input" id="inputPassword3"/>
//                 <button onClick={(e) => nameHandling(e)} type="submit" className="btn btn-dark signInButton">Sign in</button>
//                 </div>
//             </div>
//             </form>
//         </div>
            
//     )
// }

// export default SignInForm

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./style.css"

const SignInForm = ({handleName}) => {
  const [validated, setValidated] = useState(false);

  const [state, setState] = useState('')
      const userNameHandle = (e) => {
         setState(e.target.value)
         localStorage.setItem("name", e.target.value)
      }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else{
        handleName(state)
    }

    setValidated(true);
    
  };

  return (
    <div className='signInFormBlock'>
        <Form className='signInForm' noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            onChange={userNameHandle}
            required
            type="text"
            placeholder="First name"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required pattern=".+@email\.com"
            />
            <Form.Control.Feedback type="invalid">
              Please choose a correct e-mail (consist "@e-mail.com").
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Button type="submit">Submit</Button>
        </Form>
    </div>   
  );
}

export default SignInForm;