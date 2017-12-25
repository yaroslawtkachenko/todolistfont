import './Window.css';
import React, { Component } from 'react';
import Lists from "../Lists/Lists";
import Menu from "../Menu/Menu";

class Window extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
                <div className='window' >
                    <Menu/>
                    <Lists/>
                </div>
        );
    }
}

export default Window;
