import './EditListContent.css';
import React, { Component } from 'react';
import {updateList} from "../../../actions/listActions";

class EditListContent extends Component {
    constructor(props) {
        super(props);
    }

    handleUpdateList = () => {
        this.props.onUpdateList(this.props.listId,this.refs.newName.value );
    };

    render() {
        return (
            <div className='modal-content'>
                <input type='name' ref='newName'/>
                <button onClick={this.props.onRequestClose} >Close</button>
                <button onClick={this.handleUpdateList} >Submite</button>
            </div>
        );
    }
}

export default EditListContent;