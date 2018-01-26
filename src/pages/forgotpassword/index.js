import withData from '../../lib/withData';
import Layout from '../../components/layout';
import ForgotPasswordForm from '../../components/login/ForgotPasswordForm';


export const Element = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout currentPath={url && url.pathname} lang={url.query.lang}>
    <ForgotPasswordForm lang={url.query.lang} />
  </Layout>
);

export default withData(Element);
