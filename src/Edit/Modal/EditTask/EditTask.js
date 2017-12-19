import './EditTask.css';
import React, { Component } from 'react';
import Modal from 'react-modal';
import EditTaskContent from "./EditTaskContent";

class EditTask extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={true}
                    contentLabel='Edit'>
                    <EditTaskContent
                        listId = {this.props.listId}
                        taskId = {this.props.taskId}
                        onRequestClose = {this.props.closeModal}
                        onTaskUpdate = {this.props.onTaskUpdate}
                    />
                </Modal>
            </div>
        );
    }
}

export default EditTask;