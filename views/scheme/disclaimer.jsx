var React = require("react");
var Default = require("./layout/default");
class Disclaimer extends React.Component {
  render() {
    return (
        <Default>
          <h1>Disclaimer!</h1>
          <p>
          The sole purpose for this app is for educational and project purposes. All information displayed on this website are extracted from the related government body and its participating partners.
          Accuracy of the information are based on the documentations and details from government scheme providers and partners as of 2nd August 2019.
          Creater of this product have no affiliation with any of the schemes providers or partners and hence cannot vouch for the accuracy or changes made on the schemes.
          The created App has not been vetted and NOT APPROVED by any government for any schemes display on this app.
          App users should use with utmost discretion and directly contact the related government body for any queries and information pertaining to the scheme.</p>
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