import React from 'react';


/**
 * AccountCheckBox declaration
 */
class AccountCheckBox extends React.Component {
  /**
  * variable declaration
  */
  constructor() {
    super();
    this.state = { checked: true };
    this.handleShowPasswordSection = this.handleShowPasswordSection.bind(this);
  }
  /**
  * Set Checkbox checked value
  */
  handleShowPasswordSection() {
    this.setState({
      checked: !this.state.checked,
    });
  }
  /**
   * Renders "Account Checkbox"!
   * @return JSX
   */
  render() {
    const applyClassName = this.state.checked ? 'password-box-main display-hide' : 'password-box-main';
    return (
      <div>
        <style jsx>{`
          .account-checkbox {
            margin-bottom: 20px;
          }

          .password-box-main {
            padding-top: 15px;

            & img {
              vertical-align: middle;
            }
          }

          .display-hide {
            display:none;
          }

          @media only screen and (max-width:480px){
            input[type=password] {
              width: 95%;
            }
          }
               
        `}</style>
        <div className="account-checkbox">
          <span>
            <input type="checkbox" name="create_account" value="1" onChange={this.handleShowPasswordSection} />
          </span>
          <label htmlFor="Create an account for later use">Create an account for later use</label>
        </div>
        <div className={applyClassName}>
          <div>
            <label htmlFor="Password">Password <img src="/static/images/que-number.png" alt="" /></label>
            <input type="password" name="billing[customer_password]" />
          </div>
          <div>
            <label htmlFor="Confirm password">Confirm password</label>
            <input type="password" name="billing[confirm_password]" />
          </div>
        </div>
      </div>
    );
  }
}

export default AccountCheckBox;
