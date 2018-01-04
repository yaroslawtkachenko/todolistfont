import React, { Component } from 'react';
import './List.css';
import Tasks from "../../Tasks/Tasks";
import PropTypes from 'prop-types';
import EditList from "../../Edit/Modal/EditList/EditList";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCalendarAlt, faTrash} from '@fortawesome/fontawesome-free-solid';

const propTypes = {
    list: PropTypes.object.isRequired,
    updateList: PropTypes.func.isRequired,
    deleteList: PropTypes.func.isRequired
};

class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShowingModal: false
        }
    }

    handleDelClick = () => {
        this.props.deleteList(this.props.list.id);
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
                {this.state.isShowingModal &&
                <EditList
                    updateList = {this.props.updateList}
                    listId = {this.props.list.id}
                    closeModal = {this.handleCloseModal}
                />}
            </div>
        );
    }
}

List.propTypes = propTypes;

export default List;