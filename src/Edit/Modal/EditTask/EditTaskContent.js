import './EditTaskContent.css';
import React, { Component } from 'react';

class EditTaskContent extends Component {

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
                    <button className='modal-sub-btn' onClick={this.handleUpdateTask}>Submite</button>
                    <button className='modal-sub-btn' onClick={this.props.onRequestClose} >Close</button>
                </div>
            </div>
        );
    }
}

export default EditTaskContent;