/*
 * @Author: Ian Hu
 * @Date:   2016-08-03 21:36:16
 * @Last Modified by:   Ian Hu
 * @Last Modified time: 2016-08-03 23:37:49
 */

'use strict';

import React from 'react';
import {connect} from 'react-redux';
import '../../../lib/bootstrap'
import {Jumbotron, Button} from 'react-bootstrap'

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

        return (
            <Jumbotron>
                <h1>要吃啥</h1>
                <p>每天要吃啥不再是你头疼的问题</p>
                <p><a href="#">马上解决</a></p>
            </Jumbotron>
        );
    }
}

export default connect(
    mapStateToProps,
    // Implement map dispatch to props
)(Home)

