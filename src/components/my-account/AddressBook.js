import CustomerInfo from '../dummy_data/customer-info.json';

export default () => (
  <div>
    <style jsx global>{`
      .addressbook-main {
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

        & .addressbook-title {
          lost-column: 2.8/6;
        }

        & .address-btn-row {
          lost-column: 2.8/6;
        }

        & button {
          float: right;
          outline: 0;
        }
      }

      .contact-info {
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

      .edit-img {
        float: left;
        margin: 10px 0 16px 0;

        & img {
          float: left;
        }

        & span {
          float: left;
          text-transform: uppercase;
          padding:6px 0 20px 10px;
          letter-spacing: 3px;
          font-size: 12px;
          font-weight: bold;
          color: #e3a797;
        }

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

      @media only screen and (max-width:768px){
        .addressbook-main {
          & .addressbook-title {
            lost-column: 12/12;
          }

          & .address-btn-row {
            lost-column: 12/12;
          }

          & button {
            float: left;
          }
        }

        .billing-info {
          lost-column: 12/12;
        }

        .shipping-info {
          lost-column: 12/12;          
        }
      }

    `}</style>
    <div className="addressbook-main">
      <div className="addressbook-title">
        <h3>Address Book</h3>
      </div>
      <div className="address-btn-row">
        <a href="/my-account/add-address">
          <button type="button" name="Add New Address" className="pink-black-button">Add New Address</button>
        </a>
      </div>
      <div className="billing-info">
        <h3>Default Billing Address</h3>
        <p>{CustomerInfo.billing_address.firstname} {CustomerInfo.billing_address.lastname}</p>
        <p>
          {CustomerInfo.billing_address.email}<br />{CustomerInfo.billing_address.company}
          <br />{CustomerInfo.billing_address.address1}<br />{CustomerInfo.billing_address.address2}
          <br />{CustomerInfo.billing_address.city}, {CustomerInfo.billing_address.state},
          {CustomerInfo.billing_address.postalcode}<br />{CustomerInfo.billing_address.country}
          T: {CustomerInfo.billing_address.telephone}
        </p>
        <div className="edit-img">
          <a href={'/customer/address/edit/'}>
            <img src="/static/images/edit.png" alt="" /><span>Change Billing Address</span>
          </a>
        </div>
      </div>

      <div className="shipping-info">
        <h3>Default Shipping Address</h3>
        <p>{CustomerInfo.shipping_address.firstname} {CustomerInfo.shipping_address.lastname}</p>
        <p>
          {CustomerInfo.shipping_address.email}<br />{CustomerInfo.shipping_address.company}
          <br />{CustomerInfo.shipping_address.address1}
          <br />{CustomerInfo.shipping_address.address2}
          <br />{CustomerInfo.shipping_address.city}, {CustomerInfo.shipping_address.state},
          {CustomerInfo.shipping_address.postalcode}<br />{CustomerInfo.shipping_address.country}
          T: {CustomerInfo.shipping_address.telephone}
        </p>
        <div className="edit-img">
          <a href={'/customer/address/edit/'}>
            <img src="/static/images/edit.png" alt="" /><span>Change Shipping Address</span>
          </a>
        </div>
      </div>

    </div>
  </div>
);

