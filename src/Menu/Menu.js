import React, { Component } from 'react';
import './Menu.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/fontawesome-free-solid';

//const url = 'https://api-ornull-list.herokuapp.com/sign_in';

class Menu extends Component {

    handleClick = () => {
        this.props.signOut();
    };

    render() {
        return (
            <div className='menu-main-windowyy'>
                <div className="menu-name">
                    <span>Todo List</span>
                </div>
                <div className="nav1bar">
                    {/*<FontAwesomeIcon icon={faSignInAlt} size = '1x'/>*/}
                    {/*<a href="http://localhost:3001/sign_in">*/}
                        {/*<strong onClick={this.handleClick}>Sign In</strong>*/}
                    {/*</a>*/}
                    <FontAwesomeIcon icon={faSignOutAlt} size = '1x'/>
                    <span className='menu-sing-out' onClick={this.handleClick}>
                        <strong >Sign Out</strong>
                    </span>
                </div>
            </div>
        );
    }
}

export default Menu;