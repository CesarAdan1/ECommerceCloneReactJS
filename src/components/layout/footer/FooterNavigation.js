import { PropTypes } from 'prop-types';
import Link from './FooterNavLinks';


const FooterNavigation = ({ currentPath, lang }) => {
  const lableData = require('../../../locale/'+lang+'/translation_label.json');
  return (
    <div className="footer-nav-links">
      <h2>{lableData.NEED_HELP}</h2>
      <Link route="support" params={{ lang }} currentPath={currentPath}>{lableData.CustomerSupport}</Link>
      <Link route="shipping-returns" params={{ lang }} currentPath={currentPath}>{lableData.ShippingReturns}</Link>
      <Link route="stores" params={{ lang }} currentPath={currentPath}>{lableData.Stores}</Link>
      <Link route="login" params={{ lang }} currentPath={currentPath} >{lableData.LogIn_SignUp}</Link>
      <Link route="career" params={{ lang }} currentPath={currentPath}>{lableData.Career}</Link>
    </div>
  );
};

FooterNavigation.propTypes = {
  currentPath: PropTypes.string,
  lang: PropTypes.string,
};

FooterNavigation.defaultProps = {
  currentPath: '/',
  lang: 'ww',
};

export default FooterNavigation;
