var React = require("react");

var Results = require("./Results");
var Saved = require("./Saved");
var Search = require("./Search");
var helpers = require("./utilities/helpers.js");

class Parent extends React.Component{
	constructor(){
		super();
		this.state = {
			term: "",
			beginDate: 0,
			endDate: 0
		}
		this.setTheState = this.setTheState.bind(this);
	}
	setTheState(term, beginDate, endDate) {
		this.setState({
			term: term,
			beginDate: beginDate,
			endDate: endDate
		});
	}
componentDidUpdate(prevProps, prevState){
	helpers.search(this.state.term, this.state.beginDate, this.state.endDate)
}

	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1 className="text-center"> The New York Times </h1>
					<h2 className="text-center">Recent headlines</h2>
				</div>

				<Search setTerm ={this.setTheState} />

				<Results />

				<Saved />

			</div>
			);

	} //end of render function

} // end of react class

module.exports =Parent;
