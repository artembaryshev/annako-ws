React = require('react');
ReactDOM = require('react-dom');
var Test = React.createClass({
	render: function() {
		return (
			<div>Test</div>
		);
	}
});
$(window).bind('annako.root.spaupdate', function () {
	if(document.querySelector('.js-client-component')){
		ReactDOM.render(<Test />, document.querySelector('.js-client-component'));
	}
});
module.exports = Test;