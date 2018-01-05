import './Window.css';
import React, { Component } from 'react';
import Lists from "../Lists/Lists";
import Menu from "../Menu/Menu";

class Window extends Component {

    render() {
        return (
                <div className='window' >
                    <Menu signOut={this.props.signOut}/>
                    <Lists/>
                </div>
        );
    }
}


export default Window;
