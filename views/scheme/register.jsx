var React = require("react");
var Default = require("./layout/default");
class Register extends React.Component {
  render() {
    return (
        <Default>
          <h1>Let's us know more about you!</h1>
          <h4>Create Account</h4>
          <form action="/register" method="POST">
              <p>Your User Name:<input name="name" placeholder="text"/></p>
              <p>Your User Password:<input type="password" name="password" placeholder="text"/></p>

              <h5>Education Qualification</h5>
              <p><input type="radio" name="education" value='degree'/>University Degree</p>
              <p><input type="radio" name="education" value='diploma'/>Polytechnic Diploma</p>
              <p><input type="radio" name="education" value='ite'/>ITE Higher Nitec/Nitec</p>
              <p>Year Graduated:<input type="number" name="grad_year" placeholder="numbers"/></p>

              <h5>Employment</h5>
              <p><input type="radio" name="employment" value='employed_sg'/>currently employed with sg registered company</p>
              <p><input type="radio" name="employment" value='employed_fn'/>currently employed with non-sg registered company</p>
              <p><input type="radio" name="employment" value='unemployed'/>currently not employed</p>
              <p>Years of Experience:<input type="number" name="experience" placeholder="numbers"/></p>
              <input type="submit"/>
          </form>
        </Default>
    );
  }
}
module.exports = Register;