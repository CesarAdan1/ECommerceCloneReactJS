import React from 'react';
import withData from '../../lib/withData';
import Layout from '../../components/layout';

class Terms extends React.Component {
/**
* variable declaration
*/
  constructor(props) {
    super(props);
    const myData = require('../../locale/'+props.url.query.lang+'/terms-conditions.json');
    this.state = {
      url: props,
      lang: props.url.query.lang,
      res_data: myData,
    };
  }

  /**
   * Renders "Display 15 min content"!
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
            <h3>{this.state.res_data.Definition.Title}</h3>
            <ul>
              <li>{this.state.res_data.Definition.Text}</li>
            </ul>
            <ul>
              {
                this.state.res_data.Definition.AddressOptions.map(Data => (
                  <li>{Data.Options}</li>
              ))}
            </ul>
            <ul>
              <li>{this.state.res_data.Definition.Text1}</li>
            </ul>
            <ul>
              <li>{this.state.res_data.Definition.Website}</li>
              <li>{this.state.res_data.Definition.Text2}</li>
              <li>{this.state.res_data.Definition.Text3}</li>
              <li>{this.state.res_data.Definition.Text4}</li>
            </ul>
            <h3>{this.state.res_data.Applicability.Title}</h3>
            <ul>
              <li>{this.state.res_data.Applicability.Text}</li>
            </ul>
            <h3>{this.state.res_data.Ordersonthewebsite.Title}</h3>
            <p><span>{this.state.res_data.Ordersonthewebsite.Title31}</span></p>
            <ul>
              {
              this.state.res_data.Ordersonthewebsite.Title31option.map(Data => (
                <li>{Data.Options}</li>
              ))}
            </ul>
            <p><span>{this.state.res_data.Ordersonthewebsite.Title32.Title}</span></p>
            <ul>
              {
              this.state.res_data.Ordersonthewebsite.Title32.Title32option.map(Data => (
                <li>{Data.Options}</li>
              ))}
            </ul>
            <p><span>{this.state.res_data.Ordersonthewebsite.Title33.Title}</span></p>
            <ul>
              <li>{this.state.res_data.Ordersonthewebsite.Title33.Text}</li>
            </ul>
            <ul>
              {
              this.state.res_data.Ordersonthewebsite.Title33.Title33option.map(Data => (
                <li>{Data.Options}</li>
              ))}
            </ul>
            <h3>{this.state.res_data.PricePayment.Title}</h3>
            <p><span>{this.state.res_data.PricePayment.Title41.Title}</span></p>
            <ul>
              <li>{this.state.res_data.PricePayment.Title41.Text}</li>
            </ul>
            <p><span>{this.state.res_data.PricePayment.Title42.Title}</span></p>
            <ul>
              <li>{this.state.res_data.PricePayment.Title42.Text}</li>
            </ul>
            <p><span>{this.state.res_data.PricePayment.Title43.Title}</span></p>
            <ul>
              {
              this.state.res_data.PricePayment.Title43.Title43option.map(Data => (
                <li>{Data.Options}</li>
              ))}
            </ul>
            <p><span>{this.state.res_data.PricePayment.Title44.Title}</span></p>
            <ul>
              <li>{this.state.res_data.PricePayment.Title44.Text}</li>
            </ul>
            <p><span>{this.state.res_data.PricePayment.Title45.Title}</span></p>
            <ul>
              <li>{this.state.res_data.PricePayment.Title45.Text}</li>
            </ul>
            <h3>{this.state.res_data.Delivery.Title}</h3>
            <ul>
              {
              this.state.res_data.Delivery.Titleoption.map(Data => (
                <li>{Data.Options}</li>
              ))}
            </ul>
            <p><span>{this.state.res_data.Delivery.Title51.Title}</span></p>
            <ul>
              {
              this.state.res_data.Delivery.Title51.Title51option.map(Data => (
                <li>{Data.Options}</li>
              ))}
            </ul>
            <p><span>{this.state.res_data.Delivery.Title52.Title}</span></p>
            <ul>
              {
              this.state.res_data.Delivery.Title52.Title52option.map(Data => (
                <li>{Data.Options}</li>
              ))}
            </ul>
            <p><span>{this.state.res_data.Delivery.Title53.Title}</span></p>
            <ul>
              {
              this.state.res_data.Delivery.Title53.Title53option.map(Data => (
                <li>{Data.Options}</li>
              ))}
            </ul>
            <h3>{this.state.res_data.Exchangesandreturns.Title}</h3>
            <ul>
              {
              this.state.res_data.Exchangesandreturns.Titleoption.map(Data => (
                <li><p>{Data.Options}</p></li>
              ))}
            </ul>
            <h3>{this.state.res_data.Warrantyandrepair.Title}</h3>
            <ul>
              {
              this.state.res_data.Warrantyandrepair.Titleoption.map(Data => (
                <li><p>{Data.Options}</p></li>
              ))}
            </ul>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: this.state.res_data.Warrantyandrepair.Text }}></li>
            </ul>
            <h3>{this.state.res_data.Forcemajaure.Title}</h3>
            <ul>
              <li>{this.state.res_data.Forcemajaure.Text}</li>
            </ul>
            <h3>{this.state.res_data.Personaldataandprivacy.Title}</h3>
            <ul>
              {
              this.state.res_data.Personaldataandprivacy.Titleoption.map(Data => (
                <li><p>{Data.Options}</p></li>
              ))}
            </ul>
            <h3>{this.state.res_data.Applicablelaws.Title}</h3>
            <ul>
              <li>{this.state.res_data.Applicablelaws.Text}</li>
            </ul>
            <ul>
              <li><p>{this.state.res_data.UpdateText}</p></li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}
export default withData(Terms);
