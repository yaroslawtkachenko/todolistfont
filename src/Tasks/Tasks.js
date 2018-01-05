import React, { Component } from 'react';
import Task from "./Task/Task";
import './Tasks.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid';
import {createTask, getTasks, deleteTask, updateTask, statusTask, upTask,downTask} from "../redux/actions/taskActions";

const propTypes = {
    tasks: PropTypes.array.isRequired,
    listId: PropTypes.number.isRequired,
    createTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    getTasks: PropTypes.func.isRequired,
    statusTask: PropTypes.func.isRequired,
    upTask: PropTypes.func.isRequired,
    downTask: PropTypes.func.isRequired
};

class Tasks extends Component{

    componentWillMount() {
        this.props.getTasks(this.props.listId)
    }

    taskCreateClick = () => {
        this.props.createTask(this.props.listId, this.refs.taskName.value)
            .then(
                this.refs.taskName.value = ''
            )
    };

    render() {
        return (
            <div className='tasks-main-window'>
                <div className = 'tasks-new-task'>
                    <div className='tasks-label'>
                        <FontAwesomeIcon icon={faPlus} size = '2x' color='darkgreen'/>
                    </div>
                    <div className='tasks-name'>
                        <input id='namefield' type = 'name' placeholder='Start typing here to create a task...' ref='taskName'/>
                    </div>
                    <div className='tasks-create'>
                        <button className='add-task-btn'
                            onClick={this.taskCreateClick} >
                            Add Tasks
                        </button>
                    </div>
                </div>
                <div className='tasks-task'>
                    {this.props.tasks.filter(task => task.list_id === this.props.listId).map((task) =>
                        <Task
                            key={task.id}
                            task={task}
                            listId = {this.props.listId}
                            deleteTask = {this.props.deleteTask}
                            upTask = {this.props.upTask}
                            downTask = {this.props.downTask}
                            updateTask = {this.props.updateTask}
                            statusTask = {this.props.statusTask}
                            />
                    )}
                </div>
            </div>
        );
    }
}

Tasks.propTypes = propTypes;

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getTasks: (listId) => dispatch(getTasks(listId)),
        createTask: (listId,data) => dispatch(createTask(listId,data)),
        deleteTask: (taskId) => dispatch(deleteTask(taskId)),
        updateTask: (taskId,data,listId) => dispatch(updateTask(taskId,data,listId)),
        statusTask: (taskId) => dispatch(statusTask(taskId)),
        upTask: (taskId,listId) => dispatch(upTask(taskId,listId)),
        downTask: (taskId,listId) => dispatch(downTask(taskId,listId))
    };
}

export default (connect(mapStateToProps,mapDispatchToProps)(Tasks));