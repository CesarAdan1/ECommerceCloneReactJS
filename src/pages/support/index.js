import withData from '../../lib/withData';
import Layout from '../../components/layout';
import SupportLists from '../../components/support/SupportLists';

export const Element = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout currentPath={url && url.pathname} lang={url.query.lang}>
    <SupportLists lang={url.query.lang} />
  </Layout>
);

export default withData(Element);
