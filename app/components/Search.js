var React = require("react");

var Search = React.createClass({
	render: function(){
		return (

        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Search</h3>
          </div>


          <div className="panel-body">
            <form className="" action="" method="">
              <div className="form-group">

                <label for="exampleInputEmail1">Topic</label>
                <input type="" className="form-control" id="" placeholder="" />
              </div>


              <div className="form-group">
                <label for="exampleInputPassword1">Start Year</label>
                <input type="" className="form-control" id="" placeholder="" />
              </div>

              <div className="form-group">
                <label for="exampleInputPassword1">End Year</label>
                <input type="" className="form-control" id="" placeholder="" />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-">SEARCH</button>
              </div>
            </form>
          </div>

        </div>


			);
	}
});
module.exports = Search;
