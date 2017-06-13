var React = require("react");

var Search = React.createClass({
	getInitialState: function(){
		return{
			term:"",
			beginDate: 0,
			endDate: 0
		}
	},
	getValues: function(event){
		switch (event.target.id) {
			case "term":
						this.setState({term:event.target.value});
				break;
			case "beginDate":
						this.setState({beginDate:event.target.value});
					break;
			case "endDate":
					this.setState({endDate:event.target.value});
				break;
		}
	},
	sendTerms: function(){
		console.log("The values of the form:");
		console.log(this.state.term, this.state.beginDate, this.state.endDate);
		this.props.setTerm(this.state.term, this.state.beginDate, this.state.endDate);
	},

	render: function(){
		return (

        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Search</h3>
          </div>

          <div className="panel-body">
            <form>

							<div className="form-group">
                <input type="text" className="form-control" id="term" value={this.state.term} onChange={this.getValues} placeholder="" />

                <input type="text" className="form-control" id="beginDate" value = {this.state.beginDate} onChange={this.getValues} placeholder="" />

                <input type="text" className="form-control" id="endDate" value = {this.state.endDate} onChange={this.getValues} placeholder="" />

                <button type="button" className="btn btn-primary" onClick ={this.sendTerms}>SEARCH</button>

						</div>
            </form>
          </div>

        </div>


			);
	}
});
module.exports = Search;
