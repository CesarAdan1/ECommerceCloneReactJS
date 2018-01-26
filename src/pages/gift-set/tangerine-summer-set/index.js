import withData from '../../../lib/withData';
import Layout from '../../../components/layout';
import TangerineSummerSet from '../../../components/gift-set/tangerine-summer-set/TangerineSummerSet';


export const Element = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout currentPath={url && url.pathname} lang={url.query.lang}>
    <div className="common-row">
      <TangerineSummerSet lang={url.query.lang} />
    </div>
  </Layout>
);

export default withData(Element);
