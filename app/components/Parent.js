var React = require("react");

var Results = require("./Results");
var Saved = require("./Saved");

var Parent = React.createClass({
	getInitialState: function(){
		return{
			value: "noting yet"
		};
	},

	render: function(){
		return (
			<div className="container">
				<div className="jumbotron">
					<h1> The new york Times </h1>
				</div>
			</div>
			);

	} //end of render function

}); // end of react class

module.exports =Parent;