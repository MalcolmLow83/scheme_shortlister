var React = require("react");
var Default = require("./layout/default");
class User extends React.Component {
  render() {
    let schemes = this.props.schemes;
    let schemesList = schemes.map(schemesData => {
        let url = schemesData.url;
        let backgroundImage = 'url('+schemesData.photo_url+')';
            return(
                <div className="col-4">
                    <div className = "schemeCard">
                        <a href = {url}>
                            <div className = "cardImg" style={{backgroundImage}}></div>
                        </a>
                        <p>{schemesData.name}</p>
                        <p>{schemesData.detail}</p>
                    </div>
                </div>
        )
    })
    return (
        <Default>
            <h1>Welcome to your schemes!!</h1>
            <div className="row">
                {schemesList}
            </div>
        </Default>
    );
  }
}
module.exports = User;