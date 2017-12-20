import React, { Component } from 'react';
import Task from "./Task/Task";
import {getTasks, createTask, upTask, downTask, updateTask} from "../actions/taskActions";
import './Tasks.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid';

class Tasks extends Component{
    constructor(props){
        super(props);
        this.state = {tasks: []};
    }

    componentWillMount() {
        getTasks(this.props.listId)
            .then(response => this.setState({tasks: response}))
    }

    taskCreateClick = () => {
        createTask(this.refs.taskName.value,this.props.listId)
            .then((response) => {
                this.setState({tasks: [...this.state.tasks, response]})
            })
    };

    onTaskDelete = (response) => {
        this.setState({tasks: this.state.tasks.filter(task =>
            task.id !== response.id)
        });
    };

    handleTaskUp = (taskId) => {
        upTask(taskId)
            .then((response) => {
                this.setState({tasks: response})
            });
    };

    handleTaskDown = (taskId) => {
        downTask(taskId)
            .then((response) => {
                this.setState({tasks: response})
            });
    };

    onTaskUpdate = (taskId,taskName,listId) => {
        updateTask(taskId,taskName,listId)
            .then(response =>
                this.setState(
                    {tasks: this.state.tasks.map(task =>
                        task.id === response.id ? response : task)}
                )
            );
    };

    render() {
        return (
            <div className='tasks-main-window'>
                <div className = 'tasks-new-task'>
                    <FontAwesomeIcon icon={faPlus} size = '2x' color='greenyellow'/>
                    <input id='namefield' type = 'name' ref='taskName'/>
                    <button onClick={this.taskCreateClick}>Add Tasks</button>
                </div>
                <div className='tasks-task'>
                    {this.state.tasks.map(task =>
                        <Task
                            key={task.id}
                            task={task}
                            listId = {this.props.listId}
                            taskCreate={this.taskCreateClick}
                            onDeleteTask = {this.onTaskDelete}
                            taskUp = {this.handleTaskUp}
                            taskDown = {this.handleTaskDown}
                            onTaskUpdate = {this.onTaskUpdate}
                            />
                    )}
                </div>
            </div>
        );
    }
}

export default Tasks;