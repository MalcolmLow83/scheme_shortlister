var React = require("react");
var Default = require("./layout/default");
class Errorpage extends React.Component {
  render() {
    let message = this.props.message;
    return (
        <Default>
          <h1>OPPS! Something went wrong~</h1>
          <p>{message}</p>
        </Default>
    );
  }
}
module.exports = Errorpage;