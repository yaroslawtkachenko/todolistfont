import React, { Component} from 'react';
import './SignIn.scss';
import {createUser} from "../actions/userActions";
import {loginUser} from "../actions/userActions";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singInForm: true
        }
    }

    handleClick = () => {
        if(this.state.singInForm === true) {
            let email = this.refs.emailSI.value;
            let pass = this.refs.passwordSI.value;
            loginUser({
                email: email,
                password: pass
            })
        }
        else {
            let email = this.refs.emailSU.value;
            let pass = this.refs.passwordSU.value;
            let confpass = this.refs.confPasswordSU.value;
            createUser({
                email: email,
                password: pass,
                password_confirmation: confpass,
                confirm_success_url: ''
            })
            this.refs.emailSU.value = '';
            this.refs.passwordSU.value = '';
            this.refs.confPasswordSU.value = '';
        }
    }

    goToSignUp = () => {
        this.setState({singInForm:false})
    };

    goToSignIn = () => {
        this.setState({singInForm:true})
    };

    render() {
        const signInForm =
            <div>
                <div className='top-button'>
                    <p>Don`t have an account? <button onClick={this.goToSignUp}>Sign up</button></p>
                </div>
                <div className='sign-form'>
                    <strong>SignIn</strong>
                    <input type='email' placeholder='Email' ref='emailSI'/>
                    <input type='password' placeholder='Password' ref='passwordSI'/>
                    <div>
                        <button onClick={this.handleClick}>Sign In</button>
                    </div>
                </div>
            </div>;
        const signUpForm =
            <div>
                <div className='top-button'>
                    <p> Already has an account? <button onClick={this.goToSignIn}>Sign in</button></p>
                </div>
                <div className="sign-form">
                    <strong>SignUp</strong>
                    <input type='email' placeholder='Email' ref='emailSU'/>
                    <input type='password' placeholder='Password' ref='passwordSU'/>
                    <input type='password' placeholder='Confirm password' ref='confPasswordSU'/>
                    <div>
                        <button onClick={this.handleClick}>Sign Up</button>
                    </div>
                </div>;
            </div>;
        return (
            <div className='sign-form-wrap'>
                {this.state.singInForm ? signInForm : signUpForm}
            </div>
        );
    }
}

export default SignIn;