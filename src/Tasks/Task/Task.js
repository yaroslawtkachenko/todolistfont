import React, { Component } from 'react';
import EditTask from "../../Edit/Modal/EditTask/EditTask";
import './Task.css';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown, faPencilAlt, faTrash} from '@fortawesome/fontawesome-free-solid';

const propTypes = {
    task: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    upTask: PropTypes.func.isRequired,
    downTask: PropTypes.func.isRequired,
    statusTask: PropTypes.func.isRequired
};

class Task extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShowingModal: false
        }
    }

    handleDelClick = () => {
        this.props.deleteTask(this.props.task.id)
    };

    handleEditClick = () => {
        this.setState({isShowingModal:true});
    };

    handleCloseModal = () => {
        this.setState({isShowingModal: false});
    };

    handleTaskUp = () => {
        this.props.upTask(this.props.task.id,this.props.listId);
    };

    handleTaskDown = () => {
        this.props.downTask(this.props.task.id,this.props.listId);
    };

    handleTaskStatus = () => {
        this.props.statusTask(this.props.task.id);
    };

    render() {
        return (
        <div className='task-main-window'>
            <div className='task-body'>
                <div className='check-task'>
                    <input type = 'checkbox' checked={this.props.task.is_done} onChange={this.handleTaskStatus} />
                </div>
                {this.props.task.is_done
                ? <div className='task-name'>
                        <span id='donetask'>{this.props.task.content}</span>
                    </div>
                : <div className='task-name'>
                        <span>{this.props.task.content}</span>
                    </div>}
                <div className='task-tools'>
                    <div className='task-up-down-btn'>
                        <FontAwesomeIcon className='up-btn' onClick={this.handleTaskUp} icon={faCaretUp} size = '1x'/>
                        <FontAwesomeIcon className='down-btn' onClick={this.handleTaskDown} icon={faCaretDown} size = '1x'/>
                    </div>
                    <div className='task-ed-del-btn'>
                        <FontAwesomeIcon className='edit-btn' onClick={this.handleEditClick} icon={faPencilAlt} size = '1x'/>
                        <FontAwesomeIcon className='del-btn' onClick={this.handleDelClick} icon={faTrash} size = '1x'/>
                    </div>
                </div>
            </div>
            {this.state.isShowingModal &&
            <EditTask listId={this.props.listId}
                      taskId = {this.props.task.id}
                      taskName = {this.props.task.content}
                      closeModal = {this.handleCloseModal}
                      updateTask = {this.props.updateTask}
            />}
        </div>
        );
    }

}

Task.propTypes = propTypes;

export default Task;