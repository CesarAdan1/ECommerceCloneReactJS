import React from 'react';
import ArrowIcon from 'react-icons/lib/fa/caret-right';

/**
 * AccountCheckBox declaration
 */
class PromoCodeBox extends React.Component {
  /**
  * variable declaration
  */
  constructor() {
    super();
    this.state = { showing: true };
    this.showPromobox = this.showPromobox.bind(this);
  }
  /**
  * Set Checkbox checked value
  */
  showPromobox(e) {
    e.preventDefault();
    this.setState({ showing: !this.state.showing });
  }
  /**
   * Renders "Promo Box Section"!
   * @return JSX
   */
  render() {
    const { showing } = this.state;
    const applyClassName = showing ? 'promo-box-main display-hide' : 'promo-box-main';
    return (
      <div>
        <style jsx>{`
        .display-hide {
          display: none;
        }

        .promo-box-label {

          & a {
            width : 100%;
          }

          & p {
            font-size: 9px;
            margin: 0 0 10px;
            font-weight: normal;
            float: left;
            width: 92%;
            text-transform: uppercase;
            line-height: 22px;
            color: #666;
          }

          & span {
            float: left;
          }

        }

        .promo-box-main {
          lost-column: 5/5;

          & p {
            lost-column: 5/5;
            margin-bottom: 20px;
          }

          & span {
            font-size: 13px;
            color: red;
            float: left;
            line-height: 31px;
            padding-left: 10px;
          }

          & img {
            float: left;
          }

        }

        `}</style>
        <div className="promo-box-label">
          <a href="" onClick={this.showPromobox}>
            <span>
              <ArrowIcon />
            </span>
            <p>Do you have a voucher code?</p>
          </a>
        </div>
        <div className={applyClassName}>
          <input type="text" name="promo-code" placeholder="Ros1609" />
          <img src="/static/images/promo-close.png" alt="" />
          <span>Coupon code &#34;dsadsad&#34; is not valid.</span>
        </div>
      </div>
    );
  }
}

export default PromoCodeBox;
