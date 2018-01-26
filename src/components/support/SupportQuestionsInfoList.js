import React from 'react';
import Collapsible from 'react-collapsible';


const SupportQuestionsInfoList = ({ title, body }) => {
  return (<div>
    <style jsx>{`
      .career-left-section {
        lost-column: 8/12;
        background-color: #fffbfa;

        & img {
          width: 100%;
        }
      }

      .career-right-section {
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

      .culture-section {
        lost-column: 8/12;
        padding:60px 0 60px 80px;

        & h3 {
          font-size: 42px;
          color: #181818;
          text-transform: inherit;
          padding-bottom: 24px;
          font-weight: bold;
          line-height:120%;
          margin: 0;
        }

        & p {
          color: #3c3c3c;
          font-size: 17px;
          line-height: 160%;
        }
      }

      .benefits-section {
        padding: 20px 0 30px 0;
        float: left;

        & h3 {
          font-size: 36px;
          color: #181818;
          text-transform: inherit;
          text-align: center;
          padding-bottom: 24px;
        }

        & .benifits{
          lost-column: 2/8;
          font-size: 15px;
          letter-spacing: 0.8px;
          color: #3c3c3c;
          padding: 0 2%;
          text-align: center;
        }

      }

      .quote-section {
        float: left;
        padding: 10px 0 30px;
        background-color:#FFD6CB;

        & h3 {
          text-align: center;
          color: #ffffff;
          font-size: 50px;
          padding: 0 20px;
          margin-bottom: 0.5em;
        }
      }

      .two-image-section {
        float: left;
        lost-column: 8/8;
        margin-top: -40px;
        padding: 0 5%;

        & .left-img {
          float:left;
          lost-column: 3.5/8;
        }

        & .right-img {
          float:left;
          lost-column: 3.5/8;
          margin-left: 1.5%;
        }
      }

      .highlighted-section {
        float: left;
        padding:60px 0 60px 80px;
        lost-column: 8/12;

        & p {
          color: #3c3c3c;
          font-size: 17px;
          line-height: 160%;
        }

      }

      @media only screen and (max-width: 1024px) {

        .career-right-section {
          lost-column: 12/12;
        }

        .career-left-section {
          lost-column: 12/12;
        }

        .benefits-section {
          & .benifits{
            lost-column: 8/8;
            padding-bottom: 30px;
            font-size: 16px;
          }
        }

      }
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
    <Collapsible trigger={title} transitionTime={160} easing="ease-in-out">
      <span dangerouslySetInnerHTML={{ __html: body }} />
    </Collapsible>
  </div>);
};
export default SupportQuestionsInfoList;
