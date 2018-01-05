import React, { Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {signOut} from "./userActions";

class Authorize extends Component {

    render() {
        const { component: Component, isSignedIn,pending,...rest } = this.props;
        return (
            <Route {...rest} render={
                props => {
                    const loading = <div>Loading...</div>;
                return (
                    pending
                    ? loading :
                    isSignedIn
                        ? <Component {...props} signOut={this.props.signOut}/>
                        : <Redirect to='/sign_in'/>
                );
            }
            }/>
        );
    }
}

function mapStateToProps (state) {
    return {
        isSignedIn: state.user.isSignedIn,
        pending: state.user.pending
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(signOut())
    };
}

export default (connect(mapStateToProps,mapDispatchToProps)(Authorize));