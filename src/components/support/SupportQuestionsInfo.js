import React from 'react';
import axios from 'axios-es6';
import Collapsible from 'react-collapsible';
import SupportQuestionsInfoList from '../../components/support/SupportQuestionsInfoList';


/**
 * Job List declaration
 */
class SupportQuestionsInfo extends React.Component {
  // @constructor tag allows missing @returns tag
  /**
   * Default Inistilization.
   * @constructor
   * @param {Object} props The Object of All the state data
   */
  constructor(props) {
    super(props);
    this.state = {
      lang: props.lang,
      cat_id: props.cat_id,
      cat_name: props.cat_name,
      faq_data: [],
    };
  }
  /**
  * Api Call declaration
  * @return {Object} FAQ questions and its details
  */
  componentDidMount() {
   // alert(11111)
    const self = this;
    axios.get(`https://rosefieldwatches.zendesk.com/api/v2/help_center/${self.state.lang}/categories/${self.state.cat_id}/articles.json`, {})
   .then((response) => {
     self.setState({ faq_data: response.data.articles });
   }).catch((response) => {
     console.log(response);
   });
  }

  /**
  * Renders "Job List data"!
  * @return{Object} JSX faq questions and answers retuen
  */
  render() {
    return (
      <div>
        <style jsx global>{`
          .Collapsible {
            border-top: 1px solid #e1e1e1;
            width: 100%;
            float: left;
          }

          .Collapsible__contentInner {
            margin: 0 5%;
            padding: 1px 0px 22px 0px;

            & p {
              width: 100%;
              margin: 0 0 10px 0;
              color: #5a5859;
              font-size: 15px;
            }

            & a {
              width: 100%;
              display: block;
              padding: 14px 0 14px 20px;
              margin-left: -20px;
            }

            & a:hover {
              background-color: #ffd6cb;
            }

          }

          .Collapsible__trigger {
            display: block;
            text-decoration: none;
            position: relative;
            padding: 26px 0 26px 0;
            margin: 0 5%;
            color: #181818;
            font-size: 12px;
            letter-spacing: 3px;
            text-transform: uppercase;
            font-weight: bold;
            cursor: pointer;
          }

          .Collapsible__trigger.is-open:before {
            content: "";
            background:url(/static/images/minus.svg) no-repeat;
            height: 10px;
            width: 10px;
            float: right;
          }

          .Collapsible__trigger.is-closed:before {
            content: "";
            background:url(/static/images/plus.svg) no-repeat;
            height: 10px;
            width: 10px;
            float: right;
          }
        `}</style>
        <div>
          <Collapsible trigger={this.state.cat_name} transitionTime={160} easing="ease-in-out">
            <div className="panel">
              <div className="totalorder-raw">{
                this.state.faq_data.map((fqlistata) => {
                  const result = [];
                  result.push(
                    <SupportQuestionsInfoList title={fqlistata.title} body={fqlistata.body} />);
                  return <div>{result}</div>;
                })
              }
              </div>
            </div>
          </Collapsible>
        </div>
      </div>
    );
  }
}

export default SupportQuestionsInfo;
