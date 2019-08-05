var React = require("react");
var Default = require("./layout/default");
class Home extends React.Component {
    render() {
        let schemes = this.props.schemes;
        let userLog = this.props.userLog;
        //{<Default loggedIn={loggedIn}>}
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
                    </div>
                </div>
            )
        })
        return (
            <Default userLog={userLog}>
                <h1>Check out all our schemes</h1>
                <div className="row">
                    {schemesList}
                </div>
            </Default>
        );
    }
}
module.exports = Home;