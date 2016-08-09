/*
* @Author: Ian Hu
* @Date:   2016-08-03 22:04:06
* @Last Modified by:   Ian Hu
* @Last Modified time: 2016-08-03 22:06:01
*/

'use strict';

import React from 'react';
import './Page.less';

export default class Page extends React.Component {
    render() {
        const {title, subTitle, spacing, className, children} = this.props;

        return (
            <section className={`page ${className}`}>
                <div className="hd">
                    <h1 className="title">{title}</h1>
                    <p className="sub_title">{subTitle}</p>
                </div>
                <div className={`bd ${spacing ? 'spacing' : ''}`}>
                    {children}
                </div>
            </section>
        );
    }
};