import ShippingMethod from '../dummy_data/shipping-methods.json';

export default () => (
  <div className="shipping-method-main">
    <style jsx>{`
    
    .shipping-method-main {
      lost-column: 6/6;
      margin: 0 0 26px;
      border: 2px solid #e3e3e3;
      border-top: 0;
    }

    .shipping-option-row {
      padding:20px 0px 55px 15px;
      border-top: 2px solid #e3e3e3;

      & span {
        float:left;
        margin-top: 6px;
        width: 5%;
      }

      & input {
        zoom: 1.5;
        outline: 0;
      }

      & p {
        color: #787878;
        font-size: 14px;
        letter-spacing: 1px;
        width: 90%;
        line-height: 30px;
        margin: 0;
      }
    }

    @media only screen and (max-width:1024px){
      .shipping-option-row {
        
        & span {
          float:left;
          margin-top: 6px;
          width: 7%;
        }

        & p {
          width: 86%;
          padding-left: 15px;
        }
      }
    }          
    
    `}</style>
    {
     ShippingMethod.map((sdata, index) => (
       <div>
         <div className="shipping-option-row">
           <span>
             <input name="shipping_method" type="radio" value="myparcel_flatrate" />
           </span>
           <div>
             <p>{sdata.title}</p>
           </div>
         </div>
       </div>
    ))}
  </div>
);
