var React = require("react");
class Default extends React.Component {
  render() {
    /* let loginButton = <React.Fragment><a className="nav-item nav-link" href="/register/new">Register</a><a className="nav-item nav-link" href="/login/new">Login</a></React.Fragment>;
     if (this.props.loggedIn) {
         loginButton = <a className="nav-item nav-link" href="/logout">Logout</a>
     }

    <a className="nav-item nav-link" href="/register/new">Register</a>
    <a className="nav-item nav-link" href="/login/new">Login</a>
    <a className="nav-item nav-link" href="/user/edit/form">Update Profile</a>
    <a className="nav-item nav-link" href="/user">Your Schemes</a>
    <a className="nav-item nav-link" href="/logout">Logout</a>
    */

    let logButton;
    if (this.props.userLog) {
        logButton = <React.Fragment><a className="nav-item nav-link" href="/user/edit/form">Update Profile</a><a className="nav-item nav-link" href="/user">Your Schemes</a><a className="nav-item nav-link" href="/logout">Logout</a></React.Fragment>
    } else {
        logButton = <React.Fragment><a className="nav-item nav-link" href="/register/new">Register</a><a className="nav-item nav-link" href="/login/new">Login</a></React.Fragment>
    }
    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="/css/style.css"></link>
            </head>
            <body>
                <div className="container">
                    <div className="col-12">
                        <div className="topImg"></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                              <a className="navbar-brand" href="/">Gov Tech</a>
                             {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                              </button>*/}
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                  <a className="nav-item nav-link" href="/all">Show All<span class="sr-only">(current)</span></a>
                                  {logButton}
                                  <a className="nav-item nav-link" href="/disclaimer">Disclaimer</a>

                                </div>
                              </div>
                            </nav>
                        </div>
                    </div>
                    <div className="col">
                        {this.props.children}
                    </div>
                </div>
            </body>
        </html>
    )
  }
}
module.exports = Default;