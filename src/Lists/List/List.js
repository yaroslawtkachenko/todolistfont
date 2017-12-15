import React, { Component } from 'react';
import './List.css';
import {deleteList} from "../../actions/listActions";
import Tasks from "../../Tasks/Tasks";
import {createTask} from "../../actions/taskActions";

class List extends Component{
    constructor(props){
        super(props);
        this.state = {tasks: []}
    }

    handleDelClick = () => {
        deleteList(this.props.list.id)
            .then((response) => {
                this.props.onListDelete(response)
            });
    };

    handleUpdateClick = () => {

    };

    taskCreateClick = () => {
      createTask(this.refs.taskName.value,this.props.list.id)
          .then((response) => {
            this.setState({tasks: [...this.state.tasks, response]})
          })
    };

    render() {
        return (
            <div className='list-main-window'>
                <div className='list-header'>
                    <img id='edit' src='http://s1.iconbird.com/ico/2013/9/452/w512h5121380476717calendar.png'/>
                    <span>{this.props.list.label}</span>
                    <input onClick={this.handleDelClick} id='deleteBtn' type='image' src='http://s1.iconbird.com/ico/2013/9/452/w448h5121380477116trash.png'/>
                </div>
                <div className = 'list-new-task'>
                    <input id='addBtn' type = 'image' src='http://s1.iconbird.com/ico/2013/6/355/w128h1281372334739plus.png'/>
                    <input id='namefield' type = 'name' ref='taskName'/>
                    <button onClick={this.taskCreateClick}>Add Tasks</button>
                </div>
                <div className='list-tasks-window'>
                    {this.state.tasks.map(task =>
                        <Tasks
                            key={task.id}
                            task={task}
                            taskCreate={this.taskCreateClick}/>
                    )};

                </div>
            </div>
        );
    }
}

export default List;