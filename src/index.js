import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducers from './redux/reducers/combineReducers';
import { Provider } from 'react-redux';
import SignIn from "./Registration/SignIn";

const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                    <SignIn/>
            </BrowserRouter>
        </Provider>,
    document.getElementById('root')
);
