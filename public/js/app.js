import React from 'react';
import ReactDOM from 'react-dom';

var Comment = React.createClass({
	render: function(){
		return (<p>SampleTest page eee</p>);
	}
});

ReactDOM.render(<Comment />, document.getElementById('reactComp'));
