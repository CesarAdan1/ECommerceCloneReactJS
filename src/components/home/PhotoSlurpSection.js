export default () => (
  <section className="common-row theme-bg photoslurpbg">
    <style jsx>{`
    
    @font-face {
      font-family: 'publico italic';
      font-path: '/static/fonts/publico/Publico-Italic-Webfont';
    }
    .photoslurpbg {
      padding-bottom:60px;
      & h3 {
        font-family: 'Georgia,Times, Times New Roman,sans-serif';
        padding:28px 0 28px 0;
        font-style: italic;
        font-size:21px;
        margin-left:7%;
        color: #3c3c3c;
        font-weight:normal;
        width: auto;  
      }
    }
  
    .photoslurp-img-wrap {
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
    <h3>Hoe draag jij je Rosefield?</h3>
    <div className="photoslurp-img-wrap">
      <div className="img-box">
        <img src="static/temp_images/photo-slurp-1.png" alt="" />
      </div>
      <div className="img-box">
        <img src="static/temp_images/photo-slurp-2.png" alt="" />
      </div>
      <div className="img-box desktop">
        <img src="static/temp_images/photo-slurp-3.png" alt="" />
      </div>
      <div className="img-box desktop">
        <img src="static/temp_images/photo-slurp-2.png" alt="" />
      </div>
    </div>
  </section>
);
