import CustomerInfo from '../dummy_data/customer-info.json';

export default () => (
  <div>
    <style jsx global>{`
      .add-address-info {
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

    `}</style>
    <div className="add-address-info">
      <h3>Add New Address</h3>
      <div>
        <div className="input-left">
          <label htmlFor="First Name">First Name<span className="required">*</span></label>
          <input type="text" name="firstname" />
        </div>
        <div className="input-right">
          <label htmlFor="Middle Name/Initial">Middle Name/Initial<span className="required">*</span></label>
          <input type="text" name="initial" />
        </div>
      </div>
      <div>
        <label htmlFor="Last Name">Last Name<span className="required">*</span></label>
        <input type="text" name="lastname" />
      </div>
      <div>
        <label htmlFor="company">Company<span className="required">*</span></label>
        <input type="text" name="company" />
      </div>
      <div>
        <label htmlFor="telephone">Telephone<span className="required">*</span></label>
        <input type="text" name="telephone" />
      </div>
      <div>
        <label htmlFor="fax">Fax<span className="required">*</span></label>
        <input type="text" name="fax" />
      </div>
      <h2>Address</h2>
      <div>
        <label htmlFor="street_1">Street Address<span className="required">*</span></label>
        <input type="text" name="street_1" />
        <input type="text" name="street_2" />
      </div>
      <div>
        <label htmlFor="city">City<span className="required">*</span></label>
        <input type="text" name="city" />
      </div>
      <div>
        <label htmlFor="zip">Zip/Postal Code<span className="required">*</span></label>
        <input type="text" name="zip" />
      </div>
      <div>
        <label htmlFor="country_id">Country<span className="required">*</span></label>
        <input type="text" name="country_id" />
      </div>
      <div>
        <label htmlFor="region_id">State/Province<span className="required">*</span></label>
        <input type="text" name="region_id" />
      </div>
      <div className="button-section">
        <button type="submit" name="Save Address" className="pink-black-button">Save Address</button>
        <a href="/customer/address" className="back-button">Back</a>
      </div>
    </div>
  </div>
);

