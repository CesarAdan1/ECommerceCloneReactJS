import Dropdown from 'react-dropdown';
import withData from '../../lib/withData';
import Layout from '../../components/layout';
import ShippingData from '../../components/checkout/ShippingMethod';
import PaymentMethod from '../../components/checkout/PaymentMethod';
import CartSummary from '../../components/checkout/CartSummary';
import AccountCheckBoxSection from '../../components/checkout/AccountCheckBox';
import ShippingAddressSection from '../../components/checkout/ShippingAddressSection';
import PromoCodeBox from '../../components/checkout/PromoCodeBox';
import CountryData from '../../components/dummy_data/country.json';
import ShoppingCartRightText from '../../components/cart/ShoppingCartRightText';

export const Element = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout currentPath={url && url.pathname} lang={url.query.lang}>
    <style jsx>{`

      .common-row {
        margin: 15px auto 0;
        width: 85%;
        float: none;
      }
      .checkout-left-section {
        lost-column: 7/12;
      }

      .checkout-right-section {
        lost-column: 5/12;

        & .cart-summery-box {
          lost-column: 5/5;                    
        }

        & p {
          font-size: 9px;
          margin-bottom: 30px;
          font-weight: normal;
          text-transform: uppercase;
        }

        & .promo-code-box {
          lost-column: 5/5;
          margin-top: 20px;
        }

        & .btn-main {
          lost-column: 5/5;

          & button {
            background-color: #74b074;
            width: 100%;
            margin-top: 10px;
            text-align: center;
            float: left;
            padding: 20px 24px;
            border: 0;
            outline: 0;
          }

          & span {
            font-weight: bold;
            color: #ffffff;
            font-size: 11px;
            text-transform: uppercase;
            border-bottom: 4px solid #ffffff;
            letter-spacing: 4px;
            margin: 0 auto;
            padding-bottom: 5px;
          }

          & .terms-text {
            text-transform: inherit;
            font-size: 14px;
          }
        }

      }

      .billing-address-section {
        
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

        & .newsletter-checkbox {
          margin-bottom: 20px;          
        }

        & .password-box-main {
          padding-top: 15px;

          & img {
            vertical-align: middle;
          }
        }

      }

      .shipping-section {
        & p {
          font-size: 9px;
          margin-bottom: 30px;
          font-weight: normal;
          float: left;
          width: 100%;
          text-transform: uppercase;
        }
      }

      .payment-method-section {
        & p {
          font-size: 9px;
          margin-bottom: 30px;
          font-weight: normal;
          float: left;
          width: 100%;
          text-transform: uppercase;
        }
      }

      .display-hide {
        display: none;
      }

      @media only screen and (max-width:1024px){
        
        .common-row {
          width: 100%;
        }

        .checkout-left-section {
          lost-column: 12/12;
        }

        .checkout-right-section {
          lost-column: 12/12;          
        }

      }

      @media only screen and (max-width:480px){
        input[type=text],input[type=password] {
          width: 95%;
        }

        .billing-address-section {
          & .input-box-left {
            lost-column: 2.9/6;
          } 
        }

      }

    `}</style>
    <style jsx global>{`
      .Dropdown-root {
        position: relative;
        margin: 10px 0 20px
      }

      .Dropdown-control {
        position: relative;
        overflow: hidden;
        background-color: #FBFBFB;
        border: 2px solid #E6E6E6;
        border-radius: 2px;
        box-sizing: border-box;
        color: #4d4d4d;
        cursor: default;
        outline: none;
        padding: 15px 52px 8px 10px;
        transition: all 200ms ease;
        height: 52px;
      }

      .Dropdown-control:hover {
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
      }

      .Dropdown-arrow {
        border-color: #999 transparent transparent;
        border-style: solid;
        border-width: 5px 5px 0;
        content: ' ';
        display: block;
        height: 0;
        margin-top: -ceil(2.5);
        position: absolute;
        right: 10px;
        top: 22px;
        width: 0
      }

      .is-open .Dropdown-arrow {
        border-color: transparent transparent #999;
        border-width: 0 5px 5px;
      }

      .Dropdown-menu {
        background-color: white;
        border: 2px solid #E6E6E6;
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
        box-sizing: border-box;
        margin-top: -1px;
        max-height: 200px;
        overflow-y: auto;
        position: absolute;
        top: 100%;
        width: 100%;
        z-index: 1000;
        -webkit-overflow-scrolling: touch;
        border-bottom: 0;
      }

      .Dropdown-menu .Dropdown-group > .Dropdown-title{
        padding: 8px 10px;
        color: rgba(51, 51, 51, 1);
        font-weight: bold;
        text-transform: capitalize;
      }

      .Dropdown-option {
        box-sizing: border-box;
        color: rgba(51, 51, 51, 0.8);
        cursor: pointer;
        display: block;
        padding: 8px 10px;
      }

      .Dropdown-option:last-child {
        border-bottom-right-radius: 2px;
        border-bottom-left-radius: 2px;
        border-bottom: 2px solid #4d4d4d;
      }

      .Dropdown-option:hover {
        background-color: #ffefeb;
        color: #4d4d4d;
      }

      .Dropdown-option.is-selected {
        background-color: #ffefeb;
        color: #4d4d4d;
      }

      .Dropdown-noresults {
        box-sizing: border-box;
        color: #4d4d4d;
        cursor: default;
        display: block;
        padding: 8px 10px;
      }
      .checkout-right-section {
        & .info-text-section {
            float:left;

            & .right-cart-text {
              float: left;
              & ul {
                padding: 0 0 20px 0 !important;
                background-color: transparent !important;
                margin: 0;
              }
            }
          }
      }

    `}</style>
    <section className="main-container">
      <div className="common-row">
        <div className="checkout-left-section">
          <div className="billing-address-section">
            <p>Your Information</p>
            <div>
              <label htmlFor="Email Address">Email Address <span className="required">*</span></label>
              <input type="text" name="billing[email]" />
            </div>
            <div className="two-box-section">
              <div className="input-box-left">
                <label htmlFor="First Name">First Name <span className="required">*</span></label>
                <input type="text" name="billing[firstname]" />
              </div>
              <div className="input-box-right">
                <label htmlFor="Last Name">Last Name <span className="required">*</span></label>
                <input type="text" name="billing[lastname]" />
              </div>
            </div>
            <div>
              <label htmlFor="Telephone">Telephone <span className="required">*</span></label>
              <input type="text" name="billing[telephone]" />
            </div>
            <div>
              <label htmlFor="Address">Address <span className="required">*</span></label>
              <input type="text" name="billing[street1]" />
            </div>
            <div>
              <input type="text" name="billing[street2]" placeholder="Optional" />
            </div>
            <div>
              <label htmlFor="Country">Country</label>
              <div><Dropdown options={CountryData} /></div>
            </div>
            <div className="two-box-section">
              <div className="input-box-left">
                <label htmlFor="City">City<span className="required">*</span></label>
                <input type="text" name="billing[city]" />
              </div>
              <div className="input-box-right">
                <label htmlFor="Postal Code">Postal Code<span className="required">*</span></label>
                <input type="text" name="billing[postcode]" />
              </div>
            </div>
            <AccountCheckBoxSection />
            <ShippingAddressSection />
            <div className="newsletter-checkbox">
              <span>
                <input type="checkbox" name="subscribe_newsletter" value="1" />
              </span>
              <label htmlFor="Subscribe to our newsletter">Subscribe to our newsletter</label>
            </div>
          </div>
          <div className="payment-method-section">
            <p>Payment</p>
            <PaymentMethod />
          </div>
          <div className="shipping-section">
            <p>Shipping</p>
            <ShippingData />
          </div>
        </div>
        <div className="checkout-right-section">
          <div className="cart-summery-box">
            <p>summary</p>
            <CartSummary />
          </div>
          <div className="promo-code-box">
            <PromoCodeBox />
          </div>
          <div className="btn-main">
            <button type="button" title="Place order" id="onestepcheckout-place-order"><span>Place order</span></button>
            <p className="terms-text">By clicking on the &#34;Place Order&#34;
              button you agree to the <a href="">Terms and Conditions</a> of Rosefield</p>
          </div>
          <div className="info-text-section">
            <ShoppingCartRightText lang={url.query.lang} />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default withData(Element);
