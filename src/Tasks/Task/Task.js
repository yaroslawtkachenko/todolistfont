import React, { Component } from 'react';
import {deleteTask, downTask, statusTask, upTask} from "../../actions/taskActions";
import EditTask from "../../Edit/Modal/EditTask/EditTask";
import './Task.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown, faPencilAlt, faTrash} from '@fortawesome/fontawesome-free-solid';

class Task extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShowingModal: false,
            isDone: this.props.task.is_done,
            isLast: this.props.task.position.last
        }
    }

    handleDelClick = () => {
        deleteTask(this.props.task.id)
            .then((response) => {
                this.props.onDeleteTask(response)
            });
    };

    handleEditClick = () => {
        this.setState({isShowingModal:true});
    };

    handleCloseModal = () => {
        this.setState({isShowingModal: false});
    };

    handleTaskUp = () => {
        this.props.taskUp(this.props.task.id);
    };

    handleTaskDown = () => {
        this.props.taskDown(this.props.task.id);
    };

    handleTaskStatus = () => {
        statusTask(this.props.task.id)
            .then(response =>
            this.setState({isDone: response.is_done}))
    };

    render() {
        return (
        <div className='task-main-window'>
            <div className='task-body'>
                <div className='check-task'>
                    <input type = 'checkbox' onClick={this.handleTaskStatus}/>
                </div>
                {this.state.isDone
                ? <div className='task-name'>
                        <span id='donetask'>{this.props.task.content}</span>
                    </div>
                : <div className='task-name'>
                        <span>{this.props.task.content}</span>
                    </div>}
                <div className='task-tools'>
                    <FontAwesomeIcon onClick={this.handleTaskUp} icon={faCaretUp} size = '1x'/> |
                    <FontAwesomeIcon onClick={this.handleTaskDown} icon={faCaretDown} size = '1x'/> |
                    <FontAwesomeIcon onClick={this.handleEditClick} icon={faPencilAlt} size = '1x'/> |
                    <FontAwesomeIcon onClick={this.handleDelClick} icon={faTrash} size = '1x'/>
                </div>

            </div>
            {this.state.isShowingModal &&
            <EditTask listId={this.props.listId}
                      taskId = {this.props.task.id}
                      taskName = {this.props.task.content}
                      closeModal = {this.handleCloseModal}
                      onTaskUpdate = {this.props.onTaskUpdate}
            />}
        </div>
        );
    }
}

export default Task;