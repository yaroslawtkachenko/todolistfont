import React, { Component } from 'react';
import './List.css';
import {deleteList} from "../../actions/listActions";
import Tasks from "../../Tasks/Tasks";
import EditList from "../../Edit/Modal/EditList/EditList";
import {updateTask} from "../../actions/taskActions";

class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShowingModal: false
        }
    }

    handleDelClick = () => {
        deleteList(this.props.list.id)
            .then((response) => {
                this.props.onListDelete(response)
            });
    };

    handleEditClick = () => {
        this.setState({isShowingModal:true});
    };

    handleCloseModal = () => {
        this.setState({isShowingModal: false});
    };

    render() {
        return (
            <div className='list-main-window'>
                <div className='list-header'>
                    <div className='list-label'>
                        <img id='edit' src='http://s1.iconbird.com/ico/2013/9/452/w512h5121380476717calendar.png'/>
                        <span>{this.props.list.label}</span>
                    </div>
                    <div className='list-tools'>
                        <input onClick={this.handleEditClick} id='deleteBtn' type='image' src='http://ru.seaicons.com/wp-content/uploads/2015/11/Editing-Edit-icon.png'/>
                        <input onClick={this.handleDelClick} id='deleteBtn' type='image' src='http://s1.iconbird.com/ico/2013/9/452/w448h5121380477116trash.png'/>
                    </div>
                </div>
                <div className='list-tasks-window'>
                    <Tasks
                        listId = {this.props.list.id}
                    />
                </div>
                {this.state.isShowingModal && <EditList onUpdateList = {this.props.onUpdateList} listId = {this.props.list.id} closeModal = {this.handleCloseModal}/>}
            </div>
        );
    }
}

export default List;