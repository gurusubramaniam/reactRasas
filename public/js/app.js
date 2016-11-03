import React from 'react';
import ReactDOM from 'react-dom';

var Comment = React.createClass({
	render: function(){
		return (<p>SampleTest page </p>);
	}
});

ReactDOM.render(<Comment />, document.getElementById('reactComp'));
