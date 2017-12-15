import React, { Component } from 'react';

class Tasks extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='task-main-window'>
                <div className='task-body'>
                    <span>{this.props.task.content}</span>
                </div>
            </div>
        );
    }
}

export default Tasks;