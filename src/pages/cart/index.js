import withData from '../../lib/withData';
import Layout from '../../components/layout';
import ShoppingCart from '../../components/cart/ShoppingCart';
import CrossSellProducts from '../../components/cart/CrossSellProducts';
import ShoppingCartRightText from '../../components/cart/ShoppingCartRightText';
import { Link } from '../../config/routes';

export const Element = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout currentPath={url && url.pathname} lang={url.query.lang}>
    <section className="common-row">
      <style jsx>{`
        
        .theme-bg {
          lost-column: 12/12;
          padding: 50px 0;
        }

        .center-section {
          lost-center: 1386px;
        }

        .right-cart-section {
          lost-column: 3/12;         
        }

        .cart-button {
          background:#74b073;        
          width:100%;
          float: left;
          text-align:center;
          font-weight:bold;
          letter-spacing:4px;
          color:#fff;
          text-transform:uppercase;
          font-size:12px;
          padding:24px 0;
        }

        .continue-shopping-btn {
          color: #de9c8c;
          float: left;
          width: 100%;
          text-align: center;
          font-weight: bold;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-size: 12px;
          padding:25px 0 20px;
        }

        .cart-company-logos {
          float: left;
          lost-column: 12/12;
          margin: 20px 0 0 0;
          padding: 0 0 65px 0;
          text-align: center;

          & li {
            margin: 0px;
            padding-left: 35px;
            padding-right: 35px;
            display: inline-block;
            vertical-align: middle;
          }
        }

        .mobile-info-list {
          display: none;
        }

        @media only screen and (max-width:1024px){

          .theme-bg {
            padding: 0;
          }

          .center-section {
            lost-center: 100%;
          }

          .cart-company-logos {
            display: none;
          }

          .cross-sell-main {
            display: none;             
          }

          .right-cart-section {
            lost-column: 12/12;
          }

          .desktop-info-list {
            display: none;
          }

          .mobile-info-list {
            display: block;
            float: left;
            margin: 0 10% 0;
          }

        }        

      `}</style>
      <div className="theme-bg">
        <div className="center-section">
          <ShoppingCart />
          <div className="right-cart-section">
            <div className="desktop-info-list">
              <ShoppingCartRightText lang={url.query.lang} />
            </div>
            <div>
              <Link route="checkout" params={{ lang:url.query.lang }}>
                <a className="cart-button">To the checkout</a>
              </Link>
            </div>
            <Link route="watches" params={{ lang:url.query.lang }}>
              <a className="continue-shopping-btn">Continue Shopping</a>
            </Link>
            <div className="mobile-info-list">
              <ShoppingCartRightText lang={url.query.lang} />
            </div>

          </div>
        </div>
      </div>
      <div className="cart-company-logos">
        <div className="center-section">
          <ul>
            <li><img src="/static/images/paypal-cart-logo.jpg" alt="" /></li>
            <li><img src="/static/images/maestro-cart-logo.jpg" alt="" /></li>
            <li><img src="/static/images/mastercard-cart-logo.png" alt="" /></li>
            <li><img src="/static/images/visa-cart-logo.jpg" alt="" /></li>
            <li><img src="/static/images/discover-cart-logo.jpg" alt="" /></li>
            <li><img src="/static/images/american-express-cart-logo.jpg" alt="" /></li>
            <li><img src="/static/images/group-cart-logo.jpg" alt="" /></li>
            <li><img src="/static/images/klarna-cart-logo.jpg" alt="" /></li>
            <li><img src="/static/images/ideal_betalen-cart-logo.jpg" alt="" /></li>
          </ul>
        </div>
      </div>
      <div className="cross-sell-main">
        <CrossSellProducts />
      </div>
    </section>
  </Layout>
);

export default withData(Element);
