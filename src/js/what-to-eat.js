/*
* @Author: Ian Hu
* @Date:   2016-08-03 21:20:34
* @Last Modified by:   Ian Hu
* @Last Modified time: 2016-08-03 22:26:22
*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import Home from './components/what-to-eat/page/Home';

const dummyReducer = (state, action) => {return state;}

const store = createStore(dummyReducer);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        );
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('page-content'));