import React, { Component } from 'react';
import { connect } from 'react-redux';
import Window from "../Window/Window";
import './App.scss'
import { Route, withRouter } from 'react-router-dom';
import SignIn from "../Registration/SignIn";
import SignUp from "../Registration/SignUp";
import PropTypes from 'prop-types';
import {validateToken} from "../redux/actions/userActions";
import Authorize from '../redux/actions/Authorize';

const propTypes = {
    isSignedIn: PropTypes.bool.isRequired
};

class App extends Component {

    componentWillMount () {
        this.props.validateToken();
    }

  render() {
    return (
      <div className="App">
          <Route path="/sign_in" component={SignIn}/>
          <Route path="/sign_up" component={SignUp}/>
          <Authorize path='/' component={Window}/>
      </div>
    );
  }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
    return {
        isSignedIn: state.user.isSignedIn,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        validateToken: () => dispatch(validateToken())
    };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
