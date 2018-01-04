import React, { Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import './SignIn.css';
import PropTypes from 'prop-types';
import {signIn} from "../redux/actions/userActions";

const propTypes = {
    isSignedIn: PropTypes.bool.isRequired,
    signIn: PropTypes.func.isRequired
};

class SignIn extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        let email = this.refs.emailSI.value;
        let password = this.refs.passwordSI.value;
        this.props.signIn(email,password);
    };

    render() {
        const signInForm =
            <div className='auth-main'>
                <div className='top-button'>
                    <p>Don`t have an account? <Link to='/sign_up'>Sign up</Link></p>
                </div>
                <div className='sign-form'>
                    <strong id='ttle'>Sign In</strong>
                    <div className='sign-email'>
                        <input id='seml' type='email' placeholder='Email' ref='emailSI'/>
                    </div>
                    <div className='sign-pass'>
                        <input id='spass' type='password' placeholder='Password' ref='passwordSI'/>
                    </div>
                    <div className='sign-btn'>
                        <button onClick={this.handleClick}>Sign In</button>
                    </div>
                </div>
            </div>;
        return (
            this.props.isSignedIn ? <Redirect to='/'/> : signInForm
        );
    }
}

SignIn.propTypes = propTypes;

function mapStateToProps (state) {
    return {
        isSignedIn: state.user.isSignedIn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signIn: (email, password) => dispatch(signIn(email, password))
    };
}

export default (connect(mapStateToProps,mapDispatchToProps)(SignIn));