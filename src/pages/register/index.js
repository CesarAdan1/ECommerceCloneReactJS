import withData from '../../lib/withData';
import Layout from '../../components/layout';
import RegisterForm from '../../components/register/Form';


export const Element = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout currentPath={url && url.pathname} lang={url.query.lang}>
    <RegisterForm lang={url.query.lang} />
  </Layout>
);

export default withData(Element);
