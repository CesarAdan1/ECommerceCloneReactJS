import withData from '../../lib/withData';
import Layout from '../../components/layout';
import { Link } from '../../config/routes';

class allycampaign extends React.Component {
/**
* variable declaration
*/
  constructor(props) {
    super(props);
    const myData = require('../../locale/'+props.url.query.lang+'/ally-campaign.json');
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
          background: url("https://i.rosefieldwatches.com/products/campaign/ally/ally-main-banner.png")no-repeat center;
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

          & .section-title {
            font-size: 28px;
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

          & p {
            font-size: 15px;
            float: left;
            text-align: center;
            width: 100%;
            
          }

          & .time-title {
            text-align: center;
            width: 100%;
            float: left;
            padding: 0;
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
          width: 100%;
        }

        .space-btn-left-50 {
          margin-top: 50px;
          padding-left: 16%;
          float: left;
        }

        .space-25{
          margin-top: 25px;
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
            margin-top: 50px;
          }

         
          .image-right-row {
            width: 100%;
          }

          .image-left-row {
            width: 100%;  

            & img {
              width: 100%;          
            }
            
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
            padding: 16% 0;

          }

          .move-right {
            float: left !important;
          }

          .top-space {
            margin-top: 0;
          }

          .content-center-row{
            padding-top:5%;
          }
          
          .mobile-spc{
            padding-left: 6%;
          }
          
          .mobile-remove-space {
            padding-left: 6% !important;
          }

          .content-left-row{
            margin-top: 0;
          }

          .section-title:nth-child(1n){
            margin-right: 0;
          }

          .full-row-content-center {
            width: 80%;
          }

          .content-center-row {
            margin: 0 auto;
            lost-column: 3.83/4.83;
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
                <div className="time-title space-25">{this.state.res_data.FirstSection.TimeText}</div>
                <p className="section-title">{this.state.res_data.FirstSection.Text1}</p>
                <p className="normal-paragraph-text">{this.state.res_data.FirstSection.Text2}</p>
              </div>
            </div>
            <div className="image-right-row">
              <img src="https://i.rosefieldwatches.com/products/campaign/ally/ally-1.png" alt="" />
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
              <img src="https://i.rosefieldwatches.com/products/campaign/ally/ally-2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="full-row top-space">
          <div className="full-width-image">
            <img src="https://i.rosefieldwatches.com/products/campaign/ally/ally-3.jpg" alt="" />
          </div>
        </div>
        <div className="full-row">
          <div className="full-row-content-center">
            <p>{this.state.res_data.ThirdSection.Text1}</p>
            <div className="time-title space-25">{this.state.res_data.ThirdSection.TimeText}</div>
            <p className="section-title">{this.state.res_data.ThirdSection.Text2}</p>
          </div>
        </div>
        <div className="full-row">
          <div className="image-left-row">
            <img src="https://i.rosefieldwatches.com/products/campaign/ally/ally-4.png" alt="" />
          </div>
          <div className="content-right-row move-right mobile-content-center">
            <div className="content-center-row mobile-center-row">
              <div className="time-title-second space-25">{this.state.res_data.FourthSection.TimeText}</div>
              <p>{this.state.res_data.FourthSection.Text}</p>
              <div className="black-text-gray-boder-btn space-btn-right-50">
                <a href="">{this.state.res_data.FourthSection.ShowTheWatch}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="full-row top-space">
          <div className="full-width-image">
            <img src="https://i.rosefieldwatches.com/products/campaign/ally/ally-5.jpg" alt="" />
          </div>
        </div>
        <div className="full-row">
          <div className="content-left-row">
            <div className="content-center-row">
              <p className="section-title">{this.state.res_data.FifthSection.Text}</p>
            </div>
          </div>
          <div className="image-right-row">
            <img src="https://i.rosefieldwatches.com/products/campaign/ally/ally-6.jpg" alt="" />
          </div>
        </div>
        <div className="full-row">
          <div className="full-row-content-center">
            <p className="section-title">{this.state.res_data.SixthSection.Text}</p>
          </div>
        </div>
        <div className="full-row top-space">
          <div className="full-width-image">
            <img src="https://i.rosefieldwatches.com/products/campaign/ally/ally-7.jpg" alt="" />
          </div>
        </div>
        <div className="full-row">
          <div className="content-left-row">
            <div className="content-center-row mobile-center-row">
              <p className="normal-paragraph-text">{this.state.res_data.SeventhSection.Text1}</p>
              <p className="normal-paragraph-text">{this.state.res_data.SeventhSection.Text2}</p>
              <div className="black-text-gray-boder-btn space-btn-left-50">
                <a href="">{this.state.res_data.SeventhSection.ShowTheWatch}</a>
              </div>
            </div>
          </div>
          <div className="image-right-row">
            <img src="https://i.rosefieldwatches.com/products/campaign/ally/ally-8.png" alt="" />
          </div>
        </div>
        <div className="full-row top-space">
          <div className="full-width-image">
            <img src="https://i.rosefieldwatches.com/products/campaign/ally/ally-9.jpg" alt="" />
          </div>
        </div>
        <div className="full-row">
          <div className="full-row-content-center">
            <div className="time-title">{this.state.res_data.EighthSection.TimeText}</div>
            <p className="section-title">{this.state.res_data.EighthSection.Text1}</p>
            <p>{this.state.res_data.EighthSection.Text2}</p>
          </div>
        </div>
        <div className="full-row">
          <div className="image-left-row">
            <img src="https://i.rosefieldwatches.com/products/campaign/ally/ally-10.png" alt="" />
          </div>
          <div className="content-right-row move-right mobile-content-center">
            <div className="content-center-row mobile-center-row">
              <p>{this.state.res_data.NinethSection.Text}</p>
              <div className="black-text-gray-boder-btn space-btn-right-50">
                <a href="/campaign/aby">{this.state.res_data.NinethSection.SeeWhatAby}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="full-row top-space">
          <div className="full-width-image">
            <img src="https://i.rosefieldwatches.com/products/campaign/ally/ally-11.png" alt="" />
          </div>
        </div>
        <div className="full-row">
          <div className="full-row-content-center">
            <div className="time-title">{this.state.res_data.TenthSection.TimeText}</div>
            <p className="section-title">{this.state.res_data.TenthSection.Text}</p>
          </div>
        </div>
        <div className="full-row">
          <div className="image-right-row">
            <img src="https://i.rosefieldwatches.com/products/campaign/ally/ally-12.jpg" alt="" />
          </div>
          <div className="content-left-row">
            <div className="content-center-row mobile-center-row">
              <p className="section-title mobile-remove-space">{this.state.res_data.EleventhSection.Text}</p>
              <div className="black-text-gray-boder-btn space-btn-left-50 mobile-spc">
                <a href="">{this.state.res_data.EleventhSection.ShowTheWatch}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="full-row top-space">
          <div className="full-width-image">
            <img src="https://i.rosefieldwatches.com/products/campaign/ally/ally-15.jpg" alt="" />
          </div>
        </div>
        <div className="full-row">
          <div className="full-row-content-center">
            <p>{this.state.res_data.TwelthSection.Text}</p>
          </div>
        </div>
        <div className="full-row">
          <div className="image-left-row">
            <img src="https://i.rosefieldwatches.com/products/campaign/ally/ally-14.png" alt="" />
          </div>
          <div className="content-right-row move-right mobile-content-center">
            <div className="content-center-row mobile-center-row">
              <p className="section-title">{this.state.res_data.thirteenthSection.Text}</p>
            </div>
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
export default withData(allycampaign);
