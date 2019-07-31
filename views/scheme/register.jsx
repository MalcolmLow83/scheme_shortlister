var React = require("react");
var Default = require("./layout/default");
class Register extends React.Component {
  render() {
    return (
        <Default>
          <h1>Let's us know more about you!</h1>
          <form action="/register" method="POST">
              <p>Your User Name</p>
              <input name="name"/>
              <p>Your User Password</p>
              <input type="password" name="password"/>
              <p>Employment</p>
              <p><input type="radio" name="employment" value= 'false' checked/>currently not employed</p>
              <p><input type="radio" name="employment" value= 'true' />currently employed</p>
              <p>Experience</p>
              <input type="number" name="experience"/>

              <input type="submit"/>
          </form>
        </Default>
    );
  }
}
module.exports = Register;