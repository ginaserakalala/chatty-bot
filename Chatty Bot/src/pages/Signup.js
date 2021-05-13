import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default class SignUp extends Component {

  /*Setting the initial state of the page*/
  constructor(props){
    super(props);
    this.state = {
      error:  null,
      email: '',
      password: '',
    };
    /*Bind the handler to the components*/
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
    this.googlesignIn = this.googlesignIn.bind(this);
  }

  /*The input fields are bound to handchange method*/
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
   }

   /*The handlesubmit function prevents the default behavior for form submissions*/
   async handleSubmit(event) {
     event.preventDefault();
     this.setState({ error: ''});
     try {
       await signup(this.state.email, this.state.password);
     } catch (error){
       this.setState({ error: error.message });
     }
   }

   /*Adding onclick handler */
   async googlesignIn() {
     try {
       await signInWithGoogle();
     } catch (error) {
       this.setState({ error: error.message })
     }
   }

   /*Adding a click handler for the button that triggers the github sign up flow*/
   async githubSignIn() {
     try {
       await signInWithGitHub();
     } catch (error) {
       this.setState({ error: error.message })
     }
   }

  render(){
      return(
          <div>
            <form onSubmit={this.handleSubmit}>
               <h1>
                 Sign Up to
                <Link to="/">Chatbot</Link>
                </h1>
                <p>Fill in the form below to create an account.</p>
                <div>
                   <input placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
                 </div>
                 <div>
                 <input placeholder="Password" name="password" onChange={this.handleChange} value={this.state.email}></input>
                 </div>

                 <div>
                   {this.state.error ? <p>{this.state.error}</p> : null}
                   <button type="submit"> Sign up</button>

                   <p>or</p>
                   <button onClick={this.googlesignIn} type="button">

                   
                    Sign up with Google
                    </button>
                    <button type="button" onClick={this.githubSignIn}>
                      sign up with Github
                    </button>
                   </div>
                   <hr></hr>
                   <p>Already have an account? <Link to="/login"> Login</Link></p>
                  </form>
                  </div> 

  
      )
  }
}