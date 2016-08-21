/*
* @Author: dmyang
* @Date:   2015-08-31 21:17:45
* @Last Modified by:   Ian Hu
* @Last Modified time: 2016-08-21 23:49:12
*/

'use strict';

console.info('require page c.');

import 'commonCss'
import '../scss/c.scss'

let $ = require('zepto')

// 直接使用npm模块
var _ = require('lodash');

var report = require('./helpers/report');
var bar = require('./helpers/bar');
var url = require('./utils/url');

console.log(_)
report($)
report(bar)
report(url)
