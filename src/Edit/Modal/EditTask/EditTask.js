import './EditTask.css';
import React, { Component } from 'react';
import Modal from 'react-modal';
import EditTaskContent from "./EditTaskContent";

class EditTask extends Component {

    render() {
        return (
            <div>
                <Modal
                    isOpen={true}
                    contentLabel='Edit'
                    className='modal-task'>
                    <EditTaskContent
                        listId = {this.props.listId}
                        taskId = {this.props.taskId}
                        taskName = {this.props.taskName}
                        onRequestClose = {this.props.closeModal}
                        updateTask = {this.props.updateTask}
                    />
                </Modal>
            </div>
        );
    }
}

export default EditTask;