/*
 * @Author: Ian Hu
 * @Date:   2016-08-03 21:36:16
 * @Last Modified by:   Ian Hu
 * @Last Modified time: 2016-08-10 09:00:37
 */

'use strict';

import React from 'react';
import {connect} from 'react-redux';
import '../../../lib/bootstrap'
import {Jumbotron, Button, Grid, Panel, Col} from 'react-bootstrap'

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
            <div>
                <Jumbotron style={{marginBottom: '4px'}}>
                    <div className="container">
                        <h1>要吃啥</h1>
                        <p>每天要吃啥不再是你头疼的问题</p>
                        <p><a href="#">马上解决</a></p>
                    </div>
                </Jumbotron>
                  <Grid bsClass="container-flow">
                    <Col md={4} sm={6}>
                      <Panel header="最常纠结">
                        lesadadas
                      </Panel>
                    </Col>
                    <Col md={4} sm={6}>
                      <Panel header="最常纠结">
                        lesadadas
                      </Panel>
                    </Col>
                  </Grid>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    // Implement map dispatch to props
)(Home)

