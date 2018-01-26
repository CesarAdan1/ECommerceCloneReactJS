import { PropTypes } from 'prop-types';
import { Link } from '../../../config/routes';

const FooterNavigationLink = ({ children, href, currentPath, className, ...props }) => {
  const classes = [];
  if (className) classes.push(className);

  return (
    <Link href={href} {...props}><a className={classes.join(' ')}>{children}</a></Link>
  );
};

FooterNavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
  currentPath: PropTypes.string.isRequired,
  className: PropTypes.node, // eslint-disable-line react/require-default-props
};

export default FooterNavigationLink;
