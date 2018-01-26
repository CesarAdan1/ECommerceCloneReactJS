import withData from '../../lib/withData';
import Layout from '../../components/layout';
import JobLists from '../../components/career/JobLists';
import JobDetailData from '../../components/career/JobDetail';

export const Element = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout currentPath={url && url.pathname} lang={url.query.lang}>
    <style jsx>{`
      .career-left-section {
        lost-column: 8/12;
        background-color: #fffbfa;
        float: left !important;

        & img {
          width: 100%;
        }
      }

      .career-right-section {
        lost-column: 4/12;
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

      @media only screen and (max-width: 1024px) {
        .main-container {
          padding: 15px 0 !important;
        }

        .career-right-section {
          lost-column: 12/12;

          & .mobile-job-list {
            display: block;
            float: left;
            border-bottom: 1px solid #e1e1e1;
            margin-bottom: 10px;
          }

          & .desktop-job-list {
            display: none; 
          }

          & .mobile-first-section {
            display: none;
          }

          & .current-opp {
            display: none;
          }

        }

        .career-left-section {
          lost-column: 12/12;          
        }

      }


    `}</style>
    <div className="commn-row">
      <div className="main-container">
        <div className="career-right-section">
          <div className="mobile-job-list">
            <JobLists lang={url.query.lang} />
          </div>
          <div className="mobile-first-section">
            <h2>Join our team</h2>
            <p>As a fast-growing company we always have our
            eye out for talent. At Rosefield we pride ourselves in an inspiring, creative
            and open work culture. We provide the blueprint to help you drive direct
            impact in the growth of Rosefield and allow for freedom to develop yourself.
            Sound like a deal? Check out our openings below.</p>
          </div>
          <p className="current-opp">Current opportunities</p>
          <div className="desktop-job-list">
            <JobLists lang={url.query.lang} />
          </div>
        </div>
        <div className="career-left-section">
          <img src="https://i.rosefieldwatches.com/products/career/main-banner.png" alt="" />
          <JobDetailData  lang={url.query.lang}  id={url.query.id} />
        </div>
      </div>
    </div>
  </Layout>
);

export default withData(Element);
