import NextHead from 'next/head';
import PropTypes from 'prop-types';

const Head = ({ title }) => (
  <NextHead>
    <title>{ title }</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="shortcut icon" href="/static/favicon/favicon.ico" type="image/x-icon" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </NextHead>
);

Head.propTypes = {
  title: PropTypes.string,
};

Head.defaultProps = {
  title: '',
};

export default Head;
