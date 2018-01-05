import './EditList.css';
import React, { Component } from 'react';
import Modal from 'react-modal';
import EditListContent from "./EditListContent";

class EditList extends Component {

    render() {
        return (
            <div>
                <Modal
                isOpen={true}
                contentLabel='Edit'
                className='modal-list'>
                    <EditListContent  updateList = {this.props.updateList} listId = {this.props.listId}  onRequestClose = {this.props.closeModal}/>
                </Modal>
            </div>
        );
    }
}

export default EditList;