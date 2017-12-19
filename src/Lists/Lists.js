import React, { Component } from 'react';
import './Lists.css';
import {getLists, updateList} from "../actions/listActions";
import Modal from 'react-modal';
import EditForm from "../Edit/EditForm";
import List from "./List/List";
import {createList} from "../actions/listActions";

class Lists extends Component {
    constructor(props){
        super(props);
        this.state = {
            lists: [],
            isShowingModal: false
        };
    }

    componentWillMount(){
       getLists()
           .then(response => this.setState({lists: response}))
    }

    onListDelete = (response) => {
        this.setState({lists: this.state.lists.filter(list => list.id !== response.id)
        });
    };

    addNewList = (listName) => {
        createList(listName)
            .then(responce => {
                this.setState({lists: [...this.state.lists, responce]})
            }
            );
    };

    handleUpdateList = (listId,listName) => {
        updateList(listId, listName)
            .then(response =>
                this.setState(
                    {lists: this.state.lists.map(list =>
                        list.id === response.id ? response : list)}
                    )
            );
    };

    render(){
        return(
          <div className='lists'>
              <EditForm addList={this.addNewList}/>
              {this.state.lists.map(list =>
                  <List
                      key={list.id}
                      list = {list}
                      onListDelete = {this.onListDelete}
                      onUpdateList = {this.handleUpdateList}
                  />
              )}
          </div>
        );
    }
}

export default Lists;