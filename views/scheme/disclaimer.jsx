var React = require("react");
var Default = require("./layout/default");
class Disclaimer extends React.Component {
  render() {
    return (
        <Default>
          <h1>Disclaimer!</h1>
          <p>
          The information display on this website are extracted from the related government body.
          Accuracy of the information are based on the documentations and details from government scheme providers and partners as of 2nd August 2019.
          Author of this product have no affiliation with any of the schemes providers or partners and cannot vouch for the accuracy or changes made on the schemes.
          Use discretion and contact the related government body for any queries and information pertaining to the scheme.</p>
          <p>FAQs links for following schemes</p>
          <ul>
            <li><a href="https://www.imda.gov.sg/-/media/imtalent-portal-revamp/5-programmes/citrep/citrep-fy19-faq-v1.pdf">CITREP FAQs</a></li>
            <li><a href="https://www.skillsfuture.sg/earnandlearn/faq">Earn & Learn FAQs</a></li>
          </ul>
        </Default>
    );
  }
}
module.exports = Disclaimer;