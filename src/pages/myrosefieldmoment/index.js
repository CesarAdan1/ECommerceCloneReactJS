import React from 'react';
import withData from '../../lib/withData';
import Layout from '../../components/layout';
import RoseFieldMomentGallery from '../../components/myrosefieldmoment/RoseFieldMomentGallery';

class Myrosefieldmoment extends React.Component {
/**
* variable declaration
*/
  constructor(props) {
    super(props);
    const myData = require('../../locale/'+props.url.query.lang+'/myrosefieldmoment.json');
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
        .rosefieldmoment-text-main {
          lost-center: 700px;
          float: left;

          & h1 {
            font-size: 28px;
            letter-spacing: 4px;
            color: #000;
            font-family: 'Georgia, Times, "Times New Roman", serif';
            font-weight: lighter;
            font-style: italic;
          }

          & p {
            color: #181818;
            font-weight: lighter;
            line-height: 160%;
            font-size: 15px;
          }
        }

        @media only screen and (max-width: 1024px) {
          .rosefieldmoment-text-main {
            width: 100%;
            & h1 {
              font-size: 24px;
              letter-spacing: 2px;
            }
          }
        }

        `}</style>
        <div className="main-container">
          <div className="common-row">
            <div className="rosefieldmoment-text-main">
              <h1>{this.state.res_data.title}</h1>
              <p>{this.state.res_data.text}</p>
            </div>
          </div>
          <div className="rosefieldmoment-gallery">
            <RoseFieldMomentGallery />
          </div>
        </div>
      </Layout>
    );
  }
}

export default withData(Myrosefieldmoment);
