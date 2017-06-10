var React = require("react");
var Eachsaved = require("./Eachsaved");
var Saved = React.createClass({
	render: function(){
		return (
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title">Saved articles</h3>
				</div>

				<div className="panel-body">

					<Eachsaved />
				</div>
		</div>
			);
	}
});
module.exports = Saved;
