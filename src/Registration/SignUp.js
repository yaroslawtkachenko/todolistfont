import React, { Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import './SignUp.css';
import PropTypes from 'prop-types';
// import {signIn,signUp,signOut} from "../actions/userActions";

const propTypes = {
    isSignedIn: PropTypes.bool.isRequired,
    signUp: PropTypes.func.isRequired
};

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singInForm: true
        }
    }

    handleClick = () => {
        let email = this.refs.emailSU.value;
        let pass = this.refs.passwordSU.value;
        let confpass = this.refs.confPasswordSU.value;
        this.props.signUp(email,pass,confpass);
        this.refs.emailSU.value = '';
        this.refs.passwordSU.value = '';
        this.refs.confPasswordSU.value = '';
    };

    render() {
        const signUpForm =
            <div className='auth-main'>
                <div className='top-button'>
                    <p> Already has an account? <button onClick={this.goToSignIn}>Sign in</button></p>
                </div>
                <div className="sign-form">
                    <strong id='ttle' >Sign Up</strong>
                    <div className='signU-email'>
                        <input id='sUeml' type='email' placeholder='Email' ref='emailSU'/>
                    </div>
                    <div className='signU-pass'>
                        <input id='sUpass' type='password' placeholder='Password' ref='passwordSU'/>
                    </div>
                    <div className='signU-passconf'>
                        <input id='sUCpass' type='password' placeholder='Confirm password' ref='confPasswordSU'/>
                    </div>
                    <div className='signU-btn'>
                        <button onClick={this.handleClick}>Sign Up</button>
                    </div>
                </div>;
            </div>;
        return this.props.isSignedIn ? <Redirect to='/' /> : signUpForm;
    }
}

SignIn.propTypes = propTypes;

function mapStateToProps (state) {
    return {
        user: state.user.isSignedIn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        singUp: (email, password, confpass) => dispatch(signUp(email,password,confpass))
    };
}

export default (connect(mapStateToProps,mapDispatchToProps)(SignUp));