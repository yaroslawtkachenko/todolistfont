import React, { Component } from 'react';
import './List.css';
import {deleteList} from "../../actions/listActions";
import Tasks from "../../Tasks/Tasks";
import EditList from "../../Edit/Modal/EditList/EditList";
import FontAwesome from 'react-fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCalendarAlt, faTrash} from '@fortawesome/fontawesome-free-solid';


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
                        <FontAwesomeIcon icon={faCalendarAlt} size = '2x'/>
                    </div>
                    <div className='list-name'>
                        <span>{this.props.list.label}</span>
                    </div>
                    <div className='list-tools'>
                        <FontAwesomeIcon onClick={this.handleEditClick} icon={faPencilAlt} size = '2x'/>
                        |
                        <FontAwesomeIcon onClick={this.handleDelClick} icon={faTrash} size = '2x'/>
                    </div>
                </div>
                <div className='list-tasks-windows'>
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