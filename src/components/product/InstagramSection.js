export default () => (
  <section className="common-row instagrampbg">
    <style jsx>{`
    
    .instagrampbg {
      padding-bottom:60px;
      & h3 {
        padding:28px 0 28px 0;
        font-weight: bold;
        font-size:12px;
        margin-left:7%;
        color: #3c3c3c;
        width: auto;
        letter-spacing: 4px;  
      }
    }
  
    .instagrampbg-img-wrap {
      float:left;
      width:100%;
    }

    .img-box {
      float:left;
      width:25%;
      & img {
          max-width:100%;
      }
    }

    @media only screen and (max-width:1024px) {
      .img-box {
        width:50%;
      }
      .img-box.desktop {
        display:none;
      }
    }


  `}</style>
    <h3>GEZIEN OP # ROSEFIELD</h3>
    <div className="instagrampbg-img-wrap">
      <div className="img-box">
        <img src="/static/temp_images/photo-slurp-1.png" alt="" />
      </div>
      <div className="img-box">
        <img src="/static/temp_images/photo-slurp-2.png" alt="" />
      </div>
      <div className="img-box desktop">
        <img src="/static/temp_images/photo-slurp-3.png" alt="" />
      </div>
      <div className="img-box desktop">
        <img src="/static/temp_images/photo-slurp-2.png" alt="" />
      </div>
    </div>
  </section>
);
