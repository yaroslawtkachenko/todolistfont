import './EditList.css';
import React, { Component } from 'react';
import Modal from 'react-modal';
import EditListContent from "./EditListContent";

class EditList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Modal
                isOpen={true}
                contentLabel='Edit'>
                    <EditListContent  onUpdateList = {this.props.onUpdateList} listId = {this.props.listId} onRequestClose = {this.props.closeModal}/>
                </Modal>
            </div>
        );
    }
}

export default EditList;