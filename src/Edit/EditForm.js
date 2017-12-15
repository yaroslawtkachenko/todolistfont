import React, { Component } from 'react';
import './EditForm.css';
import List from "../Lists/List/List";
import {createList} from "../actions/listActions";

class EditForm extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.addList(this.refs.inputListName.value);
    };

    render() {
        return (
            <div className='edit-main'>
                <div className='edit-label'>
                    <input type = 'text' placeholder='Enter list name' ref='inputListName'/>
                </div>
                <div className='edit-confirm'>
                    <button onClick={this.handleClick}>
                        Add List
                    </button>
                </div>
            </div>
        );
    }
}

export default EditForm;