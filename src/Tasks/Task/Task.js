import React, { Component } from 'react';
import {deleteTask, downTask, statusTask, upTask} from "../../actions/taskActions";
import EditTask from "../../Edit/Modal/EditTask/EditTask";
import './Task.css';

class Task extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShowingModal: false,
            isDone: this.props.task.is_done
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
        const notdone = <div className='task-main-window'>
            <div className='task-body'>
                <input type = 'checkbox' onClick={this.handleTaskStatus}  />
                <span>{this.props.task.content}</span>
                <input onClick={this.handleTaskUp} id='deleteBtn' type='image' src='https://png.icons8.com/metro/540/collapse-arrow.png'/>
                <input onClick={this.handleTaskDown} id='deleteBtn' type='image' src='https://png.icons8.com/metro/540/expand-arrow.png'/>
                <input onClick={this.handleEditClick} id='deleteBtn' type='image' src='http://ru.seaicons.com/wp-content/uploads/2015/11/Editing-Edit-icon.png'/>
                <input onClick={this.handleDelClick} id='deleteBtn' type='image' src='http://s1.iconbird.com/ico/2013/9/452/w448h5121380477116trash.png'/>
            </div>
            {this.state.isShowingModal &&
            <EditTask listId={this.props.listId}
                      taskId = {this.props.task.id}
                      closeModal = {this.handleCloseModal}
                      onTaskUpdate = {this.props.onTaskUpdate}
            />}
        </div>;
        const done = <div className='task-main-window'>
            <div className='task-body'>
                <input type = 'checkbox' onClick={this.handleTaskStatus}/>
                <span id='donetask'>{this.props.task.content}</span>
                <input onClick={this.handleTaskUp} id='deleteBtn' type='image' src='https://png.icons8.com/metro/540/collapse-arrow.png'/>
                <input onClick={this.handleTaskDown} id='deleteBtn' type='image' src='https://png.icons8.com/metro/540/expand-arrow.png'/>
                <input onClick={this.handleEditClick} id='deleteBtn' type='image' src='http://ru.seaicons.com/wp-content/uploads/2015/11/Editing-Edit-icon.png'/>
                <input onClick={this.handleDelClick} id='deleteBtn' type='image' src='http://s1.iconbird.com/ico/2013/9/452/w448h5121380477116trash.png'/>
            </div>
            {this.state.isShowingModal &&
            <EditTask listId={this.props.listId}
                      taskId = {this.props.task.id}
                      closeModal = {this.handleCloseModal}
                      onTaskUpdate = {this.props.onTaskUpdate}
            />}
        </div>;
        if(this.state.isDone) {
            return done;
        }
        else {
            return notdone;
        }
    }
}

export default Task;