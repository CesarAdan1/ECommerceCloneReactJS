import Menu from 'react-burger-menu/lib/menus/push';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';

import CartIcon from 'react-icons/lib/fa/cart-arrow-down';
import { Link } from '../../config/routes';
import Collapsible from 'react-collapsible';

const Component = ({ lang }) => (
  <Menu pageWrapId={'page-wrap'} outerContainerId={'__next'} customBurgerIcon={<div />}>
    <style jsx>{`
      .sldebar-login-main {
        width: 99.3%;
        height:41px;
        border: 1px solid #3f3f3f;
      }

      .login, .cart {
        lost-column: 1/2;
        box-sizing: border-box;
        padding: 18px 0;
        text-align: center;
        font-size: 9px;
        color: #fff;
        text-transform: uppercase;
        border-right: 1px solid #3f3f3f;
        letter-spacing:3px;


        & a {
          color: white;
          text-decoration: none;

          & span {
            margin-left: 10px;
          }
        }
      }

      ul {
        list-style: none;
      }

      .flypanels-treemenu :global(a) {
        padding: 18px 8px 6px 32px;
        text-decoration: none;
        font-size: 20px;
        color: #fff;
        display: block;transition: 0.3s;
        letter-spacing: 2px;
        font-family: 'publico';
        font-weight: bold;
      }

      .flypanels-treemenu{
        padding: 20px 20px 20px 0;
        box-sizing: border-box;
      }

    `}</style>
    <style jsx global>{`
      .mobile-submenu-main .Collapsible {
        border-top: 1px solid transparent;
      }

      .mobile-submenu-main .Collapsible__trigger {
        display: block;
        text-decoration: none;
        position: relative;
        padding: 18px 8px 6px 20px;
        margin: 0 5%;
        color: #ffffff;
        font-size: 20px;
        letter-spacing: 2px;
        font-weight: bold;
        cursor: pointer;
        font-family: 'publico';
        text-transform: initial;
      }

      .mobile-submenu-main .Collapsible__trigger.is-open:before {
        content: "";
        background:url(/static/images/mobile-menu-up-arrow.svg) no-repeat;
        height: 13px;
        width: 20px;
        float: right;
        background-size: 60%;
        margin-top: 4px;
      }

      .mobile-submenu-main .Collapsible__trigger.is-closed:before {
        content: "";
        background:url(/static/images/mobile-menu-down-arrow.svg) no-repeat;
        height: 13px;
        width: 20px;
        float: right;
        background-size: 60%;
        margin-top: 4px;
      }

      .mobile-submenu-main .collapsable-text {
        color: #5a5859;
        letter-spacing: 1px;
        font-size: 14px;
        line-height: 22px;

        & .mobile-submenu {
          padding-left: 0;

          & li {
            & a {
              font-size: 13px;
              padding: 10px 8px 6px 20px;
            }
          }
        }


      }
    `}</style>
    <div className="sldebar-login-main">
      <div className="login">login</div>
      <div className="cart">
        <a href="">
          <CartIcon color="white" size="16px" /><span>0</span>
        </a>
      </div>
    </div>

    <nav className="flypanels-treemenu" role="navigation">
      <ul>
        <li className="haschildren">
          <div><Link route="watches" params={{ lang }}><a>Watches</a></Link></div>
        </li>
        <li className="haschildren">
          <div><Link route="straps" params={{ lang }}><a>Straps</a></Link></div>
        </li>
        <li className="haschildren">
          <div><Link route="jewelry" params={{ lang }}><a>Jewelry</a></Link></div>
        </li>
        <li className="haschildren">
          <div className="mobile-submenu-main">
            <Collapsible trigger="World Of Rosefield" transitionTime={160} easing="ease-in-out">
              <div className="collapsable-text">
                <ul className="mobile-submenu">
                  <li><Link route="downtown-chic" params={{ lang }}>Downtown Chic</Link></li>
                  <li><Link route="upper-east-side" params={{ lang }}>Upper East Side</Link></li>
                  <li><Link route="west-village" params={{ lang }}>West Village</Link></li>
                  <li><Link route="campaign" params={{ lang }}>Latest Campaign</Link></li>
                  <li><Link route="15-minutes-with-stephanie" params={{ lang }}>15 Minutes With</Link></li>
                  <li><Link route="myrosefieldmoment" params={{ lang }}>#Myrosefieldmoment</Link></li>
                  <li><Link route="our-story" params={{ lang }}>Our story</Link></li>
                </ul>
              </div>
            </Collapsible>
          </div>
        </li>
        <li className="haschildren">
          <div className="mobile-submenu-main">
            <Collapsible trigger="Service" transitionTime={160} easing="ease-in-out">
              <div className="collapsable-text">
                <ul className="mobile-submenu">
                  <li><Link route="support" params={{ lang }}>Support</Link></li>
                  <li><Link href="" >Contact</Link></li>
                  <li><Link route="stores" params={{ lang }}>Stores</Link></li>
                </ul>
              </div>
            </Collapsible>
          </div>
        </li>
      </ul>
    </nav>
  </Menu>
);

export default reduxBurgerMenu(Component);
