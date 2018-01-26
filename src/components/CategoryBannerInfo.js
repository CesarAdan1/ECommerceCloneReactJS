import PropTypes from 'prop-types';
import { Link } from '../config/routes';

const Element = ({ title, short_description, button_title, image, lang }) => {
  const categorybgbanner = {
    background: 'url(' + image + ') no-repeat center',
    backgroundSize: 'cover',
    float: 'left',
    width: '100%',
  };

  return (
    <section className="common-row">
      <style jsx>{`
      .intro-text {
        padding-bottom:25px;

        & span {
          float: left;
          lost-column: 4/12;
          font-size: 9px;
          text-align: center;
          letter-spacing: 4px;
          color: #caa298;
          padding: 25px 0 0;
          font-weight: bold;
          text-transform: uppercase;
        }
      }

      .info-box {
        margin: 0 0 0 8%;
        padding: 72px 0 0 0;
        float:left;
        min-height:263px;

        & h2 {
          color: #FFFFFF;
          text-transform:uppercase;
          margin:0;
        }

        & h3 {
          color: #FFFFFF;
          font-size: 32px;
          font-weight: bold;
          line-height: 140%;
          padding: 8px 0 0 0;
          margin:0;
        }
      }

      a {
        font-weight: bold;
        font-size: 12px;
        color: #ffffff;
        text-transform: uppercase;
        letter-spacing: 3px;
        border: 2px solid #ffffff;
        float: left;
        padding: 14px 20px;
        margin: 28px 0 0 0;
        cursor:pointer;
      }

      @media screen and (max-width: 1024px) {
        .intro-text {
          & span {
            lost-column: 12/12;
          }
        }
      }
    
      `}</style>

      <div className="common-row intro-text">
        <span>Free Shipping Worldwide</span>
        <span>14 Day Return Period</span>
        <span>Shipping Within 24 Hours</span>
      </div>

      <div style={categorybgbanner}>
        <div className="info-box">
          <h2>{title}</h2>
          <h3 dangerouslySetInnerHTML={{ __html: short_description }}></h3>
          <Link route="tangerine-summer-set" params={{ lang }}>
            <a >{button_title}</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

Element.propTypes = {
  title: PropTypes.string.isRequired,
  short_description: PropTypes.string.isRequired,
  button_title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Element;
