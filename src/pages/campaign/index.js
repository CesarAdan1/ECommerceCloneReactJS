import withData from '../../lib/withData';
import Layout from '../../components/layout';
import { Link } from '../../config/routes';


class campaign extends React.Component {
/**
* variable declaration
*/
  constructor(props) {
    super(props);
    const myData = require('../../locale/'+props.url.query.lang+'/latest-campaign.json');
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
        <section className="common-row">
          <div className="aby-section">
            <div className="banner-overlay">
              <div className="campaign-box">
                <hgroup>
                  <h2>{this.state.res_data.AbySection.CheckoutText}</h2>
                  <h3>{this.state.res_data.AbySection.IntroText}</h3>
                </hgroup>
                <p>{this.state.res_data.AbySection.SubIntroText}</p>
                <Link route="a-day-with-aby" params={{ lang:this.state.lang }}><a className="white-border-button">{this.state.res_data.AbySection.ButtonText}</a></Link>
              </div>
            </div>
          </div>
          <div className="ally-section">
            <div className="banner-overlay">
              <div className="campaign-box">
                <hgroup>
                  <h2>{this.state.res_data.AllySection.CheckoutText}</h2>
                  <h3>{this.state.res_data.AllySection.IntroText}</h3>
                </hgroup>
                <p>{this.state.res_data.AllySection.SubIntroText}</p>
                <Link route="a-day-with-ally" params={{ lang:this.state.lang }}><a className="white-border-button">{this.state.res_data.AllySection.ButtonText}</a></Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
export default withData(campaign);
