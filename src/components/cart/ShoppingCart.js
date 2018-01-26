import Dropdown from 'react-dropdown';
import Imgix from 'react-imgix';
import CartData from '../dummy_data/shopping-cart.json';

const qtyoptions = [
{ value: '1', label: '1' },
{ value: '2', label: '2' },
{ value: '3', label: '3' },
{ value: '4', label: '4' },
{ value: '5', label: '5' },
];

const defaultOption = qtyoptions[0];

export default () => (
  <div className="left-cart-section">
    <style jsx>{`
      
      .left-cart-section {
        lost-column: 9/12;
      }

      .cart-listing-main {
        lost-column: 9/9;
        border-bottom: 2px solid #ffebe6;
        padding: 22px 0;
      }

      .cart-image-box {
        lost-column: 3/9;
        text-align: center;
      }
     
      .cart-prd-info-box {
        lost-column: 6/9;
        margin-top: 27px;

        & hgroup {
          lost-column: 2/6;          
        }

        & h2 {
          font-family: 'publico';
          font-weight: bold;
          color: #3c3c3c;
          font-size: 24px;
          letter-spacing: 1px;
          margin: 0;
        }

        & h3 {
          font-weight: normal;
          font-size: 14px;
          color: #4d4d4d;
          padding-top: 3px;
          letter-spacing: 1px;
          margin: 0;
        }

        & p {
          lost-column: 1/6;
          font-size: 16px;
          letter-spacing: 2px;
          font-weight: normal;
          color: #000;
          margin: 0;
        }
      }

      .qty-dropdown-row {
        lost-column: 1.3/6; 
      }

      .close-box {
        lost-column: 1.7/6;
        text-align: center;

        & img {
          width: 9px;
        }      
      }

      .cart-total-main {
        padding: 22px 5%;
        float: right !important;
        lost-column: 3/9;
      }

      .cart-total-main:last-child {
        margin-right: 30px; 
      }

      .total-label-section {
        lost-column : 2/3;
        margin-right: 0 !important;

        & h2 {
          line-height: 130%;
          font-family: 'publico';
          font-size: 21px;
          font-weight: bold;
          letter-spacing: 0;
          margin: 0;
          text-align: right;
        }

        & h6 {
          font-weight: normal;
          text-transform: uppercase;
          text-align: right;
          margin: 0;
          letter-spacing: 1px;
          letter-spacing: 2px;
          line-height: 28px;
          font-size: 11px;
        }
      }
     
      .cart-total-price {
        float:right;
        font-size: 20px;
        width: 10%;
        font-weight: 400;
        color: #3c3c3c;
        letter-spacing: 2px;
        line-height: 136%;
      }

      .shipping-price {
        float:right;
        font-size: 12px;
        width: 10%;
        font-weight: 400;
        color: #3c3c3c;
        letter-spacing: 2px;
        line-height: 30px;
      }

      @media only screen and (max-width:1024px){

        .left-cart-section {
          width: 92%;
          margin-right: 0 !important;
          margin-left: 2%;
        }

        .cart-listing-main {
          width: 98%;
          margin-right: 0 !important;
        }

        .cart-prd-info-box {
          & hgroup {
            lost-column: 4/6;          
          }

          & h2 {
            font-size: 18px;
          }

          & p {
            margin-top: 20px;
            text-align: right;
            lost-column: 2.5/6;
          }
        }

        .qty-dropdown-row {
          lost-column: 3.5/6;
          margin-top: 20px;
        }

        .cart-total-main {
          lost-column: 12/12;
        }

        .total-label-section {
          margin: 0 8%;

          & h6 {
            text-align: left;
          }

          & h2 {
            text-align: left; 
          }
        }

        .close-box{
          margin-top: -45px;
          text-align: right;
          lost-column: 1/3;
        }

      } 

    `}</style>
    <style jsx global>{`
      .Dropdown-root {
        position: relative;
      }

      .Dropdown-control {
        position: relative;
        overflow: hidden;
        background-color: #fffbfa;
        border: 2px solid #585858;
        border-radius: 2px;
        box-sizing: border-box;
        color: #4d4d4d;
        cursor: default;
        outline: none;
        padding: 8px 52px 8px 10px;
        transition: all 200ms ease;
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
        top: 14px;
        width: 0
      }

      .is-open .Dropdown-arrow {
        border-color: transparent transparent #999;
        border-width: 0 5px 5px;
      }

      .Dropdown-menu {
        background-color: white;
        border: 2px solid #585858;
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

    `}</style>
    {
      CartData.cartitems.map(data => (
        <div className="cart-listing-main">
          <div className="cart-image-box">
            <Imgix src={data.image} type="picture">
              <Imgix src={data.image} width={135} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
              <Imgix src={data.image} width={135} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
              <Imgix src={data.image} width={100} auto={['compress', 'format']} fit="clip" faces={false} />
            </Imgix>
          </div>
          <div className="cart-prd-info-box">
            <hgroup>
              <h2>{data.name}</h2>
              <h3>{data.short_description}</h3>
            </hgroup>
            <div className="qty-dropdown-row">
              <Dropdown options={qtyoptions} value={defaultOption} />
            </div>
            <div className="close-box">
              <a href="">
                <img src="/static/images/remove-cart.svg" alt="" />
              </a>
            </div>
            <p>{data.currency}{data.price}</p>
          </div>
        </div>
    ))}
    <div className="cart-total-main">
      <div>
        <div className="total-label-section">
          <h6>Shipping Cost</h6>
        </div>
        <div className="shipping-price">{CartData.currency}{CartData.shipping}</div>
      </div>
      <div>
        <div className="total-label-section">
          <h2>Total</h2>
        </div>
        <div className="cart-total-price">{CartData.currency}{CartData.totalprice}</div>
      </div>
    </div>
  </div>
);
