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
      background: url("https://i.rosefieldwatches.com/products/15min/15-min-paulina/main-start-banner.jpg")no-repeat top center;
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
          color: #ffffff;
          font-weight: 500;
          margin-bottom: 0;
        }

        & p {
          font-size: 40px;
          font-weight: bold;
          color: #ffffff;
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
            <h3>Paulina Stepowska</h3>
          </hgroup>
          <p>Meet Paulina, model from Berlin.</p>
        </div>
      </div>
    </div>
    <div className="common-row">
      <div className="intro-section">
        <div className="time-title">10.00 Berlin</div>
        <h5>We had a little walk with Paulina in Berlin</h5>
        <p>Paulina Stepowska – Berliner model with the best intel on coffee spots. She
        believes in morning affirmations, starting the day with a smile and getting
        up an hour early to get ready.</p>
      </div>
    </div>
    <div className="common-row">
      <div className="three-image-section">
        <div className="image-wrapper">
          <img src="https://i.rosefieldwatches.com/products/15min/15-min-paulina/trio-1.jpg" alt="" />
        </div>
        <div className="image-wrapper">
          <img src="https://i.rosefieldwatches.com/products/15min/15-min-paulina/trio-2.jpg" alt="" />
        </div>
        <div className="image-wrapper">
          <img src="https://i.rosefieldwatches.com/products/15min/15-min-paulina/trio-3.jpg" alt="" />
        </div>
      </div>
      <div className="mobile-three-section">
        <Slider {...settings}>
          <div><img src="https://i.rosefieldwatches.com/products/15min/15-min-paulina/trio-1.jpg" alt="" /></div>
          <div><img src="https://i.rosefieldwatches.com/products/15min/15-min-paulina/trio-2.jpg" alt="" /></div>
          <div><img src="https://i.rosefieldwatches.com/products/15min/15-min-paulina/trio-3.jpg" alt="" /></div>
        </Slider>
      </div>
    </div>
    <div className="common-row">
      <div className="question-wrapper">
        <div className="time-title">10.05 Berlin</div>
        <div className="question-left-section">
          <h4>What does time mean to you?</h4>
          <p>A form of orientation for meetings, deadlines etc. comes to mind at first. Watches
          exist so that our society can function and be punctual in our daily activities. But
          actually time doesn’t exist. I’ve learned not to take time so seriously, especially
          in regards to age. Many stress out because they’re approaching their 30’s, 50’s or turning
          80 – but what does it really mean? In the end you’re as old as you feel. I
          think it’s important to do things that make you forget time.</p>
          <h4>Latest discovery?</h4>
          <p>My latest discovery would be the Arabian restaurant “Lasan” at Kottbusser
          Tor in Berlin.From the outside it looks completely inconspicuous, but the food is amazing!
          Really fresh and delicious. Especially the “Zigarrenbörek” and the unbelievable delicious
          flat bread,which is always made fresh and comes as an appetizer with every dish. I
          get hungry just thinking about it.</p>
          <h4>Artists?</h4>
          <p>Check out BLVTH!</p>
        </div>
        <div className="question-right-section">
          <h4>What’s your morning routine?</h4>
          <p>Usually I get up an hour before I really should, but I like to have time to get
          ready and start the day with a positive mindset. Then I like to remember all the
          things in my life that I’m grateful for, think about my goals and then I’m in a really
          good mood. I know it sounds super lame, but I believe mornings set the tone for the
          entire day. That’s why one should consciously choose good thoughts to get in the
          right mindset. After that I make myself a coffee and the day can start.</p>
          <h4>Your favorite spot in Berlin?</h4>
          <p>Difficult to say! Berlin has so many cool spots... my favorite place to
          drink coffee is Café Marlene, Café Sonntag or Kaffeemitte. The Thaimarkt
          is an absolute paradise during the summer months and I’m just realizing
          I’m only talking about food, haha!</p>
        </div>
      </div>
    </div>
    <div className="common-row">
      <div className="quote-section">
        <h4>&#34;I think it’s important to do things that make you forget time.&#34;</h4>
        <p>Paulina</p>
      </div>
    </div>
    <div className="common-row">
      <div className="center-text-section">
        <h4>Sundays…</h4>
        <p>Well I have to admit I don’t like Sundays. All shops are closed, and somehow
        that totally restricts me. But if I were to describe my “perfect” Sunday,
        it would be to meet up for coffee with a friend and take a long walk to talk
        about simply everything. Then at home treat myself to the complete beauty program:
        face mask, nails etc.! Then in the evening watch a movie with my boyfriend and
        look forward to the coming week!</p>
      </div>
    </div>
    <div className="common-row two-image-main-wrapper">
      <div className="two-image-section">
        <div className="image-wrapper">
          <img src="https://i.rosefieldwatches.com/products/15min/15-min-paulina/couple-1.jpg" alt="" />
        </div>
        <div className="image-wrapper">
          <img src="https://i.rosefieldwatches.com/products/15min/15-min-paulina/couple-2.jpg" alt="" />
        </div>
      </div>
    </div>
    <div className="common-row question-bg">
      <div className="question-wrapper">
        <div className="time-title">10.10 Berlin</div>
        <div className="question-left-section">
          <h4>Who or what is the meaning of beauty to you?</h4>
          <p>Beauty for me is definitely self-love. I don’t mean the arrogant, egocentric self-love,
          but embracing the person you are and accepting and loving them. I really think appearance
          doesn’t matter, as long as you are good to yourself and good to others which will bring
          happiness into other people’s lives. And there is nothing more beautiful than
          happy humans!</p>
          <h4>What’s your favorite thing to do on a day off?</h4>
          <p>I like to browse on Tumblr and get inspired. My favorite blog is
          fashiion-gone-rouge.tumblr.com.</p>
        </div>
        <div className="question-right-section">
          <h4>What’s your best memory?</h4>
          <p>There are so many, I can’t choose!</p>
          <h4>I’m always late/punctual. Why?</h4>
          <p>Sometimes late, sometimes punctual. It depends on who I’m meeting and if
          I can allow myself to be late with that person. Usually I’m late if I took
          too long getting ready.</p>
        </div>
      </div>
    </div>
    <div className="common-row">
      <div className="product-section">
        <div className="product-image-section">
          <a href="">
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-paulina/the-tribeca-black-white.jpg" alt="" />
          </a>
          <h4>The Tribeca</h4>
          <p>White / Black</p>
        </div>
        <div className="product-text-section">
          <h6>favorite watch</h6>
          <p>The Tribeca White / Black.</p>
          <a href="">Check This Watch</a>
        </div>
      </div>
    </div>
    <div className="common-row theme-bg">
      <div className="question-wrapper">
        <div className="time-title">10.15 Berlin</div>
        <div className="question-left-section">
          <h4>Gold or silver?</h4>
          <p>I can’t decide. Gold is good.</p>
          <h4>Where would you beam yourself right now, if you could?</h4>
          <p>To my boyfriend. We’re in a long-distance relationship, so it would be really nice,
          if I could just beam myself to him whenever I wanted, without taking a 6-hour train.</p>
          <h4>Something most people don’t know about you?</h4>
          <p>I’m very tidy and hate it when my apartment isn’t cleaned up. But I don’t care about
          other’s people tidiness.</p>
        </div>
        <div className="question-right-section">
          <h4>Who or what inspires you in life?</h4>
          <p>People who motivate and encourage others for example Oprah Winfrey. She’s such an
          interesting, ambitious and strong woman. I look up to real personalities. People that stay
          true to themselves and don’t care about others’ opinion about them.</p>
          <h4>In five years…</h4>
          <p>You’ll think I’m crazy, if I tell you! But I’ve set myself a very big goal and hope
          that five years from now I can say I’ve achieved it.</p>
          <h4>Favorite Rosefield Watch?</h4>
          <p>The Tribeca in White / Black. I’m very into minimalism, in regards to accessories.
          I like to have something classical, that I can combine with the rest of my outfit!</p>
        </div>
      </div>
    </div>
    <div className="common-row close-image-section">
      <img src="https://i.rosefieldwatches.com/products/15min/15-min-paulina/main-close.jpg" alt="" />
      <div className="layer-image-text">
        <h2>15 Minutes</h2>
        <p>I’ve set myself a very big goal and hope that five years from now I can say
        I’ve achieved it.</p>
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
