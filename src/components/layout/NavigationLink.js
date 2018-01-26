import { PropTypes } from 'prop-types';
import { Link } from '../../config/routes';

const NavigationLink = ({ children, href, currentPath, className, ...props }) => {
  const classes = [];
  if (className) classes.push(className);

  return (
    <Link href={href} {...props}><a className={classes.join(' ')}>{children}</a></Link>
  );
};

NavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
  currentPath: PropTypes.string.isRequired,
  className: PropTypes.node, // eslint-disable-line react/require-default-props
};

export default NavigationLink;
