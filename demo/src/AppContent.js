/* autogenerated by gulpfile.js */
exports.content = "/** @jsx React.DOM */\n'use strict';\nvar React = require('react');\nvar BS = require('react-bootstrap');\nvar moment = require('moment');\nvar DateRangePicker = require('../../lib/index.js');\nvar Header = require('./Header');\nvar fileContent = require('./AppContent').content;\n\nvar App = React.createClass({\n\tgetInitialState: function () {\n\t\treturn {\n\t\t\tranges: {\n\t\t\t\t'Today': [moment(), moment()],\n\t\t\t\t'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],\n\t\t\t\t'Last 7 Days': [moment().subtract(6, 'days'), moment()],\n\t\t\t\t'Last 30 Days': [moment().subtract(29, 'days'), moment()],\n\t\t\t\t'This Month': [moment().startOf('month'), moment().endOf('month')],\n\t\t\t\t'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]\n\t\t\t},\n\t\t\tstartDate: moment().subtract(29, 'days'),\n\t\t\tendDate: moment()\n\t\t};\n\t},\n\thandleEvent: function (event, picker) {\n\t\tthis.setState({\n\t\t\tstartDate: picker.startDate,\n\t\t\tendDate: picker.endDate\n\t\t});\n\t},\n\trender: function () {\n\t\tvar start = this.state.startDate.format('YYYY-MM-DD');\n\t\tvar end = this.state.endDate.format('YYYY-MM-DD');\n\t\tvar label = start + ' - ' + end;\n\t\tif (start === end) {\n\t\t\tlabel = start;\n\t\t}\n\t\treturn (\n\t\t\t<BS.Grid>\n\t\t\t\t<Header />\n\t\t\t\t<BS.Row>\n\t\t\t\t\t<BS.Col md={3}>\n\t\t\t\t\t\t<h2>Demo:</h2>\n\t\t\t\t\t\t<DateRangePicker startDate={this.state.startDate} endDate={this.state.endDate} ranges={this.state.ranges} onEvent={this.handleEvent}>\n\t\t\t\t\t\t\t<BS.Button className=\"selected-date-range-btn\" style={{width:'100%'}}>\n\t\t\t\t\t\t\t\t<div className=\"pull-left\"><BS.Glyphicon glyph=\"calendar\" /></div>\n\t\t\t\t\t\t\t\t<div className=\"pull-right\">\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t{label}\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span className=\"caret\"></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</BS.Button>\n\t\t\t\t\t\t</DateRangePicker>\n\t\t\t\t\t</BS.Col>\n\t\t\t\t\t<BS.Col md={9}>\n\t\t\t\t\t\t<h2>Demo Source Code:</h2>\n\t\t\t\t\t\t<textarea className=\"form-control\" style={{width:'100%',height:'500px'}} readOnly value={fileContent} />\n\t\t\t\t\t</BS.Col>\n\t\t\t\t</BS.Row>\n\t\t\t</BS.Grid>\n\t\t);\n\t}\n});\n\n// init our demo app\nReact.render(<App />, document.getElementById('app'));\n\n// we are using browserify. setup the browser.\nexports.React = window.React = React;\n";