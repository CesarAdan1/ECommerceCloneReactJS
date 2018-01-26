import React from 'react';
import CustomerInfo from '../../components/dummy_data/customer-info.json';

/**
 * AccountInformation declaration
 */
class AccountInformation extends React.Component {
  /**
  * variable declaration
  */
  constructor() {
    super();
    this.state = { checked: true };
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }
  /**
  * Set Checkbox checked value
  */
  handleChangePassword() {
    this.setState({
      checked: !this.state.checked,
    });
  }
  /**
   * Renders "Account Information Form"!
   * @return JSX
   */
  render() {
    const applyClassName = this.state.checked ? 'password-section display-hide' : 'password-section';
    return (
      <div>
        <style jsx global>{`
          .edit-info {
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
        <div className="edit-info">
          <h3>Account Information</h3>
          <div>
            <div className="input-left">
              <label htmlFor="First Name">First Name<span className="required">*</span></label>
              <input type="text" name="firstname" value={CustomerInfo.firstname} />
            </div>
            <div className="input-right">
              <label htmlFor="Initial">Initial<span className="required">*</span></label>
              <input type="text" name="initial" />
            </div>
          </div>
          <div>
            <label htmlFor="Last Name">Last Name<span className="required">*</span></label>
            <input type="text" name="lastname" value={CustomerInfo.lastname} />
          </div>
          <div>
            <label htmlFor="Email Address">Email Address<span className="required">*</span></label>
            <input type="text" name="email" value={CustomerInfo.email} />
          </div>
          <div>
            <label htmlFor="Change Password">
              <input type="checkbox" name="" onChange={this.handleChangePassword} /><span>Change Password</span>
            </label>
          </div>
          <div className={applyClassName}>
            <div>
              <label htmlFor="Current Password">Current Password<span className="required">*</span></label>
              <input type="text" name="curr_password" className="input-textfield" autoComplete="off" />
            </div>
            <div>
              <label htmlFor="New Password">New Password<span className="required">*</span></label>
              <input type="text" name="new_password" className="input-textfield" autoComplete="off" />
            </div>
            <div>
              <label htmlFor="Confirm New Password">Confirm New Password<span className="required">*</span></label>
              <input type="text" name="confirm_new_password" className="input-textfield" autoComplete="off" />
            </div>
          </div>
          <div className="button-section">
            <button type="submit" name="Save" className="pink-black-button">Save</button>
            <a href="/my-account" className="back-button">Back</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountInformation;
