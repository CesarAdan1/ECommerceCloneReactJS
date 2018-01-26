import withData from '../../lib/withData';
import Layout from '../../components/layout';
import LoginForm from '../../components/login/LoginForm';


export const Element = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout currentPath={url && url.pathname} lang={url.query.lang} lang={url.query.lang}>
    <LoginForm lang={url.query.lang} />
  </Layout>
);

export default withData(Element);
