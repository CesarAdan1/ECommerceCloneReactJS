import Slider from 'react-slick';
import FacebookIcon from 'react-icons/lib/fa/facebook';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import PinterestIcon from 'react-icons/lib/fa/pinterest-p';
import withData from '../../lib/withData';
import Layout from '../../components/layout';
import InterviewSlider from '../../components/15min/InterviewSlider';


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export const Element = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout currentPath={url && url.pathname} lang={url.query.lang}>
    <style jsx>{`
    .background-header-banner {
      background: url("https://i.rosefieldwatches.com/products/15min/15-min-katja/main-start-banner.jpg")no-repeat top center;
      lost-column: 12/12;
      background-size: cover;
    }      

    .banner-info-box {
      lost-column: 4/12;
      padding: 0 0 0 10%;
      position: absolute;
      bottom: 17%;

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

    .intro-section {
      lost-center: 600px;

      & h5 {
        color: #FFD6CB;
        text-align: center;
        letter-spacing: 1px;
        font-weight: normal;
        font-size: 20px;
        padding-bottom: 38px;
        line-height: 160%;
        margin: 0;
      }

      & p {
        margin: 0 auto 60px;
        lost-center: 500px;
        color: #181818;
        line-height: 160%;
        letter-spacing: 1px;
        font-size: 15px;
        float: none;
      }
    }

    .time-title{
      color: #FFD6CB;
      text-align: center;
      letter-spacing: 1px;
      padding: 44px 0 12px;
    }

    .three-image-section {
      display: block;

      & .image-wrapper {
        lost-column: 4/12;
        
        & img {
          max-width: 100%;
          object-fit: cover;
          width: 100%;
        }
      }
    }

    .mobile-three-section {
      display: none;        
    }
    
    .question-wrapper {
      lost-center: 950px;
      padding: 0 0 40px 0;
      height: auto;
      

      & .question-left-section {
        width: 460px;
        float: left;

        & h4 {
          font-size: 19px;
          font-weight: 500;
          line-height: 30px;
          letter-spacing: 2px;
          margin-bottom: 0;
        }

        & p {
          font-size: 16px;
        }
      }

      & .question-right-section {
        width: 460px;
        float: right;

        & h4 {
          font-size: 19px;
          font-weight: 500;
          line-height: 26px;
          letter-spacing: 2px;
          margin-bottom: 0;
        }

        & p {
          font-size: 16px;
        }
      }
    }

    .quote-section {
      lost-center: 680px;

      & h4 {
        font-size: 25px;
        color: #a5a5a5;
        font-style: italic;
        line-height: 36px;
        text-transform: initial;
        font-weight: 500;
        letter-spacing: 2px;
        font-family: Georgia, Times, "Times New Roman", serif;
        margin-bottom: 0;
      }

      & p {
        font-family: Georgia, Times, "Times New Roman", serif;
        font-weight: 500;
        font-size: 20px;
        letter-spacing: 2px;
        text-transform: initial;
        font-style: italic;
        color: #a5a5a5;
        float: right;
      }
    }

    .center-text-section {
      lost-center: 500px;

      & h4 {
        font-size: 19px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 2px;
        margin-bottom: 0;
        text-align: center;
      }

      & p {
        font-size: 16px;
      }
    }

    .two-image-main-wrapper {
      background-color: #FFFBFA;      
      padding: 65px 0;

      & .two-image-section {
          lost-center: 980px;

        & .image-wrapper {
          lost-column: 6/12;

          
          & img {
            max-width: 100%;
            object-fit: cover;
            width: 100%;
          }
        }
      }
    }

    .product-section {
      lost-center: 750px;
      margin-top: -140px;
      margin-bottom: 50px;


      & .product-image-section {
        float: left;
        width: 300px;

        & h4 {
          font-size: 24px;
          font-family: 'publico';
          font-weight: bold;
          margin-left: -50px;
          margin-bottom: 0;
          letter-spacing: 1px;
        }

        & p {
          color: #3c3c3c;
          font-size: 15px;
          width: 100%;
          margin: 0 0 0 -50px;
        }
      }

      & .product-text-section {
        float: right;
        width: 450px;

        & h6 {
          font-size: 12px;
          color: #FED6CC;
          text-transform: uppercase;
          margin-bottom: 0;
          letter-spacing: .2em;
        }

        & p {
          font-size: 45px;
          text-transform: lowercase;
          line-height: 49px;
          color: #FFD6CB;
          font-family: 'publico';
          font-weight: bold;
          margin: 24px 0;
        }

        & a {
          font-size: 11px;
          text-transform: uppercase;
          color: #3c3c3c;
          font-weight: bold;
          border-bottom: 3px solid #3C3C3C;
          padding-bottom: 5px;
          letter-spacing: 3px;
        }
      }
    }

    .question-bg {
      background-color: #FFFBFA;
      padding-top: 65px;

      & .question-wrapper{
        padding: 0 0 200px 0;
      }
    }

    .close-image-section {
      position: relative;

      & img {
        width: 100%;
      }

      & .layer-image-text {
        position: absolute;
        top: 45%;
        left: 10%;
        width: 400px;

        & h2 {
          text-transform: uppercase;
          color: #000000;
          font-weight: 500;
          margin-bottom: 0;
        }

        & p {
          font-size: 40px;
          font-weight: bold;
          color: #000000;
          line-height: 50px;
        }
      }
    }

    .social-share-section {
      lost-center: 600px;
      text-align: center;
      margin-bottom: 100px;

      & h3 {
        font-size: 44px;
        color: #FED6CC;
        font-weight: 500;
        font-family: 'publico';
      }

      & .social-icons {
        float: left;
        width: 100%;

        & a {
          height: 50px;
          width: 50px;
          border: 1px solid #3C3C3C;
          border-radius: 50%;
          -webkit-border-radius: 50%;
          font-size: 20px;
          padding: 11px 14px;
          margin: 8px 22px 50px;
          line-height: 100%;
        }

        & a:hover {
          color: #FED6CC;
          border: 1px solid #FED6CC;
        }

      }
      
    }

    @media only screen and (max-width: 1024px) {
      .banner-info-box {
        lost-column: 10/12;

        & h2 {
          font-size: 10px;
        }

        & h3 {
          font-size: 40px;
        }

        & p {
          font-size: 12px;
        }
      }

      .intro-section {
        width: 80%;
      }

      .three-image-section {
        display: none;
      }

      .mobile-three-section {
        display: block;
        width: 85%;
        padding-left: 6%;        
      }

      .question-wrapper {
        width: 80%;

        & .time-title {
          padding: 55px 0 12px;
        }

        & .question-left-section {
          width: 100%;
        }

        & .question-right-section {
          width: 100%;
        }

      }

      .quote-section {
        width: 80%;

        & h4 {
          font-size: 22px;
          text-align: center;
        }

        & p {
          font-size: 20px;
        }
      }

      .center-text-section {
        width: 80%;
      }

      .two-image-main-wrapper {
        lost-column: 12/12;

        & .two-image-section {
          width: 100%;
          & .image-wrapper {
            width: 100%;          

            & img {
              width: 90%;
              margin: 0 5% 4%;       
            }
          }
        }
        
      }

      .product-section {
        width: 100%;

        & .product-image-section{
          width: 100%;
          text-align: center;

          & h4{
            margin-left: -60px;
          }
          
          & p{
            margin-left: -80px;
          }
        }

        & .product-text-section {
          width: 100%;
          text-align: center;

          & p {
            font-size: 30px;
            width: 100%;
          }
        }
      }

      .close-image-section {
        width: 100%;

        & img {
          height: 567px;
          object-fit: cover;
        }

        & .layer-image-text {
          left: 5%;
          top: 20%;
          width: 90%;

          & p {
            font-size: 30px;
            width: 90%;
          }
        }
      }

      .social-share-section {
        width: 100%;

        & h3 {
          font-size: 24px;
          padding-bottom: 10px;
        }
      }

      .two-image-main-wrapper{
          padding-bottom: 0;
        }

      .question-bg{
          padding-top: 0;
      }

    }

    @media only screen and (max-width: 767px) {
        .slick-slide {

          & img{
            width: 100%;
          }
        }

        .mobile-three-section{
          width: 100%;
          padding-left: 0;
        }

        .center-text-section{
          margin: 0 auto;
          width: 100%;
          max-width: 80%;
          text-align: left;

          & h4{
            text-align: left;
          }
        }

        .product-section {
        
          & .product-text-section {
            width: 80%;
            margin: 0 auto;
            float: none; 
            text-align: left;
        }
      }
    }
    
    `}</style>
    <style jsx global>{`
      .slick-dots {
        bottom: -37px !important;
      }
    `}</style>
    <div className="background-header-banner">
      <div className="banner-overlay">
        <div className="banner-info-box">
          <hgroup>
            <h2>15 Minutes With</h2>
            <h3>Katja Schweizberger</h3>
          </hgroup>
          <p>Meet Katja, fashion and beauty editor at Refinery29 in Berlin.</p>
        </div>
      </div>
    </div>
    <div className="common-row">
      <div className="intro-section">
        <div className="time-title">15.00 Berlin</div>
        <h5>We met Katja in the center of Berlin</h5>
        <p>Katja Schweizberger, fashion and beauty editor at Refinery29 in Berlin.
        Katja likes to start her day with a good workout and end her Sundays with red
        wine at the cinema.</p>
      </div>
    </div>
    <div className="common-row">
      <div className="three-image-section">
        <div className="image-wrapper">
          <img src="https://i.rosefieldwatches.com/products/15min/15-min-katja/trio-1.jpg" alt="" />
        </div>
        <div className="image-wrapper">
          <img src="https://i.rosefieldwatches.com/products/15min/15-min-katja/trio-2.jpg" alt="" />
        </div>
        <div className="image-wrapper">
          <img src="https://i.rosefieldwatches.com/products/15min/15-min-katja/trio-3.jpg" alt="" />
        </div>
      </div>
      <div className="mobile-three-section">
        <Slider {...settings}>
          <div><img src="https://i.rosefieldwatches.com/products/15min/15-min-katja/trio-1.jpg" alt="" /></div>
          <div><img src="https://i.rosefieldwatches.com/products/15min/15-min-katja/trio-2.jpg" alt="" /></div>
          <div><img src="https://i.rosefieldwatches.com/products/15min/15-min-katja/trio-3.jpg" alt="" /></div>
        </Slider>
      </div>
    </div>
    <div className="common-row">
      <div className="question-wrapper">
        <div className="time-title">15.05 Berlin</div>
        <div className="question-left-section">
          <h4>What does time mean to you?</h4>
          <p>An answer you hear all the time, but it’s true: time is a real luxury,
          especially when you can spend it as you wish.</p>
          <h4>Latest discovery?</h4>
          <p>I love the winebar Gallina in Pücklerstraße in Kreuzberg, Berlin. You can
          sit outside, enjoy really nice wine and antipasti.</p>
          <h4>What’s your morning routine?</h4>
          <p>Exercise. Running, gym or a home workout. Without exercising, I can’t wake up.</p>
        </div>
        <div className="question-right-section">
          <h4>Favorite spot in Berlin?</h4>
          <p>Tiergarten and Siegessäule. I love the view.</p>
          <h4>Sundays…</h4>
          <p>I usually have no plans. I like to wake up without an alarm, so that
          I have no idea what the day has in store.</p>
        </div>
      </div>
    </div>
    <div className="common-row">
      <div className="quote-section">
        <h4>&#34;Time is a real luxury, especially when you can spend it as you wish.&#34;</h4>
        <p>Katja</p>
      </div>
    </div>
    <div className="common-row">
      <div className="center-text-section">
        <h4>Who or what is the meaning of beauty to you?</h4>
        <p>An untouched blanket of snow, after its been snowing for an entire night.</p>
      </div>
    </div>
    <div className="common-row two-image-main-wrapper">
      <div className="two-image-section">
        <div className="image-wrapper">
          <img src="https://i.rosefieldwatches.com/products/15min/15-min-katja/couple-1.jpg" alt="" />
        </div>
        <div className="image-wrapper">
          <img src="https://i.rosefieldwatches.com/products/15min/15-min-katja/couple-2.jpg" alt="" />
        </div>
      </div>
    </div>
    <div className="common-row question-bg">
      <div className="question-wrapper">
        <div className="time-title">15.10 Berlin</div>
        <div className="question-left-section">
          <h4>What do you like to do on a day off?</h4>
          <p>Starting the day with a good workout, breakfast (my favorite is truffle
          eggs on roasted farmers bread), meet up with friends, visit an exhibition, eat
          chocolate cake and in the evening go to the movies with a glass of red wine.</p>
        </div>
        <div className="question-right-section">
          <h4>What’s your best memory?</h4>
          <p>Oh, there are so many. In my childhood, the vacations to the Gardalake,
          Cuba and Florida or the holidays with my best friend at my grandma’s. In
          more recent years’ festivals with my friends and New Years in
          Cape Town right under Table Mountain.</p>
          <h4>I’m always late/punctual. Why?</h4>
          <p>Punctual. Well, let’s say 90% of the time. Everybody hates waiting. Being
          on time means being respectful to that other person.</p>
        </div>
      </div>
    </div>
    <div className="common-row">
      <div className="product-section">
        <div className="product-image-section">
          <a href="">
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-katja/the-west-village-black-gold.png" alt="" />
          </a>
          <h4>The West Village</h4>
          <p>Black - Gold</p>
        </div>
        <div className="product-text-section">
          <h6>favorite watch</h6>
          <p>The West Village Black - Gold</p>
          <a href="">Check This Watch</a>
        </div>
      </div>
    </div>
    <div className="common-row theme-bg">
      <div className="question-wrapper">
        <div className="time-title">15.15 Berlin</div>
        <div className="question-left-section">
          <h4>Gold or silver?</h4>
          <p>Both, and also combined.</p>
          <h4>Where would you beam yourself right now, if you could?</h4>
          <p>Costa Rica, to the Santa Teresa beach.</p>
          <h4>Who or what inspires you in life?</h4>
          <p>I find people with a clear position inspiring, that stand behind their ideologies
          and aren’t pushovers.</p>
        </div>
        <div className="question-right-section">
          <h4>In five years…</h4>
          <p>I still won’t know what I’ll be doing in five years.</p>
          <h4>Favorite Rosefield Watch?</h4>
          <p>The West Village.</p>
        </div>
      </div>
    </div>
    <div className="common-row close-image-section">
      <img src="https://i.rosefieldwatches.com/products/15min/15-min-katja/main-close.jpg" alt="" />
      <div className="layer-image-text">
        <h2>15 Minutes</h2>
        <p>Being on time means being respectful to that other person.</p>
      </div>
    </div>
    <div className="common-row theme-bg">
      <div className="social-share-section">
        <h3>Share this articles</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/Rosefieldwatches"><FacebookIcon /></a>
          <a href="https://instagram.com/rosefieldwatches/"><TwitterIcon /></a>
          <a href="https://www.pinterest.com/rosefieldwatch/"><PinterestIcon /></a>
        </div>
      </div>
    </div>
    <InterviewSlider lang={url.query.lang} />
  </Layout>
);

export default withData(Element);
