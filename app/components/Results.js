var React = require("react");
var Eachresult = require("./Eachresult");

class Results extends React.Component{
	constructor(){
		super();
		this.displayResults = this.displayResults.bind(this);
	}

	displayResults(results){
		console.log(results);
		return results.map((arrayCell, index) => {
			return (<li key={index}> {arrayCell.headline.main.toString()}
				 <button>Save </button> </li>)
		});
	}
	render() {
		return (
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title">Results</h3>
				</div>

				<div className="panel-body">
						<ul>{this.displayResults(this.props.results)}</ul>
				</div>
			</div>
			);
		}
};
module.exports = Results;
