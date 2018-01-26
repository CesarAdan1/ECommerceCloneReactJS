import CustomerInfo from '../dummy_data/customer-info.json';

export default () => (
  <div>
    <style jsx global>{`
      .edit-address-info {
        & h3 {
          font-size: 24px;
          letter-spacing: 0px;
          color: #181818;
        }

        & .input-left {
          lost-column: 2.5/5;
        }

        & .input-right {
          lost-column: 2.5/5;
        }

        & h2 {
          text-transform: uppercase;
          margin-bottom: 20px;
        }
      }

      .password-section {
        margin-top: 30px;
      }

      .display-hide {
        display:none;
      }   

      .button-section {
        float: left;
        width: 100%;
        margin-top: 20px;
      }

      @media only screen and (max-width:1024px){
        .back-button {
          padding: 16px 25px !important;
        }
      }

      @media only screen and (max-width:355px){
        .back-button {
          padding: 16px 22px !important;
        }
      }

      @media only screen and (max-width:346px){
        .back-button {
          padding: 16px 18px !important;
        }
      }

      @media only screen and (max-width:346px){
        .back-button {
          padding: 16px 9px !important;
        }
      }

    `}</style>
    <div className="edit-address-info">
      <h3>Edit Address</h3>
      <div>
        <div className="input-left">
          <label htmlFor="First Name">First Name<span className="required">*</span></label>
          <input type="text" name="firstname" value={CustomerInfo.billing_address.firstname} />
        </div>
        <div className="input-right">
          <label htmlFor="Middle Name/Initial">Middle Name/Initial<span className="required">*</span></label>
          <input type="text" name="initial" />
        </div>
      </div>
      <div>
        <label htmlFor="Last Name">Last Name<span className="required">*</span></label>
        <input type="text" name="lastname" value={CustomerInfo.billing_address.lastname} />
      </div>
      <div>
        <label htmlFor="company">Company<span className="required">*</span></label>
        <input type="text" name="company" value={CustomerInfo.billing_address.company} />
      </div>
      <div>
        <label htmlFor="telephone">Telephone<span className="required">*</span></label>
        <input type="text" name="telephone" value={CustomerInfo.billing_address.telephone} />
      </div>
      <div>
        <label htmlFor="fax">Fax<span className="required">*</span></label>
        <input type="text" name="fax" value={CustomerInfo.billing_address.fax} />
      </div>
      <h2>Address</h2>
      <div>
        <label htmlFor="street_1">Street Address<span className="required">*</span></label>
        <input type="text" name="street_1" value={CustomerInfo.billing_address.address1} />
        <input type="text" name="street_2" value={CustomerInfo.billing_address.address2} />
      </div>
      <div>
        <label htmlFor="city">City<span className="required">*</span></label>
        <input type="text" name="city" value={CustomerInfo.billing_address.city} />
      </div>
      <div>
        <label htmlFor="zip">Zip/Postal Code<span className="required">*</span></label>
        <input type="text" name="zip" value={CustomerInfo.billing_address.postalcode} />
      </div>
      <div>
        <label htmlFor="country_id">Country<span className="required">*</span></label>
        <input type="text" name="country_id" value={CustomerInfo.billing_address.country} />
      </div>
      <div>
        <label htmlFor="region_id">State/Province<span className="required">*</span></label>
        <input type="text" name="region_id" value={CustomerInfo.billing_address.state} />
      </div>
      <div className="button-section">
        <button type="submit" name="Save Address" className="pink-black-button">Save Address</button>
        <a href="/customer/address" className="back-button">Back</a>
      </div>
    </div>
  </div>
);

