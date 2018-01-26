import populairProductsData from './dummy_data/populair_products.json';
import Product from './Product';
import PropTypes from 'prop-types';

const Element = ({lang }) => {
  return (
  <div className="featured">
    <style jsx>{`
      .featured {
        lost-utility: clearfix;
        padding-top: 4em;
        padding-bottom: 2em;
      }

      h1 {
        text-align: center;
        color: #de9c8c;
        margin-bottom: 1.5em;
      }

      a.fancy_button {
        color: #222;
        border: 2px solid #181818;
        margin: 2em;
        padding: 1em;
        text-decoration: none;
        text-transform:uppercase;
        font-weight:bold;
        font-size:11px;
        letter-spacing: 3px;
        padding: 15px 20px 15px 22px;
        cursor:pointer;
      }

      .more {
        padding-top: 4em;
        padding-bottom: 3em;
        clear: both;
        text-align: center;
      }
    `}</style>


    <h1>Onze populairste horloges</h1>

    <div className="products">
      { populairProductsData.map((product, index) => <Product key={index} {...product} lang={lang} />) }
    </div>
    <div className="more">
      <a className="fancy_button">Bekijk alle horloges</a>
    </div>
  </div>
);
};

Element.propTypes = {
  lang: PropTypes.number.isRequired,
};

export default Element;