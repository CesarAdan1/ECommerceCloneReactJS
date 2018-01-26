import Slider from 'react-slick';
import Imgix from 'react-imgix';
import CrossSellProductData from '../dummy_data/crosssell_products.json';

const settings = {
  dots: false,
  infinite: true,
  speed: 250,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  draggable: false,
};
export default () => (
  <section className="common-row">
    <style jsx>{`
      .slick-list {
        padding-top: 46px !important;
       }
      .theme-bg {
        padding-bottom: 70px;
        float:left;
      }
      h1 {
        text-align: center;
        color: #de9c8c;
        margin-bottom: 1.5em;
      }

      .cross-sell-products {
        lost-center: 900px;
        min-height: 550px;
        height: 550px;
        float: left;
        margin: 0 20%;

        & div {
          text-align: center;
          float: left;
        }

        & h4 {
          text-align: center;
          font-size: 20px;
          margin:10px 0 0;
        }
      }

      .product-section {
        margin-bottom: 30px;
        position: relative;

        & a {
          position: relative;
        }

        & a:hover {
          background:url(/static/images/product-bg-hover.jpg) repeat-x left top;          
          float: left;
          width: 100%;
          text-align: center;
          transition: 0.5s;
          -webkit-transition: 0.5s; 
        } 

      }

      .product-section:hover .addbtn {
        visibility: visible;
      }

      .product-section:hover .hover-details {
        visibility: visible;
      }  
      
      .hover-details {
        visibility: hidden;
        lost-column:1/1;
        margin-top: 30px;

        & h3 {
          margin: 0;
          font-size: 24px;
          font-weight: bold;
        }

        & p {
          text-align: center;
          lost-column: 1/1;
          font-size: 14px;
          margin: 0;
        }
      }

      .common-row .addbtn{
        margin: 30px 0;
        visibility: hidden;

        & a {
          float:none;
        }

        & a:hover {
          width: auto;
          float:none;
          background-color:transparent;
        }
      }

      .slick-track {
        padding: 46px 0 0 0;
      }

      @media only screen and (max-width:1024px){
        h1 {
          font-size: 1.8em;
        }   
        .slick-slide img{
          max-width: 90%;
        }  
        .white-black-border-button{
          padding: 8px;
          font-size: 10px;
        }

        .cross-sell-products {
          min-height: 400px;
          height: 400px;

          & h4 {
            font-size: 15px;
          }
        }  
      }

    `}</style>
    <h1>Other customers bought or viewed</h1>
    <div className="cross-sell-products">
      <Slider {...settings}>
        {
          CrossSellProductData.map(products => (
            <div className="product-section">
              <a href="">
                <Imgix src={products.image} type="picture">
                  <Imgix src={products.image} width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                  <Imgix src={products.image} width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                  <Imgix src={products.image} width={210} auto={['compress', 'format']} fit="clip" faces={false} />
                </Imgix>
                <div className="hover-details">
                  <h3>{products.name}</h3>
                  <p>{products.short_description}</p>
                </div>
              </a>
              <h4>{products.price}</h4>
              <div className="common-row addbtn">
                <a href="" className="white-black-border-button"> Add to Cart </a>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  </section>
);
