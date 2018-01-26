import withData from '../../lib/withData';
import Layout from '../../components/layout';
import AddAddressBook from '../../components/my-account/AddAddressBook';


export const Element = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout currentPath={url && url.pathname} lang={url.query.lang}>
    <style jsx>{`
      
      .common-row {
        padding-bottom: 50px;
      }

      .account-left-section {
        lost-column: 3/12;
        padding: 7%;
        background-color: #fffbfa;
        min-height: 550px;

        & h1 {
          font-size: 40px;
          color: #181818;
          font-family: 'publico';
          margin: 0;
        }

        & ul {
          lost-column: 3/3;
          padding-left: 0;

          & li{
            color: #181818;
            lost-column: 3/3;
            font-weight: bold;
            font-size: 12px;
            padding: 20px 0;
            text-transform: uppercase;
            text-align: left;
            letter-spacing: 4px;
          }
        }

        & .active-tab {
          color: #e3a797;
        }
      }

      .account-right-section {
        lost-column: 5/12;
        padding-top: 6%;
      }

      @media only screen and (max-width:768px){
        .account-left-section {
          min-height: auto;
          lost-column: 10.38/12;
        }

        .account-right-section {
          lost-column: 10.38/12;
          margin: 0 5%;
        }
      }

    `}</style>
    <div className="common-row">
      <div className="account-left-section">
        <h1>Hi Demo Dev</h1>
        <ul>
          <li><a href="/my-account">Account Dashboard</a></li>
          <li><a href="/customer/account/edit">Account Information</a></li>
          <li><a href="/customer/address" className="active-tab">Address Book</a></li>
          <li><a href="/customer/orders">My Orders</a></li>
        </ul>
      </div>
      <div className="account-right-section">
        <AddAddressBook />
      </div>
    </div>
  </Layout>
);

export default withData(Element);
