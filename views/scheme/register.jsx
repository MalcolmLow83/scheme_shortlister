var React = require("react");
var Default = require("./layout/default");
class Register extends React.Component {
  render() {
    return (
        <Default>
          <h1>Let's Us Know More About You!</h1>
          <h4>Create Account Details</h4>
          <form action="/register" method="POST">
              <p>Your User Account Name:<input name="name" placeholder="text"/></p>
              <p>Your User Account Password:<input type="password" name="password" placeholder="text"/></p>

              <h5>Personal Details</h5>
              <p>Date of Birth:<input type="date" name="birth_date" placeholder="yyyymmdd"/></p>

              <h5>Note: Leave NS ORD blank if NS is not applicable to you</h5>
              <p>National Service ORD date:<input type="date" name="ord_date" placeholder="yyyymmdd"/></p>
              <h5>Education Qualification</h5>
              <p><input type="radio" name="education" value='degree'/>University Degree</p>
              <p><input type="radio" name="education" value='diploma'/>Polytechnic Diploma</p>
              <p><input type="radio" name="education" value='ite'/>ITE Higher Nitec/Nitec</p>
              <p><input type="radio" name="education" value='post-sec'/>Post-Secondary: A or O levels</p>
              <p><input type="radio" name="education" value='NA'/>No Formal Education</p>
              <p>Year Graduated:<input type="number" name="grad_year" placeholder="yyyy"/></p>

              <h5>Employment</h5>
              <p><input type="radio" name="employment" value='employed_sg'/>currently employed with sg registered company</p>
              <p><input type="radio" name="employment" value='employed_fn'/>currently employed with non-sg registered company</p>
              <p><input type="radio" name="employment" value='unemployed'/>currently not employed</p>
              <p>Years of Experience:<input type="number" name="experience" placeholder="yy"/></p>
              <input type="submit"/>

          </form>
        </Default>
    );
  }
}
module.exports = Register;