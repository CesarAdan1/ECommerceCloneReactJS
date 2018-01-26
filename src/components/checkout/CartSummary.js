import Imgix from 'react-imgix';
import CartSummeryData from '../dummy_data/checkout-cart-summery.json';

export default () => (
  <div>
    <style jsx>{`
    .checkout-summary-row {
      lost-column: 5/5;


      & .summary-image-box{
        lost-column: 1/5;
        margin-right: 0 !important;
      }

      & .summary-title {
        lost-column: 3/5;
        text-align: left;
        color: #787878;
        font-size:13px;
        padding:20px 0 15px 0;
        text-transform:capitalize;
        letter-spacing: 1px;
        margin-right: 60px !important;
      }
      
      & .summary-value {
        lost-column: 1/5;
        text-align: right;
        float:right;
        padding:20px 0;
      }

    }

    .extra-price-row {
      
      margin-top: 10px;

      & .summary-title {
        lost-column: 4/5;
        margin-right: 30px !important;
        padding: 0;
      }

      & .summary-value {
        lost-column: 1/5;
        padding: 0;
      }
    }

    .grandtotal-main {
      lost-column: 5/5;
      border-top: 2px solid #d1d1d1;
      padding:28px 0 20px 0;
      border-bottom: 2px solid #d1d1d1;
      margin-top:30px;

      & h4 {
        lost-column: 3/5;
        font-size: 15px;
        letter-spacing: 1px;
        margin: 0;
      }

      & span {
        lost-column: 2/5;
        font-size: 15px;
        text-align: right;
        font-weight: bold;
        letter-spacing: 1px;
      }
    }

    .summery-price {
      letter-spacing: 2px;
      font-size: 14px;
    }

    @media only screen and (max-width:480px){
      .checkout-summary-row {
        
        & .summary-image-box{
          margin-right: 20px !important;
        }

        & .summary-title {
          lost-column: 2.6/5;
          margin-right: 30px !important;
        }

        & .summary-value {
          lost-column: 1.5/5;
          text-align: right;
          float:right;
          padding:20px 0;
        }
      }

      .extra-price-row {

        & .summary-title {
          lost-column: 3.5/5;
          margin-right: 30px !important;
          padding: 0;
        }

        & .summary-value {
          lost-column: 1.5/5;
          padding: 0;
        }
      }
    }

    @media only screen and (max-width:350px){
      .checkout-summary-row {
               
        & .summary-title {
          padding: 10px 0 15px 0;
        }

      }
    }
    
    `}</style>
    <div>
      {
      CartSummeryData.cartitems.map(data => (
        <div className="checkout-summary-row">
          <div className="summary-image-box">
            <Imgix src={data.image} type="picture">
              <Imgix src={data.image} width={135} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
              <Imgix src={data.image} width={135} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
              <Imgix src={data.image} width={50} auto={['compress', 'format']} fit="clip" faces={false} />
            </Imgix>
          </div>
          <div className="summary-title">{data.qty}x {data.name} {data.short_description}</div>
          <div className="summary-value">
            <span className="summery-price">{data.currency} {data.price}</span>
          </div>
        </div>
      ))}
      <div className="checkout-summary-row extra-price-row">
        <div className="summary-title">Shipping</div>
        <div className="summary-value">
          <span className="summery-price">{CartSummeryData.currency}{CartSummeryData.shipping}</span>
        </div>
      </div>
      <div className="checkout-summary-row extra-price-row">
        <div className="summary-title">Tax</div>
        <div className="summary-value">
          <span className="summery-price">{CartSummeryData.currency}{CartSummeryData.tax}</span>
        </div>
      </div>
    </div>
    <div className="grandtotal-main">
      <h4>Grand total</h4>
      <span>{CartSummeryData.currency}{CartSummeryData.totalprice}</span>
    </div>
  </div>
);

