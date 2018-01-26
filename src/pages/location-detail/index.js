import withData from '../../lib/withData';
import Layout from '../../components/layout';
import StoreDetails from '../../components/location-detail/StoreDetails';
export const Element = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout currentPath={url && url.pathname} lang={url.query.lang}>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyCsCOtKLftrYdpihUYDuUQMS5OxR5KwbN8"></script>
    <div className="commn-row">
        <StoreDetails lang={url.query.lang} />
    </div>
  </Layout>
);

export default withData(Element);
