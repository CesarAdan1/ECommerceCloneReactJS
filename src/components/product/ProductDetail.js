import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import FacebookIcon from 'react-icons/lib/fa/facebook';
import PinterestIcon from 'react-icons/lib/fa/pinterest-p';
import HeartIcon from 'react-icons/lib/fa/heart-o';
import Collapsible from 'react-collapsible';
import product from '../../components/dummy_data/product.json';

import { updateCartLineItem } from '../../graphql/mutation/updateCartLineItem';
import { getProduct } from '../../graphql/query/getProduct';

class ProductDetail extends React.Component {
  /**
  * variable declaration
  */
  constructor(props) {
    super(props);
    this.state = {
      url: props,
      lang: props.lang,
      id: props.id,
      cartId: null,
    };
    this.updateCartLineItem = props.updatecart;
  }
  /**
  * Call Onload function for Initiallize cart
  * @return {Object}
  */

  getCartId = () => {
    return localStorage.getItem('cartId');
  }
  componentDidMount() {
    const cartId = this.getCartId();
    this.setState({ cartId });
  }

  /**
  * Call Update Cart Function when click on add to cart button
  * @return {Object}
  */
  handleAddtoCart(e) {
    e.preventDefault();
    const productId = e.target.elements.productId.value;
    const quantity = e.target.elements.quantity.value;

    if (productId === '' || quantity === '') {
      window.alert('Please select product');
      return false;
    }
    const cartId = '96d5ec7b-cc3c-492f-a66d-c113d1be157a';
    const updatecartObj = this.updateCartLineItem(cartId, productId, quantity);
    return updatecartObj;
  }

  /**
   * Renders "Product Detail data"!
   * @return JSX
   */
  render() {
    const { Product } = this.props.data;
    console.log(Product);
    return (
      <div className="product-detail-warpper">
        <style jsx global>{`
          
          .product-detail-warpper {
            lost-column:5/12;
          }

          .product-detail-main {
            lost-column:12/12;
          }

          .details {
            width: 90%;
            margin: 2% 5%;
            & p, & h2 {
              margin: 0;
            }
          }

          .left {
            float: left;
            width: 90%;
          }

          .name {
            padding-left: 0;
            color: #3c3c3c;
            font-family: 'publico';
            font-weight: bold;
            line-height: 130%;
            width: 100%;
            text-align: left;
            font-size: 42px;
            letter-spacing:1px;
          }

          .short_description {
            color: #5a5859;
            width: 100%;
            font-size: 14px;
            letter-spacing: 1px;
          }

          .price {
            float: left;
            width: 10%;
            font-size: 22px;
            color: #3c3c3c;
            letter-spacing: 2px;
            line-height: 180%;
          }

          .add_to_cart {
            width: 100%;
            background-color: #fbd6ce;
            padding: 21px 0;
            text-align: center;
            letter-spacing: 3px;
            text-transform: uppercase;
            font-size: 11px;
            line-height: 120%;
            color: #3c3c3c;
            font-weight: 900;

            border-width: 0px;
            margin: 21px 0;

            cursor: pointer;
          }

          .notifications {
            font-size: 14px;
            width: 82%;
            margin: 0 9%;
            color: #74b073;
            letter-spacing: 1.4px;
            line-height: 180%;
            padding: 14px 0 18px 0;
          }

          .collapsable_container, .details {
            lost-utility: clearfix;

            & .social-icon-section {
              float: left;
              border-top: 1px solid #e1e1e1;
              width: 96%;
              padding-left: 20px;

              & a {
                border: 1px solid #3C3C3C;
                border-radius: 50%;
                -webkit-border-radius: 50%;
                font-size: 16px;
                padding: 7px 8px;
                margin: 21px 9px 20px;
                line-height: 100%;
                float: left;
              }

              & a:hover {
                color: #FED6CC;
                border: 1px solid #FED6CC;
              }
            }
          }

          .Collapsible {
            border-top: 1px solid #e1e1e1;
            float: left;
            width: 100%;
          }

          .Collapsible__contentInner {
            margin: 0 5%;
            padding: 1px 0px 22px 0px;

          }

          .Collapsible__trigger {
            display: block;
            text-decoration: none;
            position: relative;
            padding: 30px 0 30px 0;
            margin: 0 5%;
            color: #3C3C3C;
            font-size: 12px;
            letter-spacing: 3px;
            text-transform: uppercase;
            font-weight: bold;
            cursor: pointer;
          }

          .Collapsible__trigger.is-open:before {
            content: "";
            background:url(/static/images/minus.svg) no-repeat;
            height: 10px;
            width: 10px;
            float: right;
          }

          .Collapsible__trigger.is-closed:before {
            content: "";
            background:url(/static/images/plus.svg) no-repeat;
            height: 10px;
            width: 10px;
            float: right;
          }

          .Collapsible__trigger.is-open.open-trigger:before{
            float: right;
            content: "";
            background:url(/static/images/down-arrow.svg) no-repeat top right;
            height: 20px;
            width: 20px;
            
          }

          .Collapsible__trigger.is-closed.close-trigger:before {
            content: "";
            background:url(/static/images/up-arrow.svg) no-repeat top right;
            float: right;
            height: 20px;
            width: 20px;
          }

          .collapsable-text {
            color: #5a5859;
            letter-spacing: 1px;
            font-size: 14px;
            line-height: 22px;
          }

          .attribute-main {
            & span {
              font-weight:bold;
              width: 100%;
              float: left;
              margin-top: 15px;
            }

            & div {
              color: #5a5859;
              letter-spacing: 1px;
              font-size: 14px;
              line-height: 22px;
            }
          }
         
          @media only screen and (max-width:1024px){
            
            .product-detail-warpper {
              lost-column:12/12;
            }

            .collapsable_container, .details {
      
              & .social-icon-section {
                width: 100%;
                box-sizing: border-box;
              }

            }

            .add_to_cart {
              position: fixed;
              bottom: -20px;
              left: 0;
              z-index: 99;
              padding: 24px 0;
            }

            .left {
              width: 100%;
            }

            .name {
              font-size: 20px;
              width: 88%;
            }

            .short_description {
              font-size: 13px;
              width: 88%;
            }

            .price {
              margin-top: -30px !important;
            }

          }

        `}</style>
        <div className="product-detail-main">
          <div className="details">
            <div className="left">
              <h2 className="name">{product.name}</h2>
              <p className="short_description">{product.short_description}</p>
              <p className="price">{product.price}</p>
            </div>
            <form onSubmit={this.handleAddtoCart.bind(this)}>
              <input type="hidden" name="productId" id="productId" value={this.state.id} />
              <input type="hidden" name="quantity" id="quantity" value="5" />
              <button className="add_to_cart"><span>Add to Shopping Bag</span></button>
            </form>
            <p className="notifications">
              {product.delivery_text}
            </p>
          </div>

          <div className="collapsable_container">
            <Collapsible trigger="description" transitionTime={160} easing="ease-in-out">
              <div className="collapsable-text">Ultra-thin 8mm rose gold-plated case. Diameter: 38mm.</div>
            </Collapsible>

            <Collapsible trigger="Product details" transitionTime={160} easing="ease-in-out">
              <div className="attribute-main">
                <span>Case</span>
                <div>Ultra-thin 8mm rose gold-plated case. Diameter: 38mm</div>
                <span>Strap</span>
                <div>Rose gold-plated stainless steel mesh strap. The strap can be
                easily adjusted to a minimum length (perimeter) of 15.5 cm and
                a maximum of 20 cm.The strap is interchangeable within the
                Mercer, Gramercy & Bowery collection.</div>
                <span>Dial</span>
                <div>Eggshell white dial detailed with rosegold hands and indexes.</div>
                <span>Movement</span>
                <div>Durable Japanese Quartz movement.</div>
                <span>Warranty</span>
                <div>Two years from the date of purchase.</div>
                <span>Water-resistance</span>
                <div>3 ATM water-resistant.</div>
              </div>
            </Collapsible>

            <Collapsible trigger="Shipping & Return" transitionTime={160} easing="ease-in-out">
              <div className="collapsable-text">Free shipping worldwide. Delivery time: 2-4 business days.</div>
            </Collapsible>
            <div className="social-icon-section">
              <a href=""><HeartIcon /></a>
              <a href=""><FacebookIcon /></a>
              <a href=""><PinterestIcon /></a>
            </div>
            <Collapsible trigger="How to change straps" transitionTime={160} easing="ease-in-out" triggerClassName="close-trigger" triggerOpenedClassName="open-trigger">
              <div className="collapsable-text">Rose gold-plated stainless steel mesh strap. The strap can be
              easily&#8203; &#8203;adjusted to a minimum length (perimeter) of 15.5 cm and
              a maximum of 20 cm.&#8203; The strap is interchangeable within the Mercer,
              Gramercy &amp; Bowery collection.</div>
            </Collapsible>
          </div>
        </div>
      </div>
    );
  }
}


ProductDetail.propTypes = {
  id: PropTypes.string.isRequired,
  updateCartLineItem: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
};

const ProductDetailComponent = compose(
  graphql(updateCartLineItem, {
    props: ({ mutate }) => ({
      updateCartLineItem: (cartId, productId, quantity) => mutate({
        variables: { cartId, productId, quantity },
      }),
    }),
  }),
  graphql(getProduct, {
    options: props => ({
      variables: { id: +props.id },
    }),
  }),
)(ProductDetail);

export default ProductDetailComponent;
