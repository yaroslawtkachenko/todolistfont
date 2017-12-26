import React, { Component } from 'react';
import './Menu.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faSignInAlt} from '@fortawesome/fontawesome-free-solid';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='menu-main-windowyy'>
                <div className="menu-name">
                    <span>Todo List</span>
                </div>
                <div className="nav1bar">
                    <FontAwesomeIcon onClick={this.handleTaskUp} icon={faSignInAlt} size = '1x'/>
                    <a href="#">
                        <strong>Sign In</strong>
                    </a>
                    <FontAwesomeIcon onClick={this.handleTaskUp} icon={faSignOutAlt} size = '1x'/>
                    <a href="#">
                        <strong>Sign Out</strong>
                    </a>
                </div>
            </div>
        );
    }
}

export default Menu;