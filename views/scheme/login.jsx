var React = require("react");
var Default = require("./layout/default");
class Login extends React.Component {
  render() {
    return (
        <Default>
          <h1>Let's log in!</h1>
          <form action="/login" method="POST">
              <p>Your User Account Name</p>
              <input name="name" placeholder="text"/>
              <p>Your User Account Password</p>
              <input name="password" placeholder="text"/>
              <br></br>
              <input type="submit"/>
          </form>
        </Default>
    );
  }
}
module.exports = Login;