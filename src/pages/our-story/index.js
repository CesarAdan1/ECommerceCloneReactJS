import withData from '../../lib/withData';
import Layout from '../../components/layout';


export const Element = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout currentPath={url && url.pathname} lang={url.query.lang}>
    <style jsx>{`
     .background-header-banner {
        background: url("https://i.rosefieldwatches.com/products/our-story/main-banner.png")no-repeat center;
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

     .common-row {

        & h2 {
          font-size: 30px;
          lost-column: 12/12;
        }

        & p {
          font-size: 15px;
          color: #161616;
          lost-column: 12/12;
        }

    }

    .story-first-box {
      lost-center:700px;
      text-align: center;
      padding: 50px 0;
    }

    .craft-section {
      background: url("https://i.rosefieldwatches.com/products/our-story/craft-bg.png") no-repeat center center;
      min-height: 810px;
      position: relative;
      lost-column: 12/12;
      background-size: cover;
    }

    .craft-overlay {
      min-height: 810px;
      background-color: rgba(3, 3, 5, 0.6);
    }    

    .craft-info-box {
      lost-column: 8/12;

      & p {
        lost-column: 5/12;
      }
    }

    .strap-image-bg {
      background: url("https://i.rosefieldwatches.com/products/our-story/strap-bg.png") no-repeat center center;
      height: 800px;
      background-size: cover;
      lost-column: 6/12;
      float: right !important;
      margin-right: 2px !important;
    }

    .left-strap-main {
      lost-column: 4/12;     
      padding: 100px;
    }

    .aby-section {
      min-height: 560px;
      margin-top: 50px;
      background: url("https://i.rosefieldwatches.com/products/our-story/story-aby.png") no-repeat center center;
      background-size: cover;
      width:50%;
      position: relative;
      float: left;

      & .banner-overlay:hover {
        background-color: rgba(3, 3, 5, 0);
      }
    }

    .ally-section {
      min-height: 560px;
      margin-top: 50px;
      background: url("https://i.rosefieldwatches.com/products/our-story/story-ally.png") no-repeat center center;
      background-size: cover;
      width:50%;
      position: relative;
      float: left;

      & .banner-overlay:hover {
        background-color: rgba(3, 3, 5, 0);
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
      }
    }

    
    @media only screen and (max-width: 1024px) {
      .banner-info-box {
        lost-column: 10/12;
        bottom: 8%;

        & h3{
          word-wrap: break-word;
        }
      }

      .story-first-box {
        max-width:100%;

        & p {
          text-align: left;
          width: 80%;
          margin: 0 10% 5%;
        }
      }

      .craft-info-box {
        lost-column: 10/12;
        

        & p {
          lost-column: 10/12;

        }
      }

      .strap-image-bg {
        float: none !important;
        width: 90%;
        margin: 5%;
        height: 500px;
      }

      .left-strap-main {
        width: 90%;    
        margin: 15% 6% 5%;
        padding: 0;
      }

      .discription-cont {
        & p {
          width: 90%;
        }
      }

      .aby-section {
        width: 100%;
      }

      .ally-section {
        width: 100%;
        margin-top: 0;
      }

      .campaign-box {
        lost-column: 8/12;
      }

      .black-play-video-button {
        display:none;
      }

    }

    @media only screen and (max-width: 480px) {
      .craft-info-box {
        & h3 {
          font-size: 36px;          
        }
      }

      .section-title {
        font-size: 38px;
      }
    }

    @media screen and (max-width: 360px){
      .campaign-box {
        lost-column: 9/12;

        & h3 {
          font-size: 36px;
        }
      }

      .craft-info-box {
        bottom: 54px;

        & p {
          lost-column:12/12;
        }
      }

      .section-title {
        font-size: 32px;
      }
    }
    
    `}</style>

    <section className="background-header-banner">
      <div className="banner-overlay">
        <div className="banner-info-box">
          <hgroup>
            <h2>Ams | Nyc</h2>
            <h3>Our Story</h3>
          </hgroup>
          <p>Based on the founding principles of Amsterdam and New York City, ROSEFIELD watches are
          created for free-spirited individuals. ROSEFIELD makes fashion-forward watches where
          classNameic
          meets modern. Where Amsterdam meets NYC. Where function meets fashion.</p>
        </div>
      </div>
    </section>
    <section className="common-row">
      <div className="story-first-box">
        <h2>AMS | NYC</h2>
        <p>Based on the founding principles of Amsterdam and New York City,
        ROSEFIELD watches are created for free-spirited individuals.
        ROSEFIELD makes fashion-forward watches where classic meets modern.
        Where Amsterdam meets NYC. Where function meets fashion.</p>
        <p>ROSEFIELD watches combine the Dutch minimalist design on one hand with contemporary
        New York fashion aesthetics on the other hand. The result is a series of
        contemporary fashion watches with an offbeat twist to punctuate your look. </p>
        <p>In short, ROSEFIELD watches are a tribute to the great vibes, the energy and the
        tolerance for free thinking that is typical for both Amsterdam and New York City.</p>
      </div>
    </section>
    <section className="craft-section">
      <div className="craft-overlay">
        <div className="banner-info-box craft-info-box">
          <hgroup>
            <h2>Ams | Nyc</h2>
            <h3>Craftsmanship</h3>
          </hgroup>
          <p>At ROSEFIELD, we value quality as much as design. High quality materials are central
          to everything we do. All our watches run on durable Japanese quartz movements and feature
          genuine leather straps or luxurious stainless steel mesh straps.</p>
          <p>For production we partner directly with several of the world’s leading luxury watch
          manufacturers, who have been hand-producing luxury watches for decades. The result is a
          collection of affordable premium quality watches with a two-year warranty.
          And all watches look great too..</p>
          <a className="white-play-video-button">Play video</a>
        </div>
      </div>
    </section>
    <section className="common-row">
      <div className="strap-image-bg">&nbsp;</div>
      <div className="left-strap-main">
        <div className="intro-title">change strap</div>
        <div className="section-title">interchangeable Straps</div>
        <div className="discription-cont">
          <p>ROSEFIELD watches feature thin and elegant cases, matching perfectly with the attached
          handcrafted leather straps. All the leather straps are interchangeable, so you can easily
          match your watch with the rest of your outfit.</p>
          <p>The collection features both stitched leather straps for a classNameic look and
          clean-cut leather straps for a modern look. All of our straps come in different
          colours, and due to an innovative pin mechanism alternating between your
          favourite styles is only a matter of seconds. </p>
          <a className="black-play-video-button">Play video</a>
        </div>
      </div>
    </section>
    <section className="common-row">
      <div className="aby-section">
        <div className="banner-overlay">
          <div className="campaign-box">
            <hgroup>
              <h2>Amsterdam</h2>
              <h3>A day in the life of Aby</h3>
            </hgroup>
            <p>Two girls a lot of dreams. Even though Ally and Aby live in different continents,
            they have a lot in common.</p>
            <a href="/campaign/aby" className="white-border-button">Read story</a>
          </div>
        </div>
      </div>
      <div className="ally-section">
        <div className="banner-overlay">
          <div className="campaign-box">
            <hgroup>
              <h2>New York City</h2>
              <h3>A day in the life of Ally</h3>
            </hgroup>
            <p>Two girls a lot of dreams. Even though Ally and Aby live in different continents,
            they have a lot in common.</p>
            <a href="/campaign/ally" className="white-border-button">Read story</a>
          </div>
        </div>
      </div>
    </section>

  </Layout>
);

export default withData(Element);
