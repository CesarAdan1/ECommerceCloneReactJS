import React from 'react';
import withData from '../../lib/withData';
import Layout from '../../components/layout';

class Privacy extends React.Component {
/**
* variable declaration
*/
  constructor(props) {
    super(props);
    const myData = require('../../locale/'+props.url.query.lang+'/privacy.json');
    this.state = {
      url: props,
      lang: props.url.query.lang,
      res_data: myData,
    };
  }

  /**
   * Renders "Job List data"!
   * @return JSX
   */
  render() {
    return (
      <Layout currentPath={this.state.url && this.state.url.pathname} lang={this.state.lang}>
        <style jsx global>{`
          .main-container {
            padding: 15px 100px !important;
          }

          @media only screen and (max-width:1024px){
            .main-container {
                padding: 15px 30px !important;
            }
          }

        `}</style>
        <div className="main-container">
          <div className="common-row terms-privacy-main">
            <h1>{this.state.res_data.Title}</h1>
            <h3>{this.state.res_data.PersonalInformation.Title}</h3>
            <ul>
              <li>{this.state.res_data.PersonalInformation.Text}</li>
              <li>&nbsp;</li>
            </ul>
            <h3>{this.state.res_data.Payments.Title}</h3>
            <ul>
              <li>{this.state.res_data.Payments.Text}</li>
              <li>&nbsp;</li>
            </ul>
            <h3>{this.state.res_data.ThirdParties.Title}</h3>
            <ul>
              <li>{this.state.res_data.ThirdParties.Text}</li>
              <li>&nbsp;</li>
            </ul>
            <h3>{this.state.res_data.Cookies.Title}</h3>
            <ul>
              <li>{this.state.res_data.Cookies.Text}</li>
              <li>&nbsp;</li>
            </ul>
            <h3>{this.state.res_data.NewsletterSubscription.Title}</h3>
            <ul>
              <li>{this.state.res_data.NewsletterSubscription.Text}</li>
              <li>&nbsp;</li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withData(Privacy);
