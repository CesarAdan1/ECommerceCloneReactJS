import React from 'react';

const Vimeo = require('react-vimeo');

/**
   * Behind Brand Class
 */
class BehindBrand extends React.Component {
  /**
  * variable declaration
  */
  constructor(props) {
    super(props);
    const myData = require('../../locale/'+props.lang+'/home-behind-brand.json');
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
        <style jsx global>{`

        .info-box { 
          margin: 0 0 0 8%;
          padding: 108px 0 0 0;
          float: left;
          position: absolute;
          

          & h2 {
            color: #000;
            text-transform: uppercase;
          }

          & h3 {
            color: #000;
            font-family: 'publico';
            font-size: 46px;
            padding: 14px 0 0 0;
            margin:0;
          }

          & p{
            color: #000;
            font-size: 15px;
            padding: 0 0 16px 0;
            width: 300px;
            line-height: 170%;
          }

          & a {
            float:left;
            line-height: 120%;
            clear: both;
            background: url(/static/images/white-play-btn.svg) no-repeat 22px 12px;
            color: #FFFFFF;
            border: 2px solid #FFFFFF;
            padding: 16px 30px 16px 50px;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 4px;
            font-weight: bold;
            margin: 30px 0 0 0;
            text-decoration:none;
          }

        }


        .vimeo {
          width: 100%;
          float: left;
          height: 800px;
        }

        .vimeo-image {
          background-size: cover;
          position: relative;
        }

        .vimeo-loading { 
          display:none;
        }

        .vimeo-play-button {
          background: url(/static/images/video-play-button/video-play-button-w.png) no-repeat center;
          left: 10%;
          position: absolute;
          height: 50px;
          width: 200px;
          border: 0;
          outline: 0;
          top: 79%;
          cursor: pointer;
        }

        .vimeo-embed iframe {
          width: 100%;
          height: 800px;
        }

        .vimeo-play-button svg {
          display: none;
        }

        .player .video-wrapper video {
          width: 100%;
          height: 100%;
          padding-right: 0;
          overflow: hidden;
          object-fit: cover;
        }

        @media only screen and (max-width:1024px){
          .info-box {
            margin: 0 0 0 6%;
          }        
        }

      `}</style>

        <div>
          <Vimeo videoId={225838782} autoplay={false} />
          <div className="info-box">
            <hgroup>
              <h2>{this.state.res_data.AMSNYC}</h2>
              <h3>{this.state.res_data.Title}</h3>
            </hgroup>
            <p>{this.state.res_data.Description}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default BehindBrand;
