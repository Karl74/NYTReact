var React = require("react");

var Results = require("./Results");
var Saved = require("./Saved");
var Search = require("./Search");

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
					<h1 className="text-center"> The New York Times </h1>
					<h2 className="text-center">Recent headlines</h2>
				</div>

				<Search />

				<Results />

				<Saved />

			</div>
			);

	} //end of render function

}); // end of react class

module.exports =Parent;
