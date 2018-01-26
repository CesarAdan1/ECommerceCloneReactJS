import Imgix from 'react-imgix';
import PropTypes from 'prop-types';

import { Link } from '../config/routes';

const Element = ({ id, price, image, lang }) => {
  const src = image;

  return (
    <div className="product">
      <style jsx>{`
        a {
          text-align: center;
          text-decoration: none;
          color: #333;
        }

        h4 {
          font-weight:normal;
        }

        .product {
          lost-waffle: 1/3;
          text-align: center;
        }
        
        @media screen and (max-width: 1024px) {
          .product {
            lost-waffle: 1/1;

            & img {
              width:100%;
            }
          }
        }

      `}</style>

      <Link route="show_watch" params={{ lang, id }}>
        <a width="300px">
          { /* <h3>{name}</h3> */ }
          <Imgix src={src} type="picture">
            <Imgix src={src} width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
            <Imgix src={src} width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
            <Imgix src={src} width={350} auto={['compress', 'format']} fit="clip" faces={false} />
          </Imgix>

          <h4>&euro;{price}</h4>
        </a>
      </Link>
    </div>
  );
};

Element.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Element;
