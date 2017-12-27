import React, { Component } from 'react';
import './Lists.css';
import EditForm from "../Edit/EditForm";
import { connect } from 'react-redux';
import List from "./List/List";
import PropTypes from 'prop-types';
import {createList, getLists, updateList, deleteList} from "../redux/actions/listActions";

const propTypes = {
    lists: PropTypes.array.isRequired,
    getLists: PropTypes.func.isRequired,
    createList: PropTypes.func.isRequired,
    updateList: PropTypes.func.isRequired,
    deleteList: PropTypes.func.isRequired
};

class Lists extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShowingModal: false
        };
    }

    componentWillMount(){
       this.props.getLists();
    }

    addNewList = (listName) => {
        this.props.createList(listName);
    };

    render(){
        return(
          <div className='necontainer'>
                  <EditForm addList={this.addNewList}/>
                  {this.props.lists.map(list =>
                      <List
                          key={list.id}
                          list = {list}
                          deleteList = {this.props.deleteList}
                          updateList = {this.props.updateList}
                      />
                  )}
          </div>
        );
    }
}

Lists.propTypes = propTypes;

function mapStateToProps (state) {
    return {
        lists: state.lists
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getLists: () => dispatch(getLists()),
        createList: (listName) => dispatch(createList(listName)),
        updateList: (listId,listName) => dispatch(updateList(listId,listName)),
        deleteList: (listId) => dispatch(deleteList(listId))
    }
}

export default (connect(mapStateToProps,mapDispatchToProps)(Lists));