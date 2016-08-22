/*
 * @Author: Ian Hu
 * @Date:   2016-08-03 21:36:16
 * @Last Modified by:   Ian Hu
 * @Last Modified time: 2016-08-22 16:24:34
 */

'use strict';

import React from 'react';
import {connect} from 'react-redux';
import 'jquery'
import 'semantic-ui/dist/semantic.css'
import 'semantic-ui/dist/semantic.js'


function mapStateToProps(state) {
    return {};
}

export class Home extends React.Component {
    static propTypes = {
        title: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        var style = {
            paddingLeft: '0',
            paddingRight: '0'
        };
        return (
<div className="ui segment">
    <h2 className="ui center aligned icon header dash_header">
        <i className="map signs icon"></i>
        <div className="content">
            要吃啥
            <div className="sub header">解决你的选择困难症</div>
        </div>
    </h2>
    <div></div>
</div>
        );
    }
}

export default connect(
    mapStateToProps,
    // Implement map dispatch to props
)(Home)

