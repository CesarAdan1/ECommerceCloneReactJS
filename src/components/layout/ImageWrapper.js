export default ({ image, children, lang }) => {
  let className = '';
  let styles = {};
  let hideclass = '';
  const jsData = require('../../locale/'+lang+'/home-main-banner.json');
  
  if (image) {
    className = 'has_image';
    styles = { backgroundImage: `url('${image}')` };
  } else {
    hideclass = 'hide-banner-text';
  }

  return (
    <section className={className} style={styles}>
      <style jsx>{`

        .hide-banner-text {
          display: none;
        }

        .has_image {
          background-repeat: no-repeat;
          background-position:  50% 50%;
          height: 667px;
          width: 100%;
          background-size: cover;
          position: relative;
          overflow: hidden;
        }

        .banner-info-box {
          lost-column: 4/12;
          padding: 0 0 0 10%;
          position: absolute;
          bottom: 17%;

          & h2 {
            font-weight: bold;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: #ffffff;
          }

          & h3 {
            color: #FFFFFF;
            font-size: 55px;
            font-family: 'publico';
            font-weight: bold;
            padding: 10px 0 0 0;
            margin: 0;
          }

          & p {
            lost-column: 10/12;
            color: #FFFFFF;
            font-size: 15px;
            line-height: 180%; 
          }
        }

      `}</style>
      { children }
      <div className={hideclass}>
        <div className="banner-info-box">
          <hgroup>
            <h2>{jsData.IntroducingText}</h2>
            <h3>{jsData.Title}</h3>
          </hgroup>
          <p>{jsData.Description}</p>
          <a href="" className="white-border-button">{jsData.ShopNowBtn}</a>
        </div>
      </div>
    </section>
  );
};
