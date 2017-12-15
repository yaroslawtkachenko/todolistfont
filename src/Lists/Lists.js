import React, { Component } from 'react';
import './Lists.css';
import {deleteList, getLists} from "../actions/listActions";
import EditForm from "../Edit/EditForm";
import List from "./List/List";
import {createList} from "../actions/listActions";
import _ from 'lodash';

class Lists extends Component {
    constructor(props){
        super(props);
        this.state = {lists: []}
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

    render(){
        return(
          <div className='lists'>
              <EditForm addList={this.addNewList}/>
              {this.state.lists.map(list =>
                  <List
                      key={list.id}
                      list = {list}
                      onListDelete = {this.onListDelete}
                  />
              )}
          </div>
        );
    }
}

export default Lists;