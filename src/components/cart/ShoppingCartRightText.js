import React from 'react';
import CheckIcon from 'react-icons/lib/fa/check';

/**
  * Shopping Cart Right Text section Class
*/
class ShoppingCartRightText extends React.Component {
// @constructor tag allows missing @returns tag
/**
 * Default Inistilization.
 * @constructor
 * @param {Object} props The array
 */
  /**
* variable declaration
*/
  constructor(props) {
    super(props);
    const myData = require('../../locale/'+props.lang+'/right-shoppingcart-text.json');
    this.state = {
      url: props,
      lang: props.lang,
      res_data: myData,
    };
  }

  /**
 * @returns {Object} Shopping Cart Right Text in HTML Format
 */
  render() {
    return (
      <div className="right-cart-text">
        <style jsx>{`
          .right-cart-text {
            & ul {
              background-color: #ffeeea;
              padding: 20px 0 20px 8px;
            }

            & li {
              width: 91%;
              color: #7e7e7e;
              text-transform: uppercase;
              font-size: 10px;
              letter-spacing: 4px;
              padding: 8px 0 2px 12px;
              line-height:16px;
              font-weight:normal;
            }

            & span {
              padding-right: 12px;
              float:left;
            }

          }     

        `}</style>
        <ul>
          {
            this.state.res_data.RightText.map(Data => (
              <li>
                <span><CheckIcon color="#74b073" size={16} /></span>{Data.Text}
              </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingCartRightText;
