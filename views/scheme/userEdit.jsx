var React = require("react");
var Default = require("./layout/default");
class Useredit extends React.Component {
  render() {
    let schemes = this.props.schemes;
    let birth_date = schemes.birth_date;
    let birth_dd = birth_date.getDate();
    let birth_mm = birth_date.getMonth() + 1;
    let birth_yyyy = birth_date.getFullYear();
    return (
        <Default>
            <h1>Let's Update Your Details</h1>
            <h4>Update Account Details</h4>
            <form action="/user/edit" method="POST">
                <p>schemes.id</p>
                <p>Current Account Name:{schemes.name}</p>
                <p>New User Account Name:<input type="text" name="name" placeholder="text"/></p>
                <p>New User Account Password:<input type="password" name="password" placeholder="text"/></p>

                <h5>Update Personal Details</h5>
                <p>Current Date of Birth:{birth_dd}-{birth_mm}-{birth_yyyy}</p>
                <p>New Date of Birth:<input type="date" name="birth_date" placeholder="yyyymmdd"/></p>
              {/*<p>Current Date of Birth:{ord_date}</p>*/}
                <p>National Service ORD date:<input type="date" name="ord_date" placeholder="yyyymmdd"/></p>
                <h5>Update Education Qualification</h5>
                <p>Current Education: {schemes.education}</p>
                <p><input type="radio" name="education" value='degree'/>University Degree</p>
                <p><input type="radio" name="education" value='diploma'/>Polytechnic Diploma</p>
                <p><input type="radio" name="education" value='ite'/>ITE Higher Nitec/Nitec</p>
                <p><input type="radio" name="education" value='post-sec'/>Post-Secondary: A or O levels</p>
              {/*<p>Current Year Graduated:{schemes.grad_year}</p>*/}
                <p>New Year Graduated:<input type="number" name="grad_year" placeholder="yyyy"/></p>

                <h5>Update Employment</h5>
                <p>Current employment: {schemes.employment}</p>
                <p><input type="radio" name="employment" value='employed_sg'/>currently employed with sg registered company</p>
                <p><input type="radio" name="employment" value='employed_fn'/>currently employed with non-sg registered company</p>
                <p><input type="radio" name="employment" value='unemployed'/>currently not employed</p>
                <p>Current Years of Experience:{schemes.experience}</p>
                <p>New Years of Experience:<input type="number" name="experience" placeholder="yy"/></p>
                <input type="submit"/>
            </form>
        </Default>
    );
  }
}
module.exports = Useredit;