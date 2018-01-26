import PaymentMethod from '../dummy_data/payment-methods.json';

export default () => (
  <div className="payment-method-main">
    <style jsx>{`
      .payment-method-main {
        lost-column: 6/6;
        margin: 0 0 26px;
        border: 2px solid #e3e3e3;
        border-top: 0;
      }

      .payment-option-row {
        padding:20px 0px 55px 15px;
        border-top: 2px solid #e3e3e3;

        & span {
          float:left;
          margin-top: 6px;
          width: 5%;
        }

        & input {
          zoom: 1.5;
          outline: 0;
        }

        & p {
          padding-left: 12px;
          color: #787878;
          font-size: 14px;
          letter-spacing: 1px;
          width: 90%;
          line-height: 30px;
          margin: 0;
        }
      }

      @media only screen and (max-width:1024px){
        .payment-option-row {
          
          & span {
            width: 7%;
          }

          & p {
            width: 86%;
            padding-left: 15px;
          }
        }
      }

    `}</style>
    {
    PaymentMethod.map((pdata, index) => (
      <div className="payment-option-row">
        <span>
          <input name="shipping_method" type="radio" value="myparcel_flatrate" />
        </span>
        <label htmlFor="{pdata.label}">
          <p>{pdata.label}</p>
        </label>
      </div>
    ))}
  </div>
);
