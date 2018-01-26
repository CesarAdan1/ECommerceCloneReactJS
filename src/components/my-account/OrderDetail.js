import OrderDetail from '../dummy_data/order-detail.json';

export default () => (
  <div>
    <style jsx global>{`
      .order-detail-main {
        & h3 {
          font-size: 24px;
          letter-spacing: 0px;
          color: #181818;
        }

        & p {
          color: #181818;
          font-size: 14px;
          margin-bottom: 30px;
          font-weight: normal;
        }

        & .summary-main {
          lost-column: 6/6;
          margin-top: 60px;
          background-color: #fffbfa;


          & .summary-label {
            lost-column: 5/6;            
            text-align: right;
            margin-right: 0 !important;
            line-height: 40px;
            font-weight: bold;
          }

          & .summary-price {
            lost-column: 1/6;
            text-align: right;
            line-height: 40px;
            font-weight: bold;
          }

          & .summary-price:nth-child(6n) {
            margin-right: 30px !important;
          }
        }
      }

      .two-section {
        lost-column: 6/6;
        margin-bottom: 50px;
      }


      .billing-info {
        lost-column: 2.8/6;

        & h3 {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-weight: bold;
          margin-bottom: 15px;
          float: left;
        }

        & p {
          margin: 0;
          float: left;
          width: 100%;
        }
      }

      .shipping-info {
        lost-column: 2.8/6;

        & h3 {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-weight: bold;
          margin-bottom: 15px;
          float: left;
        }

        & p {
          margin: 0;
          float: left;
          width: 100%;
        }
      }

      .shipping-info:nth-child(6n){
        float: left;
      }

      .shipping-method-main {
        lost-column: 2.8/6;

        & h3 {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-weight: bold;
          margin-bottom: 15px;
          float: left;
        }

        & p {
          margin: 0;
          float: left;
          width: 100%;
        }
      }

      .payment-method-main {
        lost-column: 2.8/6;

        & h3 {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-weight: bold;
          margin-bottom: 15px;
          float: left;
        }

        & p {
          margin: 0;
          float: left;
          width: 100%;
        }
      }

      @media only screen and (max-width:768px){
       
        .billing-info {
          lost-column: 12/12;          
        }

        .shipping-info {
          lost-column: 12/12;          
        }

        .order-detail-main {
          margin: 0 6%;
        }
      }

      .order-main {
        & h3 {
          font-size: 24px;
          letter-spacing: 0px;
          color: #181818;
        }

      }

      .order-main-row {
        lost-column: 6/6;
      }

      .order-data-row {
        lost-column: 6/6;
        padding-top: 30px;       
      }

      .order-hd-col {
        lost-column: 1.2/6;
        color: #181818;
        font-size: 11px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 4px;
        margin-right: 0 !important;
        text-align: right;
      }

      .order-hd-col-name {
        lost-column: 2/6;
        color: #181818;
        font-size: 11px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 4px;
        margin-right: 0 !important;
      }

      .order-data-col {
        lost-column: 1.1/6;
        font-size: 14px;
        letter-spacing: 1px;
        line-height: 20px;
        margin-right: 0 !important;
        text-align: right;
      }

      .order-data-col-name {
        lost-column: 2/6;
      }

      @media only screen and (max-width:768px){

        .order-hd-col {
          lost-column: 1.2/6;
          font-size: 10px;
        }

        .order-data-col{
          lost-column: 1.2/6;
          font-size: 13px;
        }

        .shipping-method-main {
          lost-column: 12/12;
          margin-top: 50px; 
        }

        .payment-method-main {
          lost-column: 12/12;
          margin-top: 50px;          
        }

        .order-data-col-name:nth-child(1n){
          margin-right: 0;
        }

        .order-hd-col-name:nth-child(1n){
          margin-right:0;
        }
      
    }

    @media only screen and (max-width:480px){

        .order-hd-col {
          lost-column: 1.42/6;
          text-align:center;
        }

        .order-data-col{
          lost-column: 1.42/6;
          text-align:center;
        }

        .order-detail-main {
          & .summary-main {

            & .summary-label {
              lost-column: 4.5/6;
              font-size: 14px;         
            }

            & .summary-price {
              lost-column: 1.5/6;
              font-size: 14px;
            }

            & .summary-price:nth-child(6n) {
              margin-right: 30px !important;
            }
          }

        }
      }

      @media only screen and (max-width: 360px){
        
        .order-hd-col{
          lost-column: 1.5/6;
        }

        .order-detail-main {
          & .summary-main {

            & .summary-label {
              lost-column: 4/6;
              font-size: 14px;         
            }

            & .summary-price {
              lost-column: 2/6;
              font-size: 14px;
            }

            & .summary-price:nth-child(6n) {
              margin-right: 30px !important;
            }
          }

        }
        
      }


    `}</style>
    <div className="order-detail-main">
      <h3>Order #{OrderDetail.orderno}-{OrderDetail.status}</h3>
      <div className="two-section">
        <div className="billing-info">
          <h3>Billing Address</h3>
          <p>{OrderDetail.billing_address.firstname} {OrderDetail.billing_address.lastname}</p>
          <p>
            {OrderDetail.billing_address.email}<br />{OrderDetail.billing_address.company}
            <br />{OrderDetail.billing_address.address1}<br />{OrderDetail.billing_address.address2}
            <br />{OrderDetail.billing_address.city}, {OrderDetail.billing_address.state},
            {OrderDetail.billing_address.postalcode}<br />{OrderDetail.billing_address.country}
            T: {OrderDetail.billing_address.telephone}
          </p>
        </div>
        <div className="shipping-method-main">
          <h3>Shipping Method</h3>
          <p>{OrderDetail.shipping_method.name}</p>
        </div>
      </div>
      <div className="two-section">
        <div className="shipping-info">
          <h3>Shipping Address</h3>
          <p>{OrderDetail.shipping_address.firstname} {OrderDetail.shipping_address.lastname}</p>
          <p>
            {OrderDetail.shipping_address.email}<br />{OrderDetail.shipping_address.company}
            <br />{OrderDetail.shipping_address.address1}
            <br />{OrderDetail.shipping_address.address2}
            <br />{OrderDetail.shipping_address.city}, {OrderDetail.shipping_address.state},
            {OrderDetail.shipping_address.postalcode}<br />{OrderDetail.shipping_address.country}
            T: {OrderDetail.shipping_address.telephone}
          </p>
        </div>
        <div className="payment-method-main">
          <h3>Payment Method</h3>
          <p>{OrderDetail.payment_method.name}</p>
        </div>
      </div>
      <div>
        <div className="order-main">
          <h3>Items Ordered</h3>
        </div>
        <div className="order-main-row">
          <div className="order-hd-row">
            <div className="order-hd-col-name">Product</div>
            <div className="order-hd-col">Sku</div>
            <div className="order-hd-col">Price</div>
            <div className="order-hd-col">Qty</div>
            <div className="order-hd-col">Subtotal</div>
          </div>
          {
            OrderDetail.order_items.map((data) =>
              <div className="order-data-row">
                <div className="order-data-col-name">{data.name}</div>
                <div className="order-data-col">{data.sku}</div>
                <div className="order-data-col">{data.price}</div>
                <div className="order-data-col">{data.qty}</div>
                <div className="order-data-col">{data.sub_total}</div>
              </div>,
            )
          }
        </div>
        <div className="summary-main">
          <div className="summary-label">Subtotal</div>
          <div className="summary-price">$99.00</div>
          <div className="summary-label">Shipping & Handling</div>
          <div className="summary-price">$99.00</div>
          <div className="summary-label">Tax</div>
          <div className="summary-price">$10.00</div>
          <div className="summary-label">Grand Total</div>
          <div className="summary-price">$99.00</div>
        </div>
      </div>
    </div>
  </div>
);

