// import './EditListContent.css';
import React, { Component } from 'react';
import {updateList} from "../../../actions/listActions";

class EditListContent extends Component {
    constructor(props) {
        super(props);
    }

    handleUpdateList = () => {
        this.props.updateList(this.props.listId,this.refs.newName.value );
    };

    render() {
        return (
            <div className='modal-content'>
                <input type='name' placeholder='Edit list name...' ref='newName'/>
                <button onClick={this.handleUpdateList} >Submite</button>
                <button onClick={this.props.onRequestClose} >Close</button>
            </div>
        );
    }
}

export default EditListContent;