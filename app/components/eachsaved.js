var React = require("react");

var Eachsaved = React.createClass({
  render: function(){
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">

          <div className="article panel-title">
            <h4>this is my firsta aksd </h4>
          </div>

          <div className="date">
            <p>Saved date jan-2015</p>
          </div>

          <div className="">
            <button className="btn-success" type="button" name="button">Remove</button>
          </div>

        </div>
        <ul className="list-group">
          <li className="list-group-item">This is my first note</li>
        </ul>

      </div>
    )
  }
});
module.exports = Eachsaved;
