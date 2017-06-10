var React= require("react");

var Eachresult = React.createClass({
  render: function(){
    return (
      <div className="well">
        <div className="row">

          <div className="col-sm-10">
            <p>This is the first article</p>
          </div>

          <div className="col-sm-2">
          <button type="button" name="button">Save</button>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Eachresult;
