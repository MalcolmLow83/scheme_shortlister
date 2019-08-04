var React = require("react");
var Default = require("./layout/default");
class Useredit extends React.Component {
  render() {
    let schemes = this.props.schemes;
    let birth_date = Date.parse(schemes.birth_date);
    return (
        <Default>
          <h1>Let's Update Your Details!</h1>
          <h4>Update Account Details</h4>
          <form action="/register" method="POST">
              <p>Your User Account Name:<input name="name" value={schemes.name}/></p>
              <p>Your User Account Password:<input type="password" name="password" value={schemes.password}/></p>

              <h5>Update Personal Details</h5>
              <p>Date of Birth:<input type="number" name={birth_date}/></p>
              <p>National Service ORD date:<input type="number" name="ord_date" value={schemes.ord_date}/></p>
              <h5>Update Education Qualification</h5>
              <p><input type="radio" name="education" value='degree'/>University Degree</p>
              <p><input type="radio" name="education" value='diploma'/>Polytechnic Diploma</p>
              <p><input type="radio" name="education" value='ite'/>ITE Higher Nitec/Nitec</p>
              <p><input type="radio" name="education" value='post-sec'/>Post-Secondary: A or O levels</p>
              <p>Year Graduated:<input type="number" name="grad_year" value={schemes.grad_year}/></p>

              <h5>Update Employment</h5>
              <p><input type="radio" name="employment" value='employed_sg'/>currently employed with sg registered company</p>
              <p><input type="radio" name="employment" value='employed_fn'/>currently employed with non-sg registered company</p>
              <p><input type="radio" name="employment" value='unemployed'/>currently not employed</p>
              <p>Years of Experience:<input type="number" name="experience" value={schemes.experience}/></p>
              <input type="submit"/>
          </form>
        </Default>
    );
  }
}
module.exports = Useredit;