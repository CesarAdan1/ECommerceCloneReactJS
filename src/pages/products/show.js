import withData from '../../lib/withData';
import Layout from '../../components/layout';
import Slider from '../../components/ProductSlider';
import product from '../../components/dummy_data/product.json';
import ProductDetail from '../../components/product/ProductDetail';
import InstagramSection from '../../components/product/InstagramSection';
import UpSellProduct from '../../components/product/UpSellProduct';


const Vimeo = require('react-vimeo');

export const Element = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout currentPath={url && url.pathname} lang={url.query.lang}>
    <style jsx global>{`

      .detail-main-row {
        float:left;
        lost-column: 12/12;
      }

      .video-main {
        float: left;
        width: 100%;
        position: relative;
        padding-bottom: 15px;
      }

      .vimeo {
        width: 100%;
        float: left;
        height: 800px;
      }

      .vimeo-image {
        background-size: cover;
        position: relative;
        text-align: center;
      }

      .vimeo-loading { 
        display:none;
      }

      .vimeo-play-button {
        background: url(/static/images/video-play-button/video-play-button-w.png) no-repeat center;
        height: 50px;
        width: 200px;
        border: 0;
        outline: 0;
        margin-top: 25%;
        cursor: pointer;
      }

      .vimeo-embed iframe {
        width: 100%;
        height: 800px;
      }

      .vimeo-play-button svg {
        display: none;
      }

      .player .video-wrapper video {
        width: 100%;
        height: 100%;
        padding-right: 0;
        overflow: hidden;
        object-fit: cover;
      }

      @media only screen and (max-width:1024px){
    
        .vimeo {
          height: 300px;
        }

        .vimeo-embed iframe {
          height: 300px;
        }

        .vimeo-play-button {
          margin-top: 38%;        
        }

      }

    `}</style>
    <section className="detail-main-row">
      <Slider images={product.detail_images} />
      <ProductDetail lang={url.query.lang} id={url.query.id} />
    </section>
    <InstagramSection />
    <UpSellProduct />
    <div className="video-main">
      <Vimeo videoId={231380681} autoplay={false} />
    </div>
  </Layout>
);

export default withData(Element);
