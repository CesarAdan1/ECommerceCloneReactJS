import withData from '../../lib/withData';
import Layout from '../../components/layout';

const Vimeo = require('react-vimeo');

export const Element = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout currentPath={url && url.pathname} lang={url.query.lang}>
    <style jsx global>{`
    .background-header-banner {
      lost-column: 12/12;
      background-size: cover;
      height: 800px !important;
    }      

    .banner-info-box {
      lost-column: 4/12;
      padding: 0 0 0 10%;
      position: absolute;
      bottom: 23%;

      & h2 {
        font-weight: bold;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: #ffffff;
      }

      & h3 {
        color: #FFFFFF;
        font-size: 48px;
        font-family: 'publico';
        font-weight: bold;
        padding: 10px 0 0 0;
        margin: 0;
      }

      & p {
        lost-column: 10/12;
        color: #FFFFFF;
        font-size: 15px;
        line-height: 180%; 
      }
    }

    .full-row {
      lost-column: 12/12;
    }

    

    .full-width-image {
      & img {
        lost-column: 12/12;
      }
    }

    .content-left-row {
      lost-column: 4.83/12;
      padding: 5%;

      & .section-title {
        font-size: 28px;
        padding-left: 16%;
      }


    }

    .time-title {
      color: #3c3c3c;
      font-weight: bold;
      text-align: left;
      letter-spacing: 1px;
      font-family: 'publico';
      padding-left: 16%;
    }

    .content-center-row {
      margin: 0 auto;
      lost-column: 3.83/4.83;
      padding-top: 25%;

      & .time-title-second {
        padding-left: 0;
        color: #3c3c3c;
        font-weight: bold;
        text-align: left;
        letter-spacing: 1px;
        font-family: 'publico';
      }


      & .normal-paragraph-text {
        font-size: 15px;
        padding-left: 16%;
      }

      & .section-title-second {
        line-height: 120%;
        font-weight: bold;
        color: #161616;
        letter-spacing: 1px;
        font-size: 28px;
      }

    }

    .full-row-content-center {
      lost-center: 650px;
      text-align: center;
      padding: 6% 0;


      & .section-title {
        font-size: 30px;
      }
    }

    .content-right-row {
      lost-column: 4.83/12;
      padding: 5%;

      & p {
        font-size: 15px;
      }
    }

    .move-right {
      float: right !important;
    }

    .image-right-row {
      lost-column: 6/12;

      & img {
        lost-column: 6/6;
      }  
    }

    .image-left-row {
      lost-column: 6/12;

      & img {
        lost-column: 6/6;
      }      
    }

    .campaign-box {
      lost-column: 5/12;
      padding: 108px 0 0 10%;

      & h2 {
        color: #FFFFFF;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 4px;
        font-size: 12px;
        margin: 0;
      }

      & h3 {
        color: #FFFFFF;
        font-size: 46px;
        font-family: 'publico';
        font-weight: bold;
        margin: 20px 0 0;
      }

      & p {
        color: #FFFFFF;
        line-height: 180%;
        font-size: 15px;        
      }
    }

    .black-text-gray-boder-btn {
        letter-spacing: 4px;
        font-size: 11px;
        color: #3c3c3c;
        padding-bottom: 5px;
        font-weight: bold;
        margin-bottom: 40px;
        text-transform: uppercase;

        & a {
          border-bottom: 2px solid #ccc;
          padding-bottom: 5px;
        }
    }    

    .mobile-content-center {
      padding-left: 50px;
    }

    .space-btn-95 {
      margin-top: 95%;
    }

    .space-btn-right-50 {
      margin-top: 50px;
      float: left;
    }

    .space-btn-left-50 {
      margin-top: 50px;
      padding-left: 16%;
      float: left;
    }

    .vimeo {
      width: 100%;
      float: left;
      height: 800px;
    }

    .vimeo-image {
      background-size: cover;
      position: relative;
    }

    .vimeo-loading { 
      display:none;
    }

    .vimeo-play-button {
      background: url(/static/images/video-play-button/video-play-button-w.png) no-repeat center;
      left: 10%;
      position: absolute;
      height: 50px;
      width: 200px;
      border: 0;
      outline: 0;
      top: 79%;
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

    @media only screen and (max-width: 1024px) {
            
      .campaign-box {
        lost-column: 8/12;
      }

      .banner-info-box {
        lost-column: 10.8/12;
        & h3 {
          font-size: 36px;
        }
      }

      .content-left-row {
        lost-column: 10.8/12;
      }

      .content-center-row {
        & .section-title-second {
          line-height: 120%;
          font-weight: bold;
          color: #161616;
          letter-spacing: 1px;
          font-size: 28px;
        }
      }
     
      .image-right-row {
        width: 100%;
      }

      .image-left-row {
        width: 100%;        
      }
      
      .content-right-row {
        lost-column: 9.6/12; 
      }


      .full-width-image {
        & img {
          min-height: 600px;
          object-fit: cover;
        }
      }

      .mobile-content-center {
        padding-left: 50px;
      }

      .mobile-center-row {
        lost-column: 4.5/4.83;
      }

      .full-row-content-center {
        width: 320px;
      }

      .move-right {
        float: left !important;
      }

      .top-space {
        margin-top: 70px;
      }

      .vimeo {
        height: 350px;
      }

      .vimeo-embed iframe {
        height: 350px;
      }

      .background-header-banner {
        height: 350px !important; 
      }

    }

    
    @media screen and (max-width: 360px){
      .campaign-box {
        lost-column: 9/12;

        & h3 {
          font-size: 36px;
        }
      }
    }
    
    `}</style>
    <section className="background-header-banner">
      <Vimeo videoId={204851199} autoplay={false} />
      <div className="banner-info-box">
        <hgroup>
          <h3>Indulge yourself in the chic luxury of The Upper East Side</h3>
        </hgroup>
        <p>Introducing the Upper East Side collection</p>
      </div>
    </section>
    <div>
      <div className="full-row">
        <div className="content-right-row move-right mobile-content-center">
          <div className="content-center-row mobile-center-row">
            <p className="section-title-second">Give your wardrobe a make-over with the haute elegance of The Upper East Side</p>
          </div>
        </div>
        <div className="image-left-row">
          <img src="https://i.rosefieldwatches.com/products/campaign/upper-east-side/upper-east-side-1.jpg" alt="" />
        </div>
      </div>
      <div className="full-row">
        <div className="content-left-row">
          <div className="content-center-row">
            <p className="normal-paragraph-text">The Upper East Side is the most iconic,
            historical face of New York, with it’s stately apartment blocks and uniformed doormen.
            It’s marble floors. Dazzlingly high ceilings. And the elegant upper-class. Inspired
            by this luxury, we introduce The Upper East Side Collection, six chic watches with
            glossy link bracelet and opulent feel.</p>
            <div className="black-text-gray-boder-btn space-btn-left-50">
              <a href="">Shop this look</a>
            </div>
          </div>
        </div>
        <div className="image-right-row">
          <img src="https://i.rosefieldwatches.com/products/campaign/upper-east-side/upper-east-side-2.jpg" alt="" />
        </div>
      </div>
    </div>
    <div className="full-row top-space">
      <div className="full-width-image">
        <img src="https://i.rosefieldwatches.com/products/campaign/upper-east-side/upper-east-side-3.jpg" alt="" />
      </div>
    </div>
    <div className="full-row">
      <div className="full-row-content-center">
        <p className="section-title">Sophisticated with a cool and up-to-date look. Stay classy</p>
      </div>
    </div>
    <div className="full-row top-space">
      <div className="full-width-image">
        <img src="https://i.rosefieldwatches.com/products/campaign/upper-east-side/upper-east-side-4.jpg" alt="" />
      </div>
    </div>
    <div className="full-row">
      <div className="full-row-content-center">
        <p className="section-title">The glossy stainless steel link bracelet and clean
        dial give this watch a luxurious feel</p>
      </div>
    </div>
    <div className="full-row">
      <div className="content-left-row">
        <div className="content-center-row mobile-center-row">
          <p className="normal-paragraph-text">The Upper East Side is polished and subtly elegant.
          It has a classy feel, with it’s cool and refined look. There are six variations in
          The Upper East Side Collection. Case and stainless steel link bracelet are available
          in three beautiful shades: Silver, Gold and Rose Gold. Choose from a black or creamy
          white dial. A perfectly chic watch bound to be your new favorite. Stay classy.</p>
          <div className="black-text-gray-boder-btn space-btn-left-50">
            <a href="">Shop this Look</a>
          </div>
        </div>
      </div>
      <div className="image-right-row">
        <img src="https://i.rosefieldwatches.com/products/campaign/upper-east-side/upper-east-side-5.jpg" alt="" />
      </div>
    </div>
    <div className="full-row top-space">
      <div className="full-width-image">
        <img src="https://i.rosefieldwatches.com/products/campaign/upper-east-side/upper-east-side-6.jpg" alt="" />
      </div>
    </div>
  </Layout>
);

export default withData(Element);
