var React = require("react");
var Eachresult = require("./Eachresult");
var Results = React.createClass({
	render: function(){

		return (
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title">Results</h3>
				</div>

				<div className="panel-body">
						<Eachresult />
				</div>
			</div>

			);
	}
});
module.exports = Results;
