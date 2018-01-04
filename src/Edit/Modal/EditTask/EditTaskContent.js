import './EditTaskContent.css';
import React, { Component } from 'react';

class EditTaskContent extends Component {
    constructor(props) {
        super(props);
    }

    handleUpdateTask = () => {
        this.props.updateTask(this.props.taskId,this.refs.newName.value,this.props.listId);
    };

    render() {
        return (
            <div className='modal-content'>
                <div className='modal-name'>
                    <input type='name' ref='newName' autoFocus={true} placeholder='Edit task...'/>
                </div>
                <div className='modal-button'>
                    <button onClick={this.handleUpdateTask}>Submite</button>
                    <button onClick={this.props.onRequestClose} >Close</button>
                </div>
            </div>
        );
    }
}

export default EditTaskContent;