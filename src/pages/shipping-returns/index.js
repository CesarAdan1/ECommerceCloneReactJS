import withData from '../../lib/withData';
import Layout from '../../components/layout';

class ShippingReturns extends React.Component {
/**
* variable declaration
*/
  constructor(props) {
    super(props);
    var myData = require('../../locale/'+props.url.query.lang+'/shipping-return.json');
    this.state = {
      url: props,
      lang: props.url.query.lang,
      res_ship_data: myData,
    };
  }

  /**
   * Renders "Job List data"!
   * @return JSX
   */
  render() {
    return (
      <Layout currentPath={this.state.url && this.state.url.pathname} lang={this.state.lang}>
        <style jsx>{`
      
      .main-container {
        padding: 15px 100px !important;
      }

      .delivery-box {
        border:1px solid #d8d8d8;
        margin-bottom: 50px;
        width:100%;      

        & tr {
          border-bottom:0;
          letter-spacing: 1px;
        }

        & td {
          width: 33%;
          text-align: center;
          padding: 16px 0 0;
          height: 36px;
          float:left;
        }

        & .box-col {
          border-right:1px solid #d8d8d8;        
        }

        & tr:first-child {
          border-bottom:1px solid #d8d8d8;
          font-weight:bold; 
          float: left;
          width:100%;
        }

        & .box-col:last-child {
          border-right: 1px solid transparent;
        }
      }

      @media only screen and (max-width:480px){
        
        .main-container {
            padding: 15px 30px !important;
        }

        .delivery-box {
          & td {
            padding-bottom:34px;
          }
        }
      }

    `}</style>
    <div className="main-container">
      <div className="common-row terms-privacy-main">
        <h1>{this.state.res_ship_data.Title}</h1>
        <h3>{this.state.res_ship_data.ShippintText.Title}</h3>
        <ul>
          <li>{this.state.res_ship_data.ShippintText.Headline}</li>
          <li>&nbsp;</li>
        </ul>
        <table className="delivery-box">
          <tbody>{
              this.state.res_ship_data.ShippintText.TableContent.map(tabConData => (
                <tr>
              <td className="box-col">{tabConData.field1}</td>
              <td className="box-col">{tabConData.field2}</td>
              <td>{tabConData.field3}</td>
            </tr>
            ))}
          </tbody>
        </table>
        <ul>
          <li>{this.state.res_ship_data.ShippingNote}</li>
          <li>&nbsp;</li>
        </ul>
        <h3>{this.state.res_ship_data.ShippingDescription.Title}</h3>
        {
              this.state.res_ship_data.ShippingDescription.Description.map(descData => (
              <ul>
                <li>{descData.sub_desc}</li>
              </ul>
        ))}
      </div>
    </div>
      </Layout>
    );
  }
}

export default withData(ShippingReturns);
/*
export const Element = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout currentPath={url && url.pathname} lang={url.query.lang}>
    <style jsx>{`
      
      .main-container {
        padding: 15px 100px !important;
      }

      .delivery-box {
        border:1px solid #d8d8d8;
        margin-bottom: 50px;
        width:100%;      

        & tr {
          border-bottom:0;
          letter-spacing: 1px;
        }

        & td {
          width: 33%;
          text-align: center;
          padding: 16px 0 0;
          height: 36px;
          float:left;
        }

        & .box-col {
          border-right:1px solid #d8d8d8;        
        }

        & tr:first-child {
          border-bottom:1px solid #d8d8d8;
          font-weight:bold; 
          float: left;
          width:100%;
        }

        & .box-col:last-child {
          border-right: 1px solid transparent;
        }
      }

      @media only screen and (max-width:480px){
        
        .main-container {
            padding: 15px 30px !important;
        }

        .delivery-box {
          & td {
            padding-bottom:34px;
          }
        }
      }

    `}</style>
    <div className="main-container">
      <div className="common-row terms-privacy-main">
        <h1>Shipping & Returns</h1>
        <h3>Shipping</h3>
        <ul>
          <li>We offer free worldwide shipment. See below for the estimated time of delivery:</li>
          <li>&nbsp;</li>
        </ul>
        <table className="delivery-box">
          <tbody>
            <tr>
              <td className="box-col">Destination</td>
              <td className="box-col">Express price</td>
              <td>Express delivery</td>
            </tr>
            <tr>
              <td className="box-col">Within Europe</td>
              <td className="box-col">Free</td>
              <td>1-3 working days</td>
            </tr>
            <tr>
              <td className="box-col">Rest of The world</td>
              <td className="box-col">Free</td>
              <td>2-4 working days</td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>Please be aware of the fact that for straps which are bought individually
            (not together with a watch) we charge US$ 10 shipping costs:</li>
          <li>&nbsp;</li>
        </ul>
        <h3>Returns</h3>
        <ul>
          <li>All purchases from ROSEFIELD watches can be returned within a 14-days trial period,
            starting the day of receiving the order, without stating a reason. A two-year warranty
            comes with all our products. Please, see our Terms and Conditions for more
            information.</li>
        </ul>
        <ul>
          <li>All items returned within the 14-days trial period must be in the same condition
              in which they were received. In case the buyer wishes to return the product, he
              or she
              is allowed to unpack the product and only use it to determine whether he/she wants
              to keep the product. The returned products will be carefully examined, as they
              must be
              unworn and in their original packaging, containing all accessories of the
              packaging.</li>
        </ul>
        <ul>
          <li>In case the product is received broken or damaged, the buyer is obliged
              to inform us immediately and we will send further instruction of how
              to proceed.</li>
        </ul>
        <ul>
          <li>Please note, that if a buyer wishes to return the order, the shipping costs are
              his/her responsibility. We recommend that the buyer chooses a secured
              shipment method,
              as the return shipment is at his/her risk. We will inspect the product carefully
              and when a default (not caused by the customer) is detected, a repaired product or
              a replacement will be sent back and the customer will be reimbursed for his/her
              expenses.</li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default withData(Element);
*/