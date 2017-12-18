import React, { Component } from 'react';
import Task from "./Task/Task";
import {getTasks, createTask, upTask, downTask} from "../actions/taskActions";

class Tasks extends Component{
    constructor(props){
        super(props);
        this.state = {tasks: []}

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
        this.setState({tasks: this.state.tasks.filter(task => task.id !== response.id)
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

    render() {
        return (
            <div className='task-main-window'>
                <div className = 'tasks-new-task'>
                    <input id='addBtn' type = 'image' src='http://s1.iconbird.com/ico/2013/6/355/w128h1281372334739plus.png'/>
                    <input id='namefield' type = 'name' ref='taskName'/>
                    <button onClick={this.taskCreateClick}>Add Tasks</button>
                </div>
                <div className='task-body'>
                    {this.state.tasks.map(task =>
                        <Task
                            key={task.id}
                            task={task}
                            taskCreate={this.taskCreateClick}
                            onDeleteTask = {this.onTaskDelete}
                            taskUp = {this.handleTaskUp}
                            taskDown = {this.handleTaskDown}
                            listId = {this.props.listId}
                            />
                    )}
                </div>
            </div>
        );
    }
}

export default Tasks;