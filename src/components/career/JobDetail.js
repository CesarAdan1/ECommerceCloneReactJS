import React from 'react';
import axios from 'axios-es6';
import FacebookIcon from 'react-icons/lib/fa/facebook';
import PinterestIcon from 'react-icons/lib/fa/pinterest-p';
import LinkDinIcon from 'react-icons/lib/fa/linkedin';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import { Link } from '../../config/routes';


/**
 * Job List declaration
 */
class JobDetail extends React.Component {
/**
* variable declaration
*/
  constructor(props) {
    super(props);
    this.state = {
      jdata: [],
      id: props.id,
      lang: props.lang,
    };
  }
/**
* Api Call declaration
*/
  componentDidMount() {
    //const urlparams = window.location.href.split('jobid=');
    const self = this;
    axios.get('https://api.resumatorapi.com/v1/jobs/' + self.state.id + '?apikey=eSuehHbotwSCW2Nd4lF38A7ydz5hiTij', {
    })
    .then(function (response) {
      self.setState({ jdata: response.data });
    })
    .catch(function (response) {
    });
  }

  /**
   * Renders "Job List data"!
   * @return JSX
   */
  render() {
    return (
      <div className="career-detail">
        <style jsx global>{`

        .career-detail {
          float: left;
          lost-column: 12/12;
          padding:60px 0 60px 80px;

          & h3 {
            font-size: 42px;
            width: 66%;
            text-transform: inherit;
            padding-bottom: 24px;
            font-weight: bold;
            margin: 0;
            font-family: 'Georgia,Times,"Times New Roman",serif';
          }

          & div {
            width: 73%;
          }
        }

        .main-detail {

          & p {
            color: #3c3c3c;
            font-size: 16px;
            line-height: 30px;
            width: 100%;

            & strong {
              font-size: 20px;
              font-weight: bold;
            }

            & b {
              font-size: 20px;
              font-weight: bold;
            }
          }

          & ul {
            width: 100%;
            float: left;
            margin: 0;

            & li {
              color: #3c3c3c;
              font-size: 16px;
              letter-spacing: 1px;
              list-style: disc;
              line-height: 42px;
            }
          }          
          
        }

        .social-icon-section {
          float: left;
          width: 96%;

          & a {
            border: 1px solid #3C3C3C;
            border-radius: 50%;
            -webkit-border-radius: 50%;
            font-size: 16px;
            padding: 7px 8px;
            margin: 21px 9px 20px;
            line-height: 100%;
            float: left;
          }

          & a:hover {
            color: #FED6CC;
            border: 1px solid #FED6CC;
          }
        }

        @media only screen and (max-width: 1024px) {
          .career-detail {
            lost-column: 10/12;
            padding: 40px 0 40px 40px;

            & h3 {
              width: 100%;
              font-size: 36px;
            }

            & div {
              width: 95%;
            }
          }

          .main-detail {
            & ul {
              width: 90%;

              & li {
                line-height: 32px;
              }
            }
          }

          .social-icon-section {
            width: 100%;
            box-sizing: border-box;
          }
        }
                
       `}</style>
        <h3>{this.state.jdata.title}</h3>
        <div className="main-detail" dangerouslySetInnerHTML={{ __html: this.state.jdata.description }} ></div>
        <div className="common-row">
          <a href="" className="white-black-border-button">Apply for this job</a>
        </div>
        <div className="social-icon-section">
          <a href=""><FacebookIcon /></a>
          <a href=""><TwitterIcon /></a>
          <a href=""><PinterestIcon /></a>
          <a href=""><LinkDinIcon /></a>
        </div>
      </div>
    );
  }
}

export default JobDetail;
