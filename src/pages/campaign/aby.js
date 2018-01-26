import withData from '../../lib/withData';
import Layout from '../../components/layout';
import { Link } from '../../config/routes';


class abycampaign extends React.Component {
/**
* variable declaration
*/
  constructor(props) {
    super(props);
    const myData = require('../../locale/'+props.url.query.lang+'/aby-campaign.json');
    this.state = {
      url: props,
      lang: props.url.query.lang,
      res_data: myData,
    };
  }

  /**
   * Renders "Job List data"!
   * @return JSX
   */
  render() {
    return (
      <Layout currentPath={this.state.url && this.state.url.pathname} lang={this.state.lang}>
        <style jsx>{`
        .background-header-banner {
          background: url("https://i.rosefieldwatches.com/products/campaign/aby/aby-main-banner.png")no-repeat center;
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

        .aby-section {
          min-height: 560px;
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

        @media only screen and (max-width: 1024px) {
          
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

          .banner-info-box {
            lost-column: 10.8/12;
            & h3 {
              font-size: 36px;
            }
          }

          .content-left-row {
            lost-column: 10.8/12;
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
          <div className="banner-overlay">
            <div className="banner-info-box">
              <hgroup>
                <h2>{this.state.res_data.BannerInfoText.AmcText}</h2>
                <h3>{this.state.res_data.BannerInfoText.IntroText}</h3>
              </hgroup>
              <p>{this.state.res_data.BannerInfoText.SubIntroText}</p>
              <a className="white-play-video-button" href="">{this.state.res_data.BannerInfoText.VideoButtonText}</a>
            </div>
          </div>
        </section>
        <div>
          <div className="full-row">
            <div className="content-left-row">
              <div className="content-center-row">
                <div className="time-title">{this.state.res_data.FirstSection.TimeText}</div>
                <p className="section-title">{this.state.res_data.FirstSection.Text}</p>
              </div>
            </div>
            <div className="image-right-row">
              <img src="https://i.rosefieldwatches.com/products/campaign/aby/aby-1.png" alt="" />
            </div>
          </div>
          <div className="full-row">
            <div className="content-right-row move-right mobile-content-center">
              <div className="content-center-row mobile-center-row">
                <p>{this.state.res_data.SecondSection.Text}</p>
                <div className="black-text-gray-boder-btn space-btn-right-50">
                  <a href="">{this.state.res_data.SecondSection.ViewTheWatch}</a>
                </div>
              </div>
            </div>
            <div className="image-left-row">
              <img src="https://i.rosefieldwatches.com/products/campaign/aby/aby-2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="full-row top-space">
          <div className="full-width-image">
            <img src="https://i.rosefieldwatches.com/products/campaign/aby/aby-3.png" alt="" />
          </div>
        </div>
        <div className="full-row">
          <div className="full-row-content-center">
            <p className="section-title">{this.state.res_data.ThirdSection.Text}</p>
          </div>
        </div>
        <div className="full-row">
          <div className="content-right-row move-right mobile-content-center">
            <div className="content-center-row mobile-center-row">
              <div className="time-title-second">{this.state.res_data.FourthSection.TimeText}</div>
              <p>{this.state.res_data.FourthSection.Text}</p>
              <div className="black-text-gray-boder-btn space-btn-95">
                <a href="">{this.state.res_data.FourthSection.ShowTheWatch}</a>
              </div>
            </div>
          </div>
          <div className="image-left-row">
            <img src="https://i.rosefieldwatches.com/products/campaign/aby/aby-4.png" alt="" />
          </div>
        </div>
        <div className="full-row top-space">
          <div className="full-width-image">
            <img src="https://i.rosefieldwatches.com/products/campaign/aby/aby-5.png" alt="" />
          </div>
        </div>
        <div className="full-row">
          <div className="content-left-row">
            <div className="content-center-row">
              <p className="section-title">{this.state.res_data.FifthSection.Text}</p>
            </div>
          </div>
          <div className="image-right-row">
            <img src="https://i.rosefieldwatches.com/products/campaign/aby/aby-6.png" alt="" />
          </div>
        </div>
        <div className="full-row top-space">
          <div className="full-width-image">
            <img src="https://i.rosefieldwatches.com/products/campaign/aby/aby-7.png" alt="" />
          </div>
        </div>
        <div className="full-row">
          <div className="content-left-row">
            <div className="content-center-row mobile-center-row">
              <div className="time-title">{this.state.res_data.SixthSection.TimeText}</div>
              <p className="normal-paragraph-text">{this.state.res_data.SixthSection.Text}</p>
              <div className="black-text-gray-boder-btn space-btn-left-50">
                <a href="">{this.state.res_data.SixthSection.ShowTheWatch}</a>
              </div>
            </div>
          </div>
          <div className="image-right-row">
            <img src="https://i.rosefieldwatches.com/products/campaign/aby/aby-8.png" alt="" />
          </div>
        </div>
        <div className="full-row top-space">
          <div className="full-width-image">
            <img src="https://i.rosefieldwatches.com/products/campaign/aby/aby-9.png" alt="" />
          </div>
        </div>
        <div className="full-row">
          <div className="content-right-row move-right mobile-content-center">
            <div className="content-center-row mobile-center-row">
              <p>{this.state.res_data.SeventhSection.Text}</p>
              <div className="black-text-gray-boder-btn space-btn-right-50">
                <a href="">{this.state.res_data.SeventhSection.SeeWhat}</a>
              </div>
            </div>
          </div>
          <div className="image-left-row">
            <img src="https://i.rosefieldwatches.com/products/campaign/aby/aby-10.png" alt="" />
          </div>
        </div>
        <div className="full-row top-space">
          <div className="full-width-image">
            <img src="https://i.rosefieldwatches.com/products/campaign/aby/aby-11.png" alt="" />
          </div>
        </div>
        <div className="full-row">
          <div className="content-left-row">
            <div className="content-center-row mobile-center-row">
              <div className="time-title">{this.state.res_data.EighthSection.TimeText}</div>
              <p className="normal-paragraph-text">{this.state.res_data.EighthSection.Text}</p>
              <div className="black-text-gray-boder-btn space-btn-left-50">
                <a href="">{this.state.res_data.EighthSection.ShowTheWatch}</a>
              </div>
            </div>
          </div>
          <div className="image-right-row">
            <img src="https://i.rosefieldwatches.com/products/campaign/aby/aby-12.png" alt="" />
          </div>
        </div>
        <div className="full-row">
          <div className="full-row-content-center">
            <p className="section-title">{this.state.res_data.NinethSection.Text}</p>
          </div>
        </div>
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
                <Link route="a-day-with-aby" params={{ lang:this.state.lang }} ><a className="white-border-button">Read story</a></Link>
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
                <Link route="a-day-with-ally" params={{ lang:this.state.lang }} ><a className="white-border-button">Read story</a></Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
export default withData(abycampaign);
