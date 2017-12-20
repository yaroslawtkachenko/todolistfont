import './Window';
import React, { Component } from 'react';
import SignIn from '../Registration/SignIn';
import Lists from "../Lists/Lists";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faSignInAlt} from '@fortawesome/fontawesome-free-solid';

class Window extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <Navbar color="black" light expand="md">
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">
                                        <strong><FontAwesomeIcon onClick={this.handleTaskUp} icon={faSignInAlt} size = '1x'/> Sign In</strong>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">
                                        <strong><FontAwesomeIcon onClick={this.handleTaskUp} icon={faSignOutAlt} size = '1x'/> Sign Out</strong>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                    </Navbar>
                </div>
                <Lists/>
            </div>
        );
    }
}

export default Window;
