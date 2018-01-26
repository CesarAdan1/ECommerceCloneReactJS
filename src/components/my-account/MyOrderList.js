import OrderData from '../../components/dummy_data/order-list.json';

export default () => (
  <div>
    <style jsx global>{`
      .order-main {
        & h3 {
          font-size: 24px;
          letter-spacing: 0px;
          color: #181818;
        }

      }

      .order-main-row {
        lost-column: 7/7;
      }

      .order-data-row {
        lost-column: 7/7;
        padding-top: 30px;       
      }

      .order-hd-col {
        lost-column: 1.1/7;
        color: #181818;
        font-size: 11px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 4px;
      }

      .order-data-col {
        lost-column: 1.1/7;
        font-size: 14px;
        letter-spacing: 1px;
        line-height: 20px;

        & a {
          color: #e3a797;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 11px;
          font-weight: bold;
          line-height: 25px;
        }

        & a:hover {
          color: #e3a797;
        }
      }

      @media only screen and (max-width:768px){
        .order-main-row {
          lost-column: 7/7;
        }

        .order-hd-col {
          lost-column: 2.3/7;
        }

        .order-main-row:nth-child(1n) {
          margin-right: 0 !important;
        }

        .order-data-row {
          lost-column: 7/7;
        }

        .order-data-col {
          lost-column: 2.3/7;
        }

        .mob-data-col {
          display: none;
        }

        .mob-hd-col {
          display: none;
        }

        .order-data-col a{
          float: left;
          width: 100%;
          
        }
      }

       @media only screen and (max-width:480px){
          .order-hd-col {
            lost-column: 2.3/7;
            font-size: 10px !important;
          }

          .order-data-col {
            lost-column: 2.3/7;
            font-size: 11px !important;

            & a {
              font-size: 9px;
              letter-spacing: 2px;
            }
          }

          .account-left-section{

            & h1{
              font-size: 30px !important;
            }

            & ul li{
              font-size:10px !important;
            }

          }
       }

    `}</style>
    <div className="order-main">
      <h3>My Orders</h3>
    </div>
    <div className="order-main-row">
      <div className="order-hd-row">
        <div className="order-hd-col">Order</div>
        <div className="order-hd-col mob-hd-col">Date</div>
        <div className="order-hd-col mob-hd-col">Ship To</div>
        <div className="order-hd-col">Total</div>
        <div className="order-hd-col mob-hd-col">Status</div>
        <div className="order-hd-col">Action</div>
      </div>
      {
        OrderData.map((data) =>
          <div className="order-data-row">
            <div className="order-data-col">{data.orderno}</div>
            <div className="order-data-col mob-data-col">{data.date}</div>
            <div className="order-data-col mob-data-col">{data.name}</div>
            <div className="order-data-col">{data.total}</div>
            <div className="order-data-col mob-data-col">{data.status}</div>
            <div className="order-data-col">
              <a href={'/customer/order/view?order_id=' + data.order_id}>View Order</a><br />
              <a href="/cart">Reorder</a></div>
          </div>,
        )
      }
    </div>
  </div>
);

