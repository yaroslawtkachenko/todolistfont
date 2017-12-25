import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import ReactDOM from 'react-dom';
import './forindex.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import combineReducers from './redux/reducers/combineReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import Tasks from "./Tasks/Tasks";
import List from "./Lists/List/List";
import EditForm from "./Edit/EditForm";
import Lists from "./Lists/Lists";
import Window from "./Window/Window";
import SignIn from "./Registration/SignIn";
import Menu from "./Menu/Menu";

function playlist(state = []) {
    return state;
}

const store = createStore(playlist, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                    <App/>
            </BrowserRouter>
        </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
