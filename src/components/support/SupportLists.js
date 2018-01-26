import React from 'react';
import axios from 'axios-es6';
import SupportBottomContentData from '../../components/dummy_data/support_bottom_content.json';
import SupportQuestionsInfo from '../../components/support/SupportQuestionsInfo';
import SupportTopContentData from '../dummy_data/support_top_content.json';
/**
* Supports Page List
* @returns {Object} Return Full page .
*/
class SupportLists extends React.Component {
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
      jdata: [],
      zenlang: '',
    };
    
  }
  /**
  * API Call for FAQ Categories
  * @returns {Object} Return FAQ Categories page.
  */
componentDidMount() {
  const self = this;
  const zendesklangdata = require('../../components/dummy_data/zendesk-lang.json');
  const zenlang = this.checkendesklang(this.state.lang, zendesklangdata);
  if (zenlang !=='') {
    this.state.zenlang = zenlang;
  } else {
    this.state.zenlang = 'en-us';
  }
  console.log(this.state);
  axios.get(`https://rosefieldwatches.zendesk.com/api/v2/help_center/${self.state.zenlang}/categories.json?sort_by=updated_at&sort_order=asc`, {
  })
  .then((response) => {
      self.setState({ jdata: response.data.categories });
  }).catch((response) => {
      console.log(response);
  });
}

checkendesklang(lang, zenlangdata) {
    if(zenlangdata[lang]){
        return zenlangdata[lang];
    } 
}

/**
* Adds two numbers together.
* @returns {Object} The Data of Support List
*/
render() {
return (
<div>
  <style jsx>{`
    .faq-main-banner{
        margin-bottom: 1%;
        float: left;
        width: 100%;
        position:relative;
        height: 342px;
        background:url(../static/images/faq-banner-main.png)no-repeat center center;background-size: cover;
        & .faq-banner-txt-main{
        float: left;
        width: 50%;
        position: absolute;
        top:0;
        height: auto;
    }
    & .faq-first-title{
        float: left;
        position: absolute;
        left: 38px;
        top: 88px;
        letter-spacing: 4px;
        white-space: nowrap;
        font-size: 13px;
        line-height: 22px;
        font-weight: 400;
        color: #ffffff;
        text-transform: uppercase;
        z-index: 21;
    }
    & .faq-second-title {
        float: left;
        position: absolute;
        top: 124px;
        left: 38px;
        z-index: 21;
        letter-spacing: 1px;
        white-space: nowrap;
        font-size: 46px;
        line-height: 138%;
        color: #fff;
        text-transform: initial;
        word-wrap: break-word;
        line-height: 110%;
        white-space: initial;
        width: 50%;
    }
    & .query-raw{
        float: left;
            & .query-raw input[type="text"] {
            background-color: #fff;
            position: absolute;
            top: 252px;
            left: 38px;
            border-radius: 0 !important;
            -webkit-border-radius: 0 !important;
            -moz-border-radius: 0 !important;
            height: 58px;
            width: 500px;
            padding-left: 20px;
            color: #000;
            font-size: 15px;
            letter-spacing: 1px;
            text-transform: initial;
            z-index: 21;
            border: 0;
        }
    }
    .support-left-section {
        lost-column: 8/12;
        /*background-color: #fffbfa;*/
        & img {
        width: 100%;
        }
        & .faq-main {
            float: left;
            width: 100%;
            & .faq-container {
                float: none;
                margin:0 auto;
                width: 1386px;
                & .faq-txt{
                color: #3c3c3c !important;
                font-size: 40px;
                padding: 44px 0px 20px;
                line-height: 130%;
                margin-bottom: 0;
                text-transform: inherit;
                float: left;
                width: 96%;
                padding-left: 4%;
                letter-spacing: 1px;
            }
        }
    }
    }
    .support-right-section {
    lost-column: 4/12;
    & h2 {
    font-size: 35px;
    padding: 30px 0 22px 42px;
    color: #181818;
    font-weight: bold;
    }
    & p {
    color: #5a5859;
    font-size: 15px;
    font-weight: normal;
    }
    & .current-opp {
    float: left;
    width: 100%;
    padding-bottom: 12px;
    }
    }
    }
    .faq-banner-txt-main {margin: 0 auto;max-width: 1386px;padding: 15px;}
    hgroup {margin-left: 3%;margin-top: 4%;max-width: 800px;}
    .faq-first-title {font-size: 13px;color: #ffffff;font-weight: 400;letter-spacing: 4px;padding:0; margin:0;text-transform: uppercase;}
    .faq-second-title {color: #ffffff;font-size: 3.6em;font-style: normal;font-weight: 100;letter-spacing: 4px;margin: 0.4em 0;}
    .query-raw{margin-left: 3%;margin-top: 4%;max-width: 800px;}
    .query-raw input[type="text"] {color: 767676;height: 46px;width: 600px !important;margin-bottom: 0;}
    .filt-btn {float: left;width: auto;margin: 10px 0px 20px 1%;background-color: #fbd6ce;padding: 19px 15px 18px;text-align: center;font-size: 13px;line-height: 100%;color: #181818;text-transform: uppercase;letter-spacing: 4px;}
    .support-left-section {float: left;width: 65%;}
    .faq-container {float: left;width: 100%;}
    .faq-txt {color: #181818;float: left;font-size: 3em;font-style: normal;letter-spacing: 2px;line-height: 100%;margin: 0;padding-bottom: 10px;padding-left: 4%;padding-top: 30px;width: 100%;}
    .faq-top-cont {color: #181818;font-size: 17px;font-style: normal;line-height: 30px;letter-spacing: 0.75px;width: 100%;float: left;padding-left: 4%;}
    p.faq-sec-cont {color: #181818;font-size: 16px !important;font-style: normal;width: 100%;float: left; line-height: 30px;letter-spacing: 0.75px;padding-top: 14px;padding-left: 4%;letter-spacing: inherit;}
    .faq-sec-title {color: #181818;float: left;font-size: 3em;font-style: normal;letter-spacing: 2px;line-height: 100%;margin: 0;padding-bottom: 10px;padding-left: 4%;padding-top: 30px;width: 100%;}
    .account-send-raw {float: left;width: 100%;margin-bottom: 4%; }
    .account-send-raw h4{float: left;font-size: 20px;padding-left: 4%;margin: 20px 0;letter-spacing: 2px;width: 100%;}
    .faq-buttons{float: left;width: 100%; }
    .faq-buttons-1, .faq-buttons-2{display: inline-block;position: relative;margin-left: 6%;padding: 20px 20px 20px 21px;cursor: pointer; background: none;color: #000;z-index: 0;border:0;margin:0;-webkit-appearance:none;margin-left: 6%;}
    .faq-buttons-1:before, .faq-buttons-2:before{content: "";position: absolute;z-index: -1;top: 0;left: 0;right: 0;bottom: 0;/* background: #fed6cc;*/transform: scaleX(0.5);transform-origin: 0 50%;transition: transform .3s ease-out;}
    .faq-buttons-1:hover:before, .faq-buttons-2:hover:before{ transform: scaleX(1);background: #fed6cc;}
    .faq-buttons-1:after, .faq-buttons-2:after{     position: absolute;height: 4px;width: calc(1 - $letterSpacing);right: 22.95px;left: 21px;  margin-top: 4px;content: ' ';display: block;background: transparent;}
    .faq-buttons-1:hover:after, .faq-buttons-2:hover:after {position: absolute;display: block;height: 4px;/*width: 50%;*/margin: 0 auto;margin-top: 4px;-webkit-animation: lineWidth 0.4s;animation: lineWidth 0.4s;          -webkit-animation-timing-function: cubic-bezier(0.57,0.21,0.86,0.39);animation-timing-function: cubic-bezier(0.57,0.21,0.86,0.39);background: #3b3b39;}
    .faq-buttons-1 a, .faq-buttons-2 a{width: auto;font-size: 13px;color: #181818;letter-spacing: 4px;text-transform: uppercase;}
    .accordian-box {background-color: #f9f9f9;box-shadow: 0 0 2px 1px #cfcfcf;display: table;float: none;margin: 60px auto 60px;padding: 4% 4% 4.2%;width: 84%;}
    .accordian-inner-box {background-color: #ffffff;border: 0 none;box-shadow: 0 0 2px 1px #e3e3e3;float: left;height: 400px;margin-top: 20px;padding: 10px;resize: none;width:100% !important;}
    .accordian-box-cont {color: #181818; font-size: 16px;font-style: normal;line-height: 24px;letter-spacing: 0.75px;width: 100%;float: left;}        
    .faq-accordian-inner-box-buttons-1{display: inline-block;position: relative;padding: 20px 20px 20px 21px;cursor: pointer;background: none;color: #181818;z-index: 0;border:0;margin:0;margin:28px 0 18px;-moz-appearance:none;-webkit-appearance:none;-webkit-appearance:none;}
    .faq-accordian-inner-box-buttons-1:before{content: "";position: absolute;z-index: -1;top: 0;left: 0;right: 0;bottom: 0;background: #ffd6cc;transform: scaleX(0.5);transform-origin: 0 50%;transition: transform .3s ease-out;}
    .faq-accordian-inner-box-buttons-1:hover:before{transform: scaleX(1);}
    .faq-accordian-inner-box-buttons-1:after{position: absolute;height: 4px;width: calc(1 - $letterSpacing); right: 22.95px;left: 21px;margin-top: 4px;content: ' ';display: block;background: #393939;}
    .faq-accordian-inner-box-buttons-1:hover:after {position: absolute;display: block;height: 4px;margin: 04px auto 0; -webkit-animation: lineWidth 0.4s;animation: lineWidth 0.4s;-webkit-animation-timing-function: cubic-bezier(0.57,0.21,0.86,0.39);animation-timing-function: cubic-bezier(0.57,0.21,0.86,0.39);background: #181818;}
    .faq-accordian-inner-box-buttons-1 a {width: auto;font-size: 13px;color: #181818; letter-spacing: 4px;text-transform: uppercase;}
    .support-right-section {float: right;width: 30%;}
    .faq-contact-section{float: left;width: 100%;padding: 3% 5%;margin-left: 0;height: auto;background-color: #fffbfa;}
    .faq-contact-section h5 {margin: 0;color: #181818;float: left;font-size: 32px;letter-spacing: 0.2em;line-height: 32px;padding: 24px 0;text-transform: capitalize;width: 100%;}
    .faq-contact-section p {float: left;width: 100%;color: #181818;font-size: 14px;letter-spacing: 1px;      line-height: 140%;margin:0 0 10px;}
    .faq-contact-section a {float: left;width: 100%;color: #e3a797;font-size: 14px;text-decoration: none;letter-spacing: 0.75px;margin-bottom: 18px;}
    .faq-social-raw {float: left;width: 100%;margin-top: 40px;margin-bottom: 46px;}
    .faq-social-raw a {float: left;width: 100%;color: #181818;letter-spacing: 3px;text-transform: uppercase;font-size: 12px;padding-bottom: 5px;text-decoration: none;}
    .faq-social-raw a i {height: 18px;width: 18px;border-radius: 50%;border: 1px solid #000;padding: 10px;margin: 0 12px 0px 0;text-align: center;float: left;font-size: 16px;}
    .fa-comments-o {background: url(../static/images/chat.png)no-repeat;background-position: center;margin-top: 11px;margin-left: 11px;}
    .faq-social-raw a span {float: left;width: 72%;color: #181818;letter-spacing: 3px;text-transform: uppercase;font-size: 12px;padding-bottom: 5px;text-decoration: none;line-height: 100%;padding: 14px 0px;}
    .fa-facebook {background: url(../static/images/facebook.png)no-repeat;background-position: center;margin-top: 11px;margin-left: 11px;}
    .fa-facebook:before{content: "" !important;}
    .fa-envelope-o {background: url(../static/images/messeage.png)no-repeat;background-position: center;margin-top: 11px;margin-left: 11px;}
    .faq-request-title {float: left;width: 100%;font-size: 14px;letter-spacing: 7px;color: #181818;letter-spacing: 4px;text-transform: uppercase;margin-bottom: 30px;}
    .faq-request-1 {padding-bottom: 12px;float: left;width: 100%;}
    .faq-request-1 p {float: left;width: 100%;color: #181818;font-size: 14px;letter-spacing: 1px;line-height: 140%;}
    .faq-request-1 a {float: left;width: 100%;color: #e3a797;font-size: 14px;text-decoration: none;letter-spacing: 0.75px;margin-bottom: 18px;}
    @media only screen and (max-width: 1024px) {
    .support-right-section {lost-column: 12/12;}
    .support-left-section {lost-column: 12/12;}
    }
    @media only screen and (max-width: 991px){
        .faq-second-title{font-size: 3em;}
        .query-raw input[type="text"] {
            width:500px !important;
        }
        .faq-txt{
            font-size: 2.5em;
        }
        .faq-sec-title{
            font-size: 2.5em;
        }
        .accordian-inner-box {
            height: 200px;width:96% !important;
        }
    }
    @media only screen and (max-width: 768px){
        .faq-txt{font-size: 2em;}
        .faq-sec-title{font-size: 2em;}
    }
    @media only screen and (max-width: 767px){
        .faq-second-title{font-size: 2em;}
        .support-left-section {float: left;width: 95%;}
        .support-right-section {float: left;width:90%;}
        .faq-social-raw {margin-bottom: 16px;margin-top: 20px;}
    }
    @media only screen and (max-width:640px){
        .query-raw input[type="text"] {
            width: 400px !important;
        }
    }
    @media only screen and (max-width: 558px) {
        .accordian-inner-box{width: 94% !important}
    }
    @media only screen and (max-width: 499px){
        .query-raw input[type="text"] {
            width: 280px !important;
        }
        .accordian-inner-box{
            width: 90% !important
        }
    }        
    @media only screen and (max-width: 384px){
        .query-raw input[type="text"] {
            width: 260px !important;
        }
    }
    
    @media only screen and (max-width: 360px){
        .query-raw input[type="text"] {
            width: 240px !important;
        }
    }

    `}
  </style>
  <div className="commn-row">
    <section className="faq-main-banner">
      <div className="faq-banner-txt-main">
        <hgroup>
          <h5 className="faq-first-title">Customer Support</h5>
          <h1 className="faq-second-title">How can we help you?</h1>
        </hgroup>
        <div className="query-raw">
          <form role="search" className="query-main" autoComplete="off" method="">
            <input name="query" id="query" placeholder="To Search" autoComplete="off" aria-label="To Search" type="text" />
            <a className="filt-btn" href="#">Apply Filter</a>
          </form>
        </div>
      </div>
    </section>
    <div className="main-container">
      <div className="support-left-section">
        <section className="faq-main">
          <div className="faq-container">
            <h2 className="faq-txt">{SupportTopContentData.main_title}</h2>
            <p className="faq-top-cont">{SupportTopContentData.main_title_desc}</p>
            <h3 className="faq-sec-title">{SupportTopContentData.question}</h3>
            <p className="faq-sec-cont">{SupportTopContentData.answer}</p>
            <div className="account-send-raw">
              <h4 id="faq-question-115002209729">Didn’t find the answer you were looking for?</h4>
              <div className="faq-buttons">
                <button className="faq-buttons-1" type="button">
                <a>Yes</a>
                </button>
                <button className="faq-buttons-2" type="button">
                <a>No</a>
                </button>
              </div>
            </div>
            <div className="accordian-box">
              <form className="comment-form" action="">
                <input name="" value="" type="hidden" />
                <span className="accordian-box-cont">
                  {SupportTopContentData.box_top_message}
                  <span>
                    <textarea className="accordian-inner-box" name="comment" />
                    <div className="faq-accordian-inner-box-buttons">
                      <button className="faq-accordian-inner-box-buttons-1" type="button" onClick={this.SubmitTicket}>
                      <a>send</a>
                      </button>
                    </div>
                  </span>
                </span>
              </form>
            </div>
          </div>
        </section>
        {
        this.state.jdata.map(data => (
        <SupportQuestionsInfo lang={this.state.zenlang} cat_id={data.id} cat_name={data.name} />
        ))
        }
      </div>
      <div className="support-right-section">
        <div className="faq-contact-section">
          <h5>Contact</h5>
          <p dangerouslySetInnerHTML={{ __html: SupportBottomContentData.support_time }} />
          <p dangerouslySetInnerHTML={{ __html: SupportBottomContentData.support_contact }} />
            <a href={`mailto:${SupportBottomContentData.support_email}`} dangerouslySetInnerHTML={{ __html: SupportBottomContentData.support_email }} />
          <div className="faq-social-raw">
          <a href={`https://www.instagram.com/${SupportBottomContentData.instagram_link}`}><i className="fa-comments-o" aria-hidden="true" /><span>Instagram</span></a>
          <a href={`https://www.facebook.com/${SupportBottomContentData.facebook_link}/?fref=ts`}><i className="fa-facebook" aria-hidden="true" /><span>Facebook</span></a>
          <a href={`mailto:${SupportBottomContentData.support_email}`}><i className="fa-envelope-o" aria-hidden="true" /><span>Email</span></a>
          </div>
          <div className="faq-request-title">Companies and relations</div>
          <div className="faq-request-1">
            <p>Store requests</p>
            <a href={`mailto:${SupportBottomContentData.store_request}`} dangerouslySetInnerHTML={{ __html: SupportBottomContentData.store_request }} />
          </div>
          <div className="faq-request-1">
            <p>Press requests</p>
            <a href={`mailto:${SupportBottomContentData.press_request}`} dangerouslySetInnerHTML={{ __html: SupportBottomContentData.press_request }} />
          </div>
          <div className="faq-request-1">
            <p>Blogger collaborations</p>
            <a href={`mailto:${SupportBottomContentData.blogger_collaborations}`} dangerouslySetInnerHTML={{ __html: SupportBottomContentData.blogger_collaborations }} />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
}
}
export default SupportLists;