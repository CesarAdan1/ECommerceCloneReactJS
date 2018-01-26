import React from 'react';
import Dropdown from 'react-dropdown';
import CountryData from '../../components/dummy_data/country.json';

/**
 * ShippingAddressSection declaration
 */
class ShippingAddressSection extends React.Component {
  /**
  * variable declaration
  */
  constructor() {
    super();
    this.state = { checked: true };
    this.handleShowShippingAddress = this.handleShowShippingAddress.bind(this);
  }
  /**
  * Set Checkbox checked value
  */
  handleShowShippingAddress() {
    this.setState({
      checked: !this.state.checked,
    });
  }
  /**
   * Renders "Shipping Address Section"!
   * @return JSX
   */
  render() {
    const applyClassName = this.state.checked ? 'shipping-address-section display-hide' : 'shipping-address-section';
    return (
      <div>
        <style jsx>{`
          .shipping-checkbox {
            margin-bottom: 20px;          
          }

          .shipping-address-section {

            & div {
              float: left;
              width: 100%;
            }

            & p {
              font-size: 9px;
              margin-bottom: 30px;
              font-weight: normal;
              float: left;
              width: 100%;
              text-transform: uppercase;
            }

            & label {
              float: left;
            }

            & .two-box-section {
              lost-column: 6/6;
            }

            & .input-box-left {
              lost-column: 3/6;
            }

            & .input-box-right {
              lost-column: 2.95/6;
            }

          }

          .display-hide {
            display:none;
          }

          @media only screen and (max-width:480px){
            input[type=text],input[type=password] {
              width: 95%;
            }

            .shipping-address-section {
              & .input-box-left {
                lost-column: 2.9/6;
              } 
            }

          }

               
        `}</style>
        <div className="shipping-checkbox">
          <span>
            <input type="checkbox" name="use_for_shipping" value="1" onChange={this.handleShowShippingAddress} />
          </span>
          <label htmlFor="Ship to the same address">Ship to the same address</label>
        </div>
        <div className={applyClassName}>
          <p>Shipping Address</p>
          <div className="two-box-section">
            <div className="input-box-left">
              <label htmlFor="First Name">First Name <span className="required">*</span></label>
              <input type="text" name="shipping[firstname]" />
            </div>
            <div className="input-box-right">
              <label htmlFor="Last Name">Last Name <span className="required">*</span></label>
              <input type="text" name="shipping[lastname]" />
            </div>
          </div>
          <div>
            <label htmlFor="Telephone">Telephone <span className="required">*</span></label>
            <input type="text" name="shipping[telephone]" />
          </div>
          <div>
            <label htmlFor="Address">Address <span className="required">*</span></label>
            <input type="text" name="shipping[street1]" />
          </div>
          <div>
            <input type="text" name="shipping[street2]" placeholder="Optional" />
          </div>
          <div>
            <label htmlFor="Country">Country</label>
            <div><Dropdown options={CountryData} /></div>
          </div>
          <div className="two-box-section">
            <div className="input-box-left">
              <label htmlFor="City">City<span className="required">*</span></label>
              <input type="text" name="shipping[city]" />
            </div>
            <div className="input-box-right">
              <label htmlFor="Postal Code">Postal Code<span className="required">*</span></label>
              <input type="text" name="shipping[postcode]" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShippingAddressSection;
