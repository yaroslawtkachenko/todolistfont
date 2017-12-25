import './EditTaskContent.css';
import React, { Component } from 'react';
import {updateTask} from "../../../actions/taskActions";

class EditTaskContent extends Component {
    constructor(props) {
        super(props);
    }

    handleUpdateTask = () => {
        this.props.onTaskUpdate(this.props.taskId,this.refs.newName.value,this.props.listId);
    };

    render() {
        return (
            <div className='modal-content'>
                <input type='name' ref='newName' placeholder='Edit task...'/>
                <button onClick={this.handleUpdateTask}>Submite</button>
                <button onClick={this.props.onRequestClose} >Close</button>
            </div>
        );
    }
}

export default EditTaskContent;