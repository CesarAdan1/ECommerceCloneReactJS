import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import Imgix from 'react-imgix';
import Slider from 'react-slick';
import React from 'react';
import { Link } from '../../../config/routes';
import {
  PopupboxManager,
  PopupboxContainer,
} from 'react-popupbox';

const settings = {
  dots: false,
  infinite: true,
  speed: 250,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 699,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

const strapsettings = {
  dots: true,
  infinite: false,
  speed: 250,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

/**
   * Store Lacator Map section generate here
 */
class TangerineSummerSet extends React.Component {
/**
* variable declaration
*/
  constructor(props) {
    super(props);
    this.state = {
      lang: props.lang,
    };
  }

  /**
  * Open product popup
  * @function
  * @returns popup with content
  */
  openPopupbox() {
    const content = (
      <div>
        <div className="desktop-popup-main">
          <div className="popup-right-section">
            <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-black-black.png" type="picture">
              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-black-black.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-black-black.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-black-black.png" width={300} auto={['compress', 'format']} fit="clip" faces={false} />
            </Imgix>
          </div>
          <div className="popup-left-section">
            <h2>Collection</h2>
            <h3>The Mercer</h3>
            <h4>White - Silver / 38mm</h4>
            <span className="regular-price">$109</span>
            <p className="popup-outofstock">Out of stock</p>
            <div className="tab-main-section">
              <div className="tab-main-row">
                <div className="popup-tab-row">
                  <a className="popup-active-tab" href="">Description</a>
                </div>
                <div className="popup-tab-row">
                  <a href="" id="pddetaillinkid-191">Product Details</a>
                </div>
              </div>
              <div className="description-tab">
                <h5>The Mercer</h5>
                <p>Paying tribute to an exciting street in one of NYC’s signature
                shopping destinations, the stainless steel mesh straps in the MERCER collection
                create a luxurious timepiece for an exquisite fashion look.</p>
                <p className="delivery-text">
                  <strong>Delivery !</strong>
                  Free shipping worldwide. Delivery time: 2-4 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-popup-main">
          <div className="mobile-popup-image">
            <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-black-black.png" type="picture">
              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-black-black.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-black-black.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-black-black.png" width={300} auto={['compress', 'format']} fit="clip" faces={false} />
            </Imgix>
          </div>
          <div className="mobile-tab-section">
            <div className="description-tab">
              <h5>The Mercer</h5>
              <span className="regular-price">$109</span>
              <p>Paying tribute to an exciting street in one of NYC’s signature
                shopping destinations, the stainless steel mesh straps in the MERCER collection
                create a luxurious timepiece for an exquisite fashion look.
              </p>
              <p className="popup-outofstock">Out of stock</p>
              <p className="delivery-text">
                <strong>Delivery !</strong>
                Free shipping worldwide. Delivery time: 2-4 business days.
              </p>
            </div>
            <div className="detail-tab">
              <h5>Product Details</h5>
              <div className="attribute-row">
                <h4>Case</h4>
                <p>Ultra-thin 8mm silver-plated case. Diameter: 38mm</p>
                <h4>Strap</h4>
                <p>Silver-plated stainless steel mesh strap. The strap can be easily&#8203; &#8203;
                adjusted to a minimum length (perimeter) of 15 cm and a maximum of 21 cm.&#8203;
                The strap is interchangeable within the Mercer, Gramercy &amp; Bowery
                collection.
                </p>
                <h4>Dial</h4>
                <p>Eggshell white dial detailed with silver hands and indexes.</p>
                <h4>Movement</h4>
                <p>Durable Japanese Quartz movement.</p>
                <h4>Warranty</h4>
                <p>Two years from the date of purchase.</p>
                <h4>Water-resistance</h4>
                <p>3 ATM water-resistant.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  }

  /**
    * Rendor
    * @render
    * @returns {Object} Return map
    */
  render() {
    return (
      <div>
        <style jsx>{`
          .background-header-banner {
            background: url("https://i.rosefieldwatches.com/products/gift-set/tangerine-summer-set/desktop_top-banner.jpg")no-repeat center;
            lost-column: 12/12;
            background-size: cover;
            background-position: 34% -877px !important;
            height: auto;
          }

          .banner-info-box {
            lost-center: 1000px;
            margin: 0 auto;
            margin-top: 40px;

            & h2 {
              font-weight: bold;
              letter-spacing: 4px;
              text-transform: uppercase;
              color: #ffffff;
            }

            & h3 {
              lost-center: 700px;
              color: #FFFFFF;
              font-size: 48px;
              font-family: 'publico';
              font-weight: bold;
              padding: 10px 0 0 0;
              margin: 0;
            }

            & p {
              lost-center: 600px;
              color: #FFFFFF;
              font-size: 15px;
              line-height: 180%; 
            }
          }

          .main-background-section {
            lost-center: 1200px;
            background-color: #ffffff;
            margin-top: 50px;

            & .step-one-wrapper {
              float: left;
              padding: 6% 4% 1% 4%;
              width: 92%;
            }

            & .step-one {
              & h3 {
                font-size: 15px;
                color: #8F8F8F;
                letter-spacing: 7px;
                margin: 0;
                width: auto;
                margin: 0 30px 0 0;
                padding: 4px 0 0;
              }

              & h4 {
                font-size: 36px;
                color: #3c3c3c;
                font-family: 'publico';
                font-weight: bold;
                margin: -6px 0;
                width: auto;
              }
            }

            & .product-slider-main {
              width: 100%;
              float: left;
              margin-top: 60px;

              & .product-item {
                padding: 10px;

                & .product-item-inner {
                  border: 3px solid #f6f4f5;
                  float: left;
                  padding: 50px 0;

                  & .item-info {
                    padding: 0 20px 0 20px;
                    text-align: left;
                    width: 75%;
                    float: left;

                    & h4 {
                      color: #3c3c3c;
                      font-size: 20px;
                      font-family: 'publico';
                      font-weight: bold;
                      margin-bottom: 0;
                      letter-spacing: 1px;
                    }

                    & p {
                      color: #494748;
                      font-size: 16px;
                      letter-spacing: 2px;
                      margin: 0;
                      width: 100%;
                    }
                  }

                  & a {
                    margin-top: 35px;
                    float: left;
                  }

                  & .add-to-cart-btn {
                    color: #3c3c3c;
                    letter-spacing: 4px;
                    font-size: 11px;
                    padding: 15px 0 0 0;
                    font-weight: bold;
                    text-transform: uppercase;
                    float: left;
                    margin-top: 15px;
                    width: 100%;

                    & a {
                      border-bottom: 4px solid #3c3c3c;
                      padding-bottom: 4px;
                      float: none;
                    }

                  }
                }

              }

              & .product-item-inner:hover {
                border: 3px solid #fed6cc;
              }

            }

            & .step-two-wrapper {
              float: left;
              padding: 6% 4% 1% 4%;
              width: 92%;
              border-top: 1px solid #eaeaea;
              margin-top: 60px;
            }

            & .step-two {
              & h3 {
                font-size: 15px;
                color: #8F8F8F;
                letter-spacing: 7px;
                margin: 0;
                width: auto;
                margin: 0 30px 0 0;
                padding: 4px 0 0;
              }

              & h4 {
                font-size: 36px;
                color: #3c3c3c;
                font-family: 'publico';
                font-weight: bold;
                margin: -6px 0;
                width: auto;
              }
            }

            & .size-tab-main{
              float: right;
              margin-top: 30px;

              & .size-tab-row {                  
                  float: right;
                  margin-left: 40px;

                & ul {
                  padding: 0;
                  
                  & li {
                    border: 1px solid #c9c9c9;
                    display: inline-block;
                    padding: 0 2px 0 2px;
                    box-sizing: border-box;
                    height: 46px;
                    
                    & .tab-link {
                      padding: 0 20px;
                      border: 2px solid #ffffff;
                      margin-top: 2px;
                      float: left;
                      height: 36px;
                      line-height: 36px;
                      color: #494748!important;
                      font-weight: normal;
                      text-transform: uppercase;
                      letter-spacing: 4px;
                      font-size: 12px;
                    }

                    & .tab-link.tab-link-active {
                      border: 2px solid #fbdad2;

                    }
                  }

                  & li:nth-child(2) {
                    border-left: none !important;
                  } 
                }
              }

              & p {
                font-size: 11px;
                color: #494748;
                text-transform: uppercase;
                letter-spacing: 3px;
                margin: 28px 0;
              }
            }

            & .strap-main {
              margin-top: 30px;

              & .product-item {
                width: 30.97%;
                float: left;
                margin: 0 6px;
                text-align: center;
                padding: 40px 0;
              }
            }

          }
          .step-three-main {
            lost-center: 1200px;
            margin: 0 auto;

            & .step-three-wrapper {
              float: left;
              padding: 6% 4% 3% 4%;
              width: 92%;

              & .step-three {
                & h3 {
                  font-size: 15px;
                  color: #8F8F8F;
                  letter-spacing: 7px;
                  margin: 0;
                  width: auto;
                  margin: 0 30px 0 0;
                  padding: 4px 0 0;
                }

                & h4 {
                  font-size: 36px;
                  color: #3c3c3c;
                  font-family: 'publico';
                  font-weight: bold;
                  margin: -6px 0;
                  width: auto;
                }
              }

              & .total-price-section {
                float: right;

                & .pink-black-button {
                  float: right;
                  margin: 0;
                  padding: 22px 50px 28px;

                  & a {
                    border-bottom: 4px solid #3c3c3c;
                    padding-bottom: 5px;
                  }
                }

                & h4 {
                  color: #3b3b39;
                  font-size: 42px;
                  margin-right: 55px;
                  margin-top: 3px;
                  float: right;
                  width: auto;
                  font-weight: normal;
                }

              }

              & .cart-main {
                margin-top: 30px;
                float: left;
                width: 100%;

                & .cart-row {
                  float: left;
                  width: 100%;
                  margin-bottom: 20px;

                  & .product-img {
                    width: 12%;
                    float: left;
                  }

                  & .product-info-box {
                    width: 79%;
                    float: left;

                    & h4 {
                      color: #3c3c3c;
                      font-size: 22px;
                      font-family: 'publico';
                      font-weight: bold;
                      margin-bottom: 0;
                      letter-spacing: 1px;
                    }

                    & p {
                      color: #494748;
                      font-size: 16px;
                      letter-spacing: 2px;
                      margin: 0;
                      width: 100%;
                    }

                  }

                  & p {
                    width: 8%;
                    float: left;
                    font-size: 26px;
                    color: #3b3b39;
                  }

                  & .chosse-btn {
                    color: #3c3c3c;
                    font-weight: bold;
                    letter-spacing: 3px;
                    font-size: 11px;
                    text-transform: uppercase;


                    & a {
                      border-bottom: 4px solid #3c3c3c;
                      padding-bottom: 4px;
                    }
                  }

                }
                
              }

            }


          }

          .bottom-banner-section {
            float: left;
            width: 100%;

            & .background-bottom-banner {
              background: url("https://i.rosefieldwatches.com/products/gift-set/tangerine-summer-set/desktop_bottom-banner.jpg")no-repeat center;
              background-attachment: fixed;
              background-size: cover;
              overflow: hidden;
              width: 100%;
              min-height: 500px;
              position: relative;

              & .bottom-banner-wrapper{
                width: 92%;
                margin: 0 auto;

                & h4 {
                  font-size: 46px;
                  font-family: 'publico';
                  font-weight: bold;
                  color: #ffffff;
                  padding: 280px 0 0 50px;
                }
              }
              
            } 
          }

          .desktop-strap-section {
            display: block;
          }

          .mobile-strap-section {
            display: none; 
          }

          

          @media only screen and (max-width:1024px){
              
            

            .main-background-section{
              padding-bottom: 20px;

              & .product-slider-main {
              

              & .product-item {
                

                & .product-item-inner {

                  & .add-to-cart-btn {
                    padding: 0 30px;
                    box-sizing: border-box;
                    
                    & a {
                      padding: 20px 0;
                      border: 3px solid #cacaca;
                      float: none;
                      width: 100%;
                      margin: 0 auto;
                      display: block;

                      & a:hover {
                        border: 3px solid #fed6cc;
                        background-color: #fed6cc;
                        color: #3c3c3c;
                      }
                    }

                  }
                }

              }

            }
            }
            

            .main-background-section {
              margin-top: 0;

              & .step-one-wrapper {
                padding: 0;
                width: 100%;

                & .step-one {
                  & h3 {
                    float: left;
                    padding: 30px 36px 7px 36px;
                    width: 100%;
                    box-sizing: border-box;
                  }

                  & h4 {
                    float: left;
                    width: 100%;
                    font-size: 30px;
                    letter-spacing: 2px;
                    padding: 10px 36px 0 36px;
                    box-sizing: border-box;
                  }
                }
              }

              & .size-tab-main{
                float: left;
                width: 99.9%;

                & .size-tab-row {                  
                  
                  float: left;
                  margin-left: 0;
                  width: 100%;
                  border-left:0;
                  border-right:0;

                  & ul {
                                        
                    & li {
                      width: 50%;
                      text-align: center;
                      border-left: 0;
                      border-right: 0;
                      box-sizing: border-box;
                      
                    }

                    & li:nth-child(2) {
                      border-left: 1px solid #c9c9c9 !important;                      
                    } 
                  }
                }

                
                & p {
                  margin-top: -90px;
                  padding-left: 5px;
                  box-sizing: border-box;
                  width: 85%;
                  margin-left: 36px;
                }
              }


            

              & .step-two-wrapper {
                width: 100%;
                padding: 0;
              }

             

              & .step-two{
                & h3 {
                  float: left;
                  padding: 30px 36px 7px 36px;
                  width: 100%;
                  box-sizing: border-box;
                }

                & h4 {
                  float: left;
                  width: 100%;
                  font-size: 32px;
                  letter-spacing: 2px;
                  padding: 10px 36px 0 36px;
                  box-sizing: border-box;
                }
              }

              & .product-slider-main {
                
                margin-top: 0;

                & .product-item {               

                  & .product-item-inner {
                    padding: 40px 0;

                    & .item-info {
                      width: 63%;
                      padding: 0 20px 0 30px;

                      & p{
                        font-size: 14px;
                      }
                    }
                  }
                  
                }
              }


            }  

            .step-three-main {
              width: 100%;
              margin-bottom: 14px;

              & .step-three-wrapper {
                width: 99.5%;
                padding: 0;

                & .cart-main {
                  width: 85%;
                  margin-left: 38px;
                  float: left;

                  & .cart-row {


                    & .product-img {
                      width: 18%;
                    }

                    & .product-info-box {
                      width: 71%;
                      margin: 5px 0 5px 20px;

                      & h4 {
                        margin-top: 8px;
                        font-size: 20px;
                      }
                    }

                    & p {
                      width: 71%;
                      margin: 0 0 0 20px;
                      font-size: 20px;
                      float: left;
                    }
                  }
                }

                & .total-price-section {
                  margin: 50px 0 0;
                  float: left;
                  border: 1px solid #cacaca;

                 & .pink-black-button {
                    float: right;
                    padding: 22px 0 28px;
                    width: 50%;
                  }

                  & h4 {
                    margin: 15px 0 0;
                    float: right;
                    width: 50%;
                    text-align: center;
                    font-size: 30px;
                  }
                }

                & .step-three {
                   
                  & h3 {
                    float: left;
                    padding: 30px 36px 7px 36px;
                    width: 100%;
                    box-sizing: border-box;
                    margin: 0;
                  }

                  & h4 {
                    float: left;
                    width: 100%;
                    font-size: 32px;
                    letter-spacing: 2px;
                    padding: 10px 36px 0 36px;
                    box-sizing: border-box;
                    margin: 0;
                  }
                }
              }
            }

            .banner-info-box {
              width: 100%;
              margin: 50px 0 0;

              & hgroup {
                padding: 0 30px 60px 30px;
                float: left;
              }

              & h3 {
                font-size: 38px;
              }

              & .banner-text {
                background: #ffffff;
              }

              & p {
                color: #494748;
                padding: 50px 30px;
              }
            }

          }

          @media only screen and (max-width:768px){
          .background-header-banner {
              background: url("https://i.rosefieldwatches.com/products/gift-set/tangerine-summer-set/mobile-top-banner.jpg")no-repeat;
              lost-column: 12/12;
              background-position: 40% -8%!important;
              background-repeat: no-repeat!important;
            }

          }

          @media only screen and (max-width:699px){

            .main-background-section {
              
              & .product-slider-main {

                & .product-item {               
                  margin: 0;

                  & .product-item-inner {
                    border: none;
                    width: 100%;

                    & a {
                      float: right;
                      padding-right: 30px;
                    }
                  }

                  & .product-item-inner:hover {
                    border: none;
                  }

                }
              }
     
            }

            .desktop-strap-section {
              display: none;
            }

            .mobile-strap-section {
              display: block; 
            }

            .bottom-banner-section {
              

              & .background-bottom-banner {
                background-attachment: scroll;

                & .bottom-banner-wrapper{

                  & h4 {
                    font-size: 34px;
                    padding: 280px 0 0 28px;
                    width: 80%; 
                  }
                }
                
              } 
            }

          }

          @media only screen and (max-width:449px){
            
            .step-three-main {              
              & .step-three-wrapper {                
                & .cart-main {
                  & .cart-row {
                    & p {
                      float: right;
                      line-height: 160%;
                      width: 76%;
                    }
                  }
                }
              }
            }

          }          

        `}</style>
        <style jsx global>{`
          .slick-slide {            
            padding: 40px 0;
            margin: 0;
            box-sizing: border-box;
          }

          .slick-prev {
            left: -34px !important;
          }

          .slick-prev,.slick-next{
            top: 47% !important;
            z-index: 1;
          }

          .slick-next {
            right: -30px !important;
          }


          .desktop-popup-main {
            max-height: 50%;
            
            & .popup-right-section {
              float: right;
              width: 36%;
              text-align: center;

              & img {
                border: 1px solid #f0f0f0;
                padding: 30px 20px;
              }
            }

            & .popup-left-section {
              float: left;
              width: 60%;

              & h2 {
                font-size: 13px;
                text-transform: uppercase;
                letter-spacing: 4px;
                color: #3c3c3c;
                margin-bottom: 1.5%;
                font-weight: bold;
                float: left;
              }

              & h3 {
                font-size: 46px;
                font-family: 'publico';
                font-weight: bold;
                color: #3c3c3c;
                letter-spacing: 1px;
                float: left;
                margin: 0;
              }

              & h4 {
                color: #494748;
                font-weight: normal;
                letter-spacing: 2px;
                font-size: 16px;
                float: left;
                margin-top: 10px;
              }

              & .popup-outofstock {
                color: #d43c3b;
                font-weight: normal;
                letter-spacing: 1px;
                font-size: 12px;
                float: left;
              }

              & .regular-price {
                letter-spacing: 2px;
                float: left;
                font-size: 16px;
                color: #3b3b39;
                font-weight: 400;
                width: 100%;
              }

              & .tab-main-section {
                float: left;
                padding: 35px 0 0 0;
                width: 100%;

                & .popup-tab-row {
                  float: left;
                  width: 50%;

                  & a {
                    color: #494748;
                    letter-spacing: 4px;
                    font-size: 12px;
                    font-weight: normal;
                    text-transform: uppercase;
                  }

                  & a.popup-active-tab {
                    text-decoration: underline;
                  }
                }

                & .description-tab {
                  & h5 {
                    text-transform: uppercase;
                    letter-spacing: 6px;
                    color: #8F8F8F;
                    font-weight: bold;
                    font-size: 18px;
                  }

                  & p {
                    font-size: 14px;
                    font-weight: normal;
                    color: #8F8F8F;
                    line-height: 184%;                    
                  }

                  & .delivery-text {
                    font-size: 14px;
                    font-weight: normal;
                    color: #7aaa77;
                    line-height: 184%;
                  }
                }

              }
            }
          }

          .popupbox-titleBar {
            border-bottom: 1px solid transparent !important;
          }

          .desktop-popup-main {
            display: block;
          }

          .mobile-popup-main {
            display: none;              
          }


          .category-menu-wrapper {
            margin-top: 30px;
            width: 100%;

            & ul {
              padding-top: 30px;

              & li {
                float: right;
                padding: 0 0 2% 4%;

                & .tab-link {
                  font-size: 11px;
                  color: #494748;
                  text-transform: uppercase;
                  letter-spacing: 2px;
                  padding-bottom: 10px;
                  font-weight: normal;
                }

                & .tab-link-active {
                  border-bottom: 4px solid #3c3c3c;
                  padding-bottom: 4px;
                }

                & .tab-link:hover {
                  border-bottom: 4px solid #3c3c3c;
                  padding-bottom: 4px;
                  cursor: pointer;
                }
              }
            }
          }


          .size-tab-main{

            & .size-tab-row {                  
              & ul {

                & li {
                  & .tab-link {
                    padding: 0 20px;
                    border: 2px solid #ffffff;
                    margin-top: 2px;
                    float: left;
                    height: 36px;
                    line-height: 36px;
                    color: #494748!important;
                    font-weight: normal;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    font-size: 12px;
                    cursor: pointer;
                  }

                  & .tab-link.tab-link-active {
                    border: 2px solid #fbdad2;
                  }
                }
              }
            }
          }

          @media only screen and (max-width:1024px){
            .slick-next {
              right: 21px !important;
            }

            .slick-prev {
              left: 21px !important;
            }

            .desktop-popup-main {
              display: none;
            }

            .mobile-popup-main {
              display: block;

              & .mobile-popup-image{
                text-align: center;
                width: 100%;
                float: left;
              }              

              & img {
                text-align: center;
              }

              & .mobile-tab-section {
                & .description-tab {
                  & h5 {
                    font-size: 18px;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 6px;
                    color: #797979;
                    float: left;
                    width: 100%;
                  }

                  & .regular-price {
                    font-size: 16px;
                    color: #3b3b39;
                    font-weight: 400;
                    letter-spacing: 2px;
                    float: left;
                    width: 100%;
                  }

                  & .popup-outofstock {
                    float: left;
                    width: 100%;
                    color: #d43c3b;
                    letter-spacing: 1px;
                    text-transform: none;
                  }

                  & p {
                    font-size: 14px;
                    font-weight: normal;
                    color: #8F8F8F;
                    line-height: 184%;                    
                  }

                  & .delivery-text {
                    font-size: 14px;
                    font-weight: normal;
                    color: #7aaa77;
                    line-height: 184%;
                  }
                }

                & .detail-tab {
                  width: 100%;
                  float: left;

                  & h5 {
                    font-size: 16px;
                    color: #797979;
                    letter-spacing: 6px;
                    text-transform: uppercase;
                    font-weight: bold;
                    width: 100%;
                    float: left;
                  }

                  & h4 {
                    font-size: 14px;
                    font-weight: bold;
                    text-transform: uppercase;
                    margin-bottom: 10px;
                    color: #747474;
                  }

                  & p {
                    font-size: 14px;
                    font-weight: normal;
                    color: #8F8F8F;
                    line-height: 184%; 
                  }
                }

              }  
            }

            .popupbox-wrapper {
              position: fixed !important;
              top: 5% !important;
              left: 5% !important;
              display: block !important;
              max-width: 90% !important;
              max-height: 70%;
              overflow-y: scroll !important;
            }

            .slick-track {
              float: left;
              width: 100%;
            }


            .category-menu-wrapper {

              & ul {
                float: left;
                width: 100%;
                padding: 0;
                border-top: 1px solid #ccc;

                & li {
                  width: 50%;
                  float: left;
                  padding: 1px;
                  border-bottom: 1px solid #cacaca;
                  border-right: 1px solid #cacaca;
                  box-sizing: border-box;

                  & .tab-link {
                    padding: 16px 2px 14px 2px;
                    float: left;
                    width: 99.8%;
                    text-align: center; 
                    border: 2px solid #ffffff; 
                    box-sizing: border-box;                    
                  }

                  & .tab-link.tab-link-active {
                    border: 2px solid #fbdad2; 
                  }


                  & .tab-link:hover {
                    border-bottom: none;
                    border: 2px solid #fbdad2;
                    margin: 1px;
                    width: 99%;
                    padding: 14px 0 14px 0;
                  }
                }

                & li:nth-child(2) {
                  border-right: none !important;
                }
                 & li:nth-child(4) {
                  border-right: none !important;
                }
                & li:nth-child(6) {
                  border-right: none !important;
                }
              }
            }


            .size-tab-main{
              
              & .size-tab-row {                  
                
                & ul {
                                      
                  & li {
                    
                    & .tab-link {
                      padding: 0 1px;
                      box-sizing: border-box;
                      width: 99.8%;
                      height: 40px;

                    }

                    & .tab-link.tab-link-active {
                      width: 100%;
                    }
                  }

                }
              }

            }

            
          }

          
          @media only screen and (max-width:699px){
            .slick-next {
              right: 40px !important;
            }

            .slick-prev {
              left: 40px !important;
            }

            .slick-prev,.slick-next{
              top: 35% !important;
            }

            .slick-dots{
              bottom: 0 !important;
              margin-bottom: 16px;
            }
          }

        `}</style>
        <div className="background-header-banner">
          <div className="banner-info-box">
            <hgroup>
              <h2>Choose your custom combination</h2>
              <h3>The limited edition Tangerine strap & a watch</h3>
            </hgroup>
            <div className="common-row banner-text">
              <p>We&#39;ve got an orange crush. For Spring/Summer we’ve designed a
              limited edition interchangeable tangerine strap.
              Switch up your everyday look with the Tangerine Strap and make way
              for sun! The strap is available in combination with a watch
              or sold separately.</p>
            </div>
          </div>
          <div className="common-row">
            <div className="main-background-section">
              <div className="step-one-wrapper">
                <div className="step-one">
                  <h3>STEP 1</h3>
                  <h4>Choose the watch</h4>
                </div>
                <Tabs renderActiveTabContentOnly={true}>
                  <div className="category-menu-wrapper">
                    <ul>
                      <li><TabLink to="tab1">THE MERCER</TabLink></li>
                      <li><TabLink to="tab2">THE TRIBECA</TabLink></li>
                      <li><TabLink to="tab3">THE BOWERY</TabLink></li>
                    </ul>
                  </div>
                  <TabContent for="tab1">
                    <div className="product-slider-main">
                      <div>
                        <Slider {...settings}>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-white-rosegold.png" type="picture">
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-white-rosegold.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-white-rosegold.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-white-rosegold.png" width={200} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>The Mercer</h4>
                                  <p>Black - Black / 38mm</p>
                                  <p>$109</p>
                                </div>
                                <a href="javascript:void(0);" onClick={this.openPopupbox}>
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-white-silver.png" type="picture">
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-white-silver.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-white-silver.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-white-silver.png" width={200} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>The Mercer</h4>
                                  <p>White - Silver / 38mm</p>
                                  <p>$109</p>
                                </div>
                                <a href="">
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-white-gold.png" type="picture">
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-white-gold.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-white-gold.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-white-gold.png" width={200} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>The Mercer</h4>
                                  <p>White - Gold / 38mm</p>
                                  <p>$109</p>
                                </div>
                                <a href="">
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-white-rosegold.png" type="picture">
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-white-rosegold.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-white-rosegold.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-white-rosegold.png" width={200} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>The Mercer</h4>
                                  <p>White - Rose Gold / 38mm</p>
                                  <p>$99</p>
                                </div>
                                <a href="">
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </TabContent>
                  <TabContent for="tab2">
                    <div className="product-slider-main">
                      <div>
                        <Slider {...settings}>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-tribeca/the-tribeca-white-pink.png" type="picture">
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-tribeca/the-tribeca-white-pink.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-tribeca/the-tribeca-white-pink.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-tribeca/the-tribeca-white-pink.png" width={200} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>The Tribeca</h4>
                                  <p>White - Pink / 33mm</p>
                                  <p>$99</p>
                                </div>
                                <a href="javascript:void(0);" onClick={this.openPopupbox}>
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-tribeca/the-tribeca-black-white.png" type="picture">
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-tribeca/the-tribeca-black-white.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-tribeca/the-tribeca-black-white.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-tribeca/the-tribeca-black-white.png" width={200} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>The Tribeca</h4>
                                  <p>White - Black / 33mm</p>
                                  <p>$99</p>
                                </div>
                                <a href="">
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-tribeca/the-tribeca-white-brown.png" type="picture">
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-tribeca/the-tribeca-white-brown.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-tribeca/the-tribeca-white-brown.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-tribeca/the-tribeca-white-brown.png" width={200} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>The Tribeca</h4>
                                  <p>White - Brown / 33mm</p>
                                  <p>$99</p>
                                </div>
                                <a href="">
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-tribeca/the-tribeca-black-black.png" type="picture">
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-tribeca/the-tribeca-black-black.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-tribeca/the-tribeca-black-black.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-tribeca/the-tribeca-black-black.png" width={200} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>The Tribeca</h4>
                                  <p>Black - Black / 33mm</p>
                                  <p>$99</p>
                                </div>
                                <a href="">
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </TabContent>
                  <TabContent for="tab3">
                    <div className="product-slider-main">
                      <div>
                        <Slider {...settings}>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Black-rosegold.png" type="picture">
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Black-rosegold.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Black-rosegold.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Black-rosegold.png" width={200} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>The Bowery</h4>
                                  <p>White - Black / 38mm</p>
                                  <p>$99</p>
                                </div>
                                <a href="javascript:void(0);" onClick={this.openPopupbox}>
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Black-silver.png" type="picture">
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Black-silver.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Black-silver.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Black-silver.png" width={200} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>The Tribeca</h4>
                                  <p>White - Black / 38mm</p>
                                  <p>$99</p>
                                </div>
                                <a href="">
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Brown.png" type="picture">
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Brown.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Brown.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Brown.png" width={200} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>The Bowery</h4>
                                  <p>White - Brown / 38mm</p>
                                  <p>$99</p>
                                </div>
                                <a href="">
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Pink.png" type="picture">
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Pink.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Pink.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="https://i.rosefieldwatches.com/products/watches/the-bowery/The-Bowery-White-Pink.png" width={200} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>The Bowery</h4>
                                  <p>White - Pink / 38mm</p>
                                  <p>$99</p>
                                </div>
                                <a href="">
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </TabContent>
                </Tabs>
              </div>
              <div className="step-two-wrapper">
                <div className="step-two">
                  <h3>STEP 2</h3>
                  <h4>Choose the strap</h4>
                </div>
                <Tabs renderActiveTabContentOnly={true} className="common-row">
                  <div className="size-tab-main">
                    <div className="size-tab-row">
                      <ul>
                        <li><TabLink to="tab1">38mm</TabLink></li>
                        <li><TabLink to="tab2">33mm</TabLink></li>
                      </ul>
                    </div>
                    <p>size</p>
                  </div>
                  <TabContent for="tab1">
                    <div className="product-slider-main strap-main desktop-strap-section">
                      <div>
                        <div className="product-item">
                          <div className="product-item-inner">
                            <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Gold.png" type="picture">
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Gold.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Gold.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Gold.png" width={250} auto={['compress', 'format']} fit="clip" faces={false} />
                            </Imgix>
                            <div>
                              <div className="item-info">
                                <h4>Tangerine strap</h4>
                                <p>Gold / 38mm</p>
                                <p>$35</p>
                              </div>
                              <a href="">
                                <img src="/static/images/info-btn.png" alt="" />
                              </a>
                              <div className="add-to-cart-btn">
                                <a href="">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-item">
                          <div className="product-item-inner">
                            <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" type="picture">
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" width={250} auto={['compress', 'format']} fit="clip" faces={false} />
                            </Imgix>
                            <div>
                              <div className="item-info">
                                <h4>Tangerine strap</h4>
                                <p>Rose Gold / 38mm</p>
                                <p>$35</p>
                              </div>
                              <a href="">
                                <img src="/static/images/info-btn.png" alt="" />
                              </a>
                              <div className="add-to-cart-btn">
                                <a href="">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-item">
                          <div className="product-item-inner">
                            <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" type="picture">
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={250} auto={['compress', 'format']} fit="clip" faces={false} />
                            </Imgix>
                            <div>
                              <div className="item-info">
                                <h4>Tangerine strap</h4>
                                <p>Silver / 38mm</p>
                                <p>$35</p>
                              </div>
                              <a href="">
                                <img src="/static/images/info-btn.png" alt="" />
                              </a>
                              <div className="add-to-cart-btn">
                                <a href="">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-slider-main strap-main mobile-strap-section">
                      <div>
                        <Slider {...strapsettings}>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Gold.png" type="picture">
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Gold.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Gold.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Gold.png" width={250} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>Tangerine strap</h4>
                                  <p>Gold / 38mm</p>
                                  <p>$35</p>
                                </div>
                                <a href="">
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" type="picture">
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" width={250} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>Tangerine strap</h4>
                                  <p>Rose Gold / 38mm</p>
                                  <p>$35</p>
                                </div>
                                <a href="">
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" type="picture">
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={250} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>Tangerine strap</h4>
                                  <p>Silver / 38mm</p>
                                  <p>$35</p>
                                </div>
                                <a href="">
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" type="picture">
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={250} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>Tangerine strap</h4>
                                  <p>Silver / 33mm</p>
                                  <p>$35</p>
                                </div>
                                <a href="">
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </TabContent>
                  <TabContent for="tab2">
                    <div className="product-slider-main strap-main desktop-strap-section">
                      <div>
                        <div className="product-item">
                          <div className="product-item-inner">
                            <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Gold.png" type="picture">
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Gold.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Gold.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Gold.png" width={250} auto={['compress', 'format']} fit="clip" faces={false} />
                            </Imgix>
                            <div>
                              <div className="item-info">
                                <h4>Tangerine strap</h4>
                                <p>Rose gold / 33mm</p>
                                <p>$35</p>
                              </div>
                              <a href="">
                                <img src="/static/images/info-btn.png" alt="" />
                              </a>
                              <div className="add-to-cart-btn">
                                <a href="">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-item">
                          <div className="product-item-inner">
                            <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" type="picture">
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" width={250} auto={['compress', 'format']} fit="clip" faces={false} />
                            </Imgix>
                            <div>
                              <div className="item-info">
                                <h4>Tangerine strap</h4>
                                <p>Gold / 33mm</p>
                                <p>$35</p>
                              </div>
                              <a href="">
                                <img src="/static/images/info-btn.png" alt="" />
                              </a>
                              <div className="add-to-cart-btn">
                                <a href="">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-item">
                          <div className="product-item-inner">
                            <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" type="picture">
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={250} auto={['compress', 'format']} fit="clip" faces={false} />
                            </Imgix>
                            <div>
                              <div className="item-info">
                                <h4>Tangerine strap</h4>
                                <p>Silver / 33mm</p>
                                <p>$35</p>
                              </div>
                              <a href="">
                                <img src="/static/images/info-btn.png" alt="" />
                              </a>
                              <div className="add-to-cart-btn">
                                <a href="">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-slider-main strap-main mobile-strap-section">
                      <div>
                        <Slider {...strapsettings}>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Gold.png" type="picture">
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Gold.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Gold.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Gold.png" width={250} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>Tangerine strap</h4>
                                  <p>Gold / 33mm</p>
                                  <p>$35</p>
                                </div>
                                <a href="">
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" type="picture">
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" width={250} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>Tangerine strap</h4>
                                  <p>Rose gold / 33mm</p>
                                  <p>$35</p>
                                </div>
                                <a href="">
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" type="picture">
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={250} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>Tangerine strap</h4>
                                  <p>Silver / 33mm</p>
                                  <p>$35</p>
                                </div>
                                <a href="">
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-item">
                            <div className="product-item-inner">
                              <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" type="picture">
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                                <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-Silver.png" width={250} auto={['compress', 'format']} fit="clip" faces={false} />
                              </Imgix>
                              <div>
                                <div className="item-info">
                                  <h4>Tangerine strap</h4>
                                  <p>Silver / 33mm</p>
                                  <p>$35</p>
                                </div>
                                <a href="">
                                  <img src="/static/images/info-btn.png" alt="" />
                                </a>
                                <div className="add-to-cart-btn">
                                  <a href="">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </TabContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        <div className="common-row theme-bg">
          <div className="step-three-main">
            <div className="step-three-wrapper">
              <div className="step-three">
                <h3>STEP 3</h3>
                <h4>Your<br />Summer Set</h4>
              </div>
              <div className="common-row total-price-section">
                <div className="pink-black-button">
                  <Link route="cart" params={{ lang:this.state.lang }} >
                    <a ><span>Checkout</span></a>
                  </Link>
                </div>
                <h4>$99</h4>
              </div>
              <div className="cart-main">
                <div className="cart-row">
                  <div className="product-img">
                    <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-black-black.png" type="picture">
                      <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-black-black.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                      <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-black-black.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                      <Imgix src="https://i.rosefieldwatches.com/products/watches/the-mercer/the-mercer-black-black.png" width={100} auto={['compress', 'format']} fit="clip" faces={false} />
                    </Imgix>
                  </div>
                  <div className="product-info-box">
                    <h4>The Tribeca</h4>
                    <p>White - Gold</p>
                  </div>
                  <p>$99</p>
                </div>
                <div className="cart-row">
                  <div className="product-img">
                    <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" type="picture">
                      <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                      <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                      <Imgix src="http://i.rosefieldwatches.com/products/straps/tangerine-strap/Tangerine-strap-RoseGold.png" width={150} auto={['compress', 'format']} fit="clip" faces={false} />
                    </Imgix>
                  </div>
                  <div className="product-info-box">
                    <h4>The Ring</h4>
                    <p>Medium - Rose Gold</p>
                  </div>
                  <p>$35</p>
                </div>
                <div className="cart-row">
                  <h6 className="chosse-btn">
                    <a href="">Choose another combination</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-banner-section">
          <div className="background-bottom-banner">
            <div className="bottom-banner-wrapper">
              <h4>With love, Rosefield</h4>
            </div>
          </div>
        </div>
        <div className="product-popup-main"><PopupboxContainer /></div>
      </div>
    );
  }
}

export default TangerineSummerSet;