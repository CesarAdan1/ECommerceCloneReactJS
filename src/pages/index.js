import Layout from '../components/layout';
import withData from '../lib/withData';

import PopulairProducts from '../components/PopulairProducts';
import PhotoSlurpSection from '../components/home/PhotoSlurpSection';
import BehindBrand from '../components/home/BehindBrand';
import FifteenMinWith from '../components/home/15MinWith';

export const IndexPage = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout lang={url.query.lang} currentPath={url && url.pathname} topBannerImage={'/static/images/banner-bg.png'}>
    <PopulairProducts lang={url.query.lang} />
    <BehindBrand lang={url.query.lang} />
    <FifteenMinWith lang={url.query.lang} />
    <PhotoSlurpSection />
  </Layout>
);

export default withData(IndexPage);
