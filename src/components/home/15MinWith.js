import React from 'react';
import { Link } from '../../config/routes';

/**
   * Home 15 Min with Class
 */
class Home15minWith extends React.Component {
  /**
  * variable declaration
  */
  constructor(props) {
    super(props);
    const myData = require('../../locale/'+props.lang+'/home-15min-with.json');
    this.state = {
      url: props,
      lang: props.lang,
      res_data: myData,
    };
  }
  /**
  * Renders "Text"!
  * @return JSX
  */
  render() {
    return (
      <section>
        <style jsx>{`

        .main-wrapper {
          margin-left: 5%;
        }  
          
        .left-info {
          width:376px;
          padding:25px 0 50px 0;
          margin:0 0 0 5%;

          & h2 {
            text-transform: uppercase;
            letter-spacing: 4px;
            color:#161616;
          }

          & h3 {
            color:#161616;
            font-size:2.225em;
            padding:14px 0 0 0;
            margin:0;
          }

          & p {
            font-size: 15px; 
            box-sizing: border-box;
            padding: 18px 0 0 0;
            margin:0;
          }

          & a {
            clear:both;
            font-weight: bold;
            text-transform:uppercase;
            letter-spacing: 3px;
            color: #181818;
            font-size:12px;
            margin:20px 0 0 0;
            border-bottom:2px solid #9e9e9e;
            padding:0 0 6px 0;
            cursor:pointer;
            float:left;

            & a:hover {
              border-bottom:none;
            }
          }
        }

        .common-row{
          text-align:left;

          & span {
            float:left;
            width:100%;
            background:url(/static/temp_images/home-15min.png) no-repeat;
            background-size:cover;
            height:805px;
          }
        }

        .left-row{
          width: 50%;
          padding: 250px 0 0;
          float:left;
        }

        .right-row {
          width: 50%;
          float:right;
        }

        @media only screen and (max-width:1024px){
          
          .left-row {
            width: 100%;
            padding: 25px 0 0;
            margin:0;
          }

          .right-row {
            width: 96%;
            margin-top: 5%;
            float: left;
          }
            
          .common-row{
            & span {
              min-height:380px;
              height:auto;
            }    
          }

          .left-info {
            width: auto;
            
            & h3 {
              margin:0;
            }

            & p {
              margin:0;
              width: 93%;
            }

            & a {
              margin:30px 0 30px 0;
              float:left;
            }  
          }
          
        }
           
       `}</style>
        <div className="main-wrapper">
          <div className="common-row right-row">
            <div className="image-row"><span>&nbsp;</span></div>
          </div>
          <div className="common-row left-row">
            <div className="left-info">
              <hgroup>
                <h2>{this.state.res_data.MainTitle}</h2>
                <h3>{this.state.res_data.Name}</h3>
              </hgroup>
              <p>{this.state.res_data.Description}</p>
              <Link route="15-minutes-with-stephanie" params={{ lang:this.state.lang }}>
                <a>{this.state.res_data.LinkText}</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home15minWith;
