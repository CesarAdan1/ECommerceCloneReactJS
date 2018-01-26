import React from 'react';
import axios from 'axios-es6';
import Collapsible from 'react-collapsible';
import { Link } from '../../config/routes';

/**
 * Job List declaration
 */
class JobList extends React.Component {
 /**
  * @param {Array} Default Data
  * @return {Object} Store data in state
  */
  constructor(props) {
    super(props);
    this.state = {
      jdata: [],
      lang: props.lang,
    };
  }
  /**
  * Api Call declaration
  * @return {Object} Set API response data in state
  */
  componentDidMount() {
    const self = this;
    axios.get('https://api.resumatorapi.com/v1/jobs/status/open?apikey=eSuehHbotwSCW2Nd4lF38A7ydz5hiTij', {
    })
    .then((response) => {
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

          @media only screen and (max-width:1024px){
            .Collapsible__contentInner {
              margin: 0 0 5%;
              padding: 1px 0px 22px 20px;
            }
          }
        `}</style>
        <div>
          <Collapsible trigger="Jobs" transitionTime={160} easing="ease-in-out">
            {
              this.state.jdata.map(data => (
                <p>
                  <Link route="job-detail" params={{ lang:this.state.lang, id:data.id }}>
                    <a>{data.title}</a>
                  </Link>
                </p>
            ))}
          </Collapsible>
        </div>
      </div>
    );
  }
}

export default JobList;
