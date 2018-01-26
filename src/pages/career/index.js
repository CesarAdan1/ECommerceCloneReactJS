import withData from '../../lib/withData';
import Layout from '../../components/layout';
import JobLists from '../../components/career/JobLists';

export const Element = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout currentPath={url && url.pathname} lang={url.query.lang}>
    <style jsx global>{`
      .career-left-section {
        lost-column: 7/12;
        background-color: #fffbfa;
        float: left !important;

        & img {
          width: 100%;
        }
      }

      .career-right-section {
        lost-column: 5/12;
        float: right !important;
        margin-right: 0 !important;

        & .mobile-job-list {
          display: none;
        }


        & h2 {
          font-size: 35px;
          padding: 30px 0 22px 0;
          color: #181818;
          font-weight: bold;
          letter-spacing: 1px;
          margin: 0;
          width: auto;
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
        padding:70px 0 60px 80px;

        & h3 {
          font-size: 42px;
          color: #181818;
          text-transform: inherit;
          padding-bottom: 24px;
          font-weight: bold;
          line-height:120%;
          margin: 0;
          font-family: 'Georgia,Times,"Times New Roman",serif';
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
          line-height: 23px;
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
          padding: 0 30px;
          margin-bottom: 0.5em;
          font-family: 'publico';
        }
      }

      .two-image-section {
        float: left;
        lost-column: 8/8;
        margin-top: -40px;


        & .left-img {
          float:left;
          lost-column: 3.6/8;
          margin-left: 5%;
        }

        & .right-img {
          float:left;
          lost-column: 3.6/8;
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

        .main-container {
          padding: 15px 0 !important;
        }

        .career-right-section {
          lost-column: 12/12;
          margin-bottom: 60px;

          & .mobile-job-list {
            display: block;
            float: left;
            border-bottom: 1px solid #e1e1e1;
          }

          & .desktop-job-list {
            display: none;
          }

          & .current-opp {
            display: none;
          }

          & h2 {
            width: auto;
            padding-left: 10%;
          }

          & p.first-paragraph {
            width: 80%;
            margin: 0 10%;
          }

        }

        .career-left-section {
          lost-column: 12/12;
        }

        .benefits-section {

           & h3 {
            width: 95%;
            margin: 0 auto;
            float: none;
            font-size: 32px;
           }

          & .benifits{
            width: 77%;
            margin: 0 auto;
            float: none !important;
            padding-bottom: 30px;
            font-size: 16px;
          }

          & .benifits:last-child {
            margin-right: 30px;
          }

        }

        .quote-section {
          padding: 10px 0 70px;

          & h3 {
            font-size: 36px;
          }
        }

        .two-image-section {
          lost-column: 8/8;
          margin-top: -77px;

          & .left-img {
            margin-left: 7.5%;
            margin-right: 15px !important;
          }
        }

        .culture-section {
          lost-column: 10/12;
          padding: 40px 0 40px 40px;

          & h3 {
            font-size: 36px;
          }
        }

        .highlighted-section {
          lost-column: 10/12;
          padding: 20px 0 40px 40px;
        }

      }

    `}</style>
    <div className="commn-row">
      <div className="main-container">
        <div className="career-right-section">
          <div className="mobile-job-list">
            <JobLists lang={url.query.lang} />
          </div>
          <h2>Join our team</h2>
          <p className="first-paragraph">As a fast-growing company we always have our
          eye out for talent. At Rosefield we pride ourselves in an inspiring, creative
          and open work culture. We provide the blueprint to help you drive direct
          impact in the growth of Rosefield and allow for freedom to develop yourself.
          Sound like a deal? Check out our openings below.</p>
          <p className="current-opp">Current opportunities</p>
          <div className="desktop-job-list">
            <JobLists lang={url.query.lang} />
          </div>
        </div>
        <div className="career-left-section">
          <img src="https://i.rosefieldwatches.com/products/career/main-banner.png" alt="" />
          <div className="culture-section">
            <h3>Rosefield culture</h3>
            <p>With our HQ based just off the canals of Amsterdam
            we believe in a collaborative and positive work environment. We have a team
            of young individuals from all over the world and have led a global approach
            from day 1. Working in a relaxed, social atmosphere we believe “team”
            comes first and regularly hang out at Friday drinks and host fun company
            events. Our employees are our brand ambassadors, meaning you’ll never
            be without a Rosefield watch!</p>
          </div>
          <img src="https://i.rosefieldwatches.com/products/career/culture-banner.jpg" alt="" />
          <div className="benefits-section">
            <h3>Our Benefits</h3>
            <div className="benifits">Make a difference in a fast-growing company based
            off the canals in Amsterdam</div>
            <div className="benifits">Pick a Rosefield watch of your choice</div>
            <div className="benifits">Team bonding with Friday “borrels” and company-wide events</div>
          </div>
          <div className="quote-section">
            <h3>&Prime;At Rosefield we pride ourselves on an inspiring, creative
            and open work culture.&Prime;</h3>
          </div>
          <div className="two-image-section">
            <span className="left-img">
              <img src="https://i.rosefieldwatches.com/products/career/FOTO-10.jpg" alt="" />
            </span>
            <span className="right-img">
              <img src="https://i.rosefieldwatches.com/products/career/FOTO-26.jpg" alt="" className="right_img" />
            </span>
          </div>
          <div className="highlighted-section">
            <p>With our HQ and warehouse infrastructure both located in Amsterdam,
            we’re never far away from each other whether you work in the Creative Marketing
            team or the Warehouse Logistics team. This unique set-up allows for insight
            into all aspects of the business for a 360° approach, no matter what
            department you’re a part of.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default withData(Element);
