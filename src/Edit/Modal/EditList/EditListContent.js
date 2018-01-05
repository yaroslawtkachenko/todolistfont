import React, { Component } from 'react';

class EditListContent extends Component {

    handleUpdateList = () => {
        this.props.updateList(this.props.listId,this.refs.newName.value );
    };

    render() {
        return (
            <div className='modal-content'>
                <div className='modal-name'>
                    <input type='name' placeholder='Edit list name...' autoFocus={true} ref='newName'/>
                </div>
                <div className='modal-button'>
                    <button onClick={this.handleUpdateList} >Submite</button>
                    <button onClick={this.props.onRequestClose} >Close</button>
                </div>
            </div>
        );
    }
}

export default EditListContent;