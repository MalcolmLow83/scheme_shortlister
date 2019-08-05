var React = require("react");
var Default = require("./layout/default");
class All extends React.Component {
    render() {
        let schemes = this.props.schemes;
        let userLog = this.props.userLog;
        let schemesList = schemes.map(schemesData => {
            let url = schemesData.url;
            let backgroundImage = 'url('+schemesData.photo_url+')';
            return(
                <div className="col-3">
                    <div className = "schemeCard">
                        <a href = {url}>
                            <div className = "cardImg" style={{backgroundImage}}></div>
                        </a>
                        <p>{schemesData.name}</p>
                        <p>{schemesData.detail}</p>
                        <p>{schemesData.message1}</p>
                        <p>{schemesData.message2}</p>
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
module.exports = All;