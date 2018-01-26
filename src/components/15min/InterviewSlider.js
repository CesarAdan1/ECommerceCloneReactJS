import Slider from 'react-slick';
import { Link } from '../../config/routes';

const interviwsettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: true,
  draggable: false,
};

export default ({ lang }) => (
  <div className="common-row">
    <style jsx global>{`
      .common-row {
        & .slick-prev {
          left: 20px; 
          z-index: 10;
        }

        & .slick-next {
          right: 20px; 
          z-index: 10;
        }
      }
      .slider-main-section {
        position: relative;

        & a {
          float: left;
          width: 100%;

          & img {
            width: 100%;
          }
        }
      }

      .slider-black-text-section {
        position: absolute;
        top: 55%;
        left: 8%;
        text-align: left;
        float: left;
        width: 350px;

        & h2 {
          font-size: 10px;
          letter-spacing: 3px;
          color: #3c3c3c;
          margin-bottom: 20px;
        }

        & h3 {
          font-size: 28px;
          color: #3c3c3c;
          text-transform: lowercase;
          width: auto;
          font-family: 'Georgia,Times,Times New Roman,serif';
          font-style: italic;
          font-weight: normal;
          letter-spacing: 0;
          line-height: 100%;
          margin: 0;
        }

        & span {
          font-size: 13px;
          color: #3c3c3c;
          letter-spacing: 1.5px;
          line-height: 31px;
        }

        & .read-more {
          text-transform: uppercase;
          letter-spacing: 4px;
          border-bottom: 4px solid #3c3c3c;
          padding-bottom: 5px;
          margin: 22px 0 0;
          font-size: 11px;
          width: auto;
          font-weight: bold;
        }

      }

      .slider-white-text-section {
        position: absolute;
        top: 55%;
        left: 8%;
        text-align: left;
        float: left;
        width: 350px;

        & h2 {
          font-size: 10px;
          letter-spacing: 3px;
          color: #ffffff;
          margin-bottom: 20px;
        }

        & h3 {
          font-size: 28px;
          color: #ffffff;
          text-transform: lowercase;
          width: auto;
          font-family: 'Georgia,Times,Times New Roman,serif';
          font-style: italic;
          font-weight: normal;
          letter-spacing: 0;
          line-height: 100%;
          margin: 0;
        }

        & span {
          font-size: 13px;
          color: #ffffff;
          letter-spacing: 1.5px;
          line-height: 31px;
        }

        & .read-more {
          text-transform: uppercase;
          letter-spacing: 4px;
          border-bottom: 4px solid #ffffff;
          padding-bottom: 5px;
          margin: 22px 0 0;
          font-size: 11px;
          width: auto;
          font-weight: bold;
          color: #ffffff;
        }

      }

      .slick-prev:before {
        background:url(/static/images/left-slider-arrow.png) no-repeat !important;          
      }

      .slick-next:before {
        background:url(/static/images/right-slider-arrow.png) no-repeat !important;          
      }

    `}</style>
    <Slider {...interviwsettings}>
      <div className="slider-main-section">
        <Link route="15-minutes-with-stephanie" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-minutes-with-stephanie/stephanie-interview-slider.png" alt="" />
          </a>
        </Link>
        <div className="slider-black-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Stephanie</h3>
            <span>/ Fashion features editor GLAMOUR NL</span>
          </div>
          <Link route="15-minutes-with-stephanie" params={{ lang }}><a className="read-more">Read more</a></Link>
        </div>
      </div>
      <div className="slider-main-section">
        <Link route="15-minutes-with-virna-auvergne" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-virna/virna-interview-slider.jpg" alt="" />
          </a>
        </Link>
        <div className="slider-white-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Virna</h3>
            <span> / Press officer<br />ASAP Communication, Paris </span>
          </div>
          <Link route="15-minutes-with-virna-auvergne" params={{ lang }}><a className="read-more">Read more</a></Link>
        </div>
      </div>
      <div className="slider-main-section">
        <Link route="15-minutes-with-esmee" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-esmee/esmee-interview-slider.jpg" alt="" />
          </a>
        </Link>
        <div className="slider-black-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Esmee</h3>
            <span> / Fashion, Beauty en Lifestyle Editor <br />GLAMOUR NL</span>
          </div>
          <Link route="15-minutes-with-esmee" params={{ lang }}><a className="read-more">Read more</a></Link>
        </div>
      </div>
      <div className="slider-main-section">
        <Link route="15-minutes-with-nicole" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-nicole/nicole-interview-slider.jpg" alt="" />
          </a>
        </Link>
        <div className="slider-white-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Nicole</h3>
            <span> / Freelance stylist and lifestyle creative<br /> GLAMOUR NL</span>
          </div>
          <Link route="15-minutes-with-nicole" params={{ lang }}><a className="read-more">Read more</a></Link>
        </div>
      </div>
      <div className="slider-main-section">
        <Link route="15-minutes-with-lena" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-lena/lena-interview-slider.jpg" alt="" />
          </a>
        </Link>
        <div className="slider-white-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Lena</h3>
            <span> / Fashion & lifestyle influencer and cofounder of Blogger Bazaar.</span>
          </div>
          <Link route="15-minutes-with-lena" params={{ lang }}><a className="read-more">Read more</a></Link>
        </div>
      </div>
      <div className="slider-main-section">
        <Link route="15-minutes-with-chloe" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-chloe/chloe-interview-slider.jpg" alt="" />
          </a>
        </Link>
        <div className="slider-white-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Chloe</h3>
            <span> / Meet the Dutch actress and photographer.</span>
          </div>
          <Link route="15-minutes-with-chloe" params={{ lang }}><a className="read-more">Read more</a></Link>
        </div>
      </div>
      <div className="slider-main-section">
        <Link route="15-minutes-with-laurianne" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-laurianne/laurianne-interview-slider.jpg" alt="" />
          </a>
        </Link>
        <div className="slider-black-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Laurianne</h3>
            <span> / Journalist and Radio host.</span>
          </div>
          <Link route="15-minutes-with-laurianne" params={{ lang }}><a className="read-more">Read more</a></Link>
        </div>
      </div>
      <div className="slider-main-section">
        <Link route="15-minutes-with-yin" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-yin/yin-interview-slider.jpg" alt="" />
          </a>
        </Link>
        <div className="slider-white-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Yin Fung</h3>
            <span> / Editorial Assistant at Dutch ELLE.</span>
          </div>
          <Link route="15-minutes-with-yin" params={{ lang }}><a className="read-more" >Read more</a></Link>
        </div>
      </div>
      <div className="slider-main-section">
        <Link route="15-minutes-with-rebecca" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-rebecca/rebecca-interview-slider.png" alt="" />
          </a>
        </Link>
        <div className="slider-black-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Rebecca</h3>
            <span> / Meet one of the <br />Stylists at Karen Millen.</span>
          </div>
          <Link route="15-minutes-with-rebecca" params={{ lang }}><a className="read-more">Read more</a></Link>
        </div>
      </div>
      <div className="slider-main-section">
        <Link route="15-minutes-with-caroline" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-caroline/caroline-interview-slider.png" alt="" />
          </a>
        </Link>
        <div className="slider-black-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Caroline</h3>
            <span> / Meet one of the <br /> freelance stylists in Berlin.</span>
          </div>
          <Link route="15-minutes-with-caroline" params={{ lang }}><a className="read-more">Read more</a></Link>
        </div>
      </div>
      <div className="slider-main-section">
        <Link route="15-minutes-with-annabel" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-annabel/annabel-interview-slider.jpg" alt="" />
          </a>
        </Link>
        <div className="slider-black-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Annabel</h3>
            <span> / Meet the label <br /> owner of &#34;Before 7 am&#34; in Berlin.</span>
          </div>
          <Link route="15-minutes-with-annabel" params={{ lang }}><a className="read-more">Read more</a></Link>
        </div>
      </div>
      <div className="slider-main-section">
        <Link route="15-minutes-with-barbara" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-barbara/barbara-interview-slider.jpg" alt="" />
          </a>
        </Link>
        <div className="slider-black-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Barbara</h3>
            <span> / Meet the blogger and fashion editor<br />for magazine WAD in Paris.</span>
          </div>
          <Link route="15-minutes-with-barbara" params={{ lang }}><a className="read-more">Read more</a></Link>
        </div>
      </div>
      <div className="slider-main-section">
        <Link route="15-minutes-with-cheyenne" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-cheyenne/cheyenne-interview-slider.jpg" alt="" />
          </a>
        </Link>
        <div className="slider-black-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Cheyenne</h3>
            <span> / Meet Cheyenne,<br /> Berlin model and It Girl.</span>
          </div>
          <Link route="15-minutes-with-cheyenne" params={{ lang }}><a className="read-more">Read more</a></Link>
        </div>
      </div>
      <div className="slider-main-section">
        <Link route="15-minutes-with-jeanine" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-jeanine/jeanine-interview-slider.jpg" alt="" />
          </a>
        </Link>
        <div className="slider-black-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Jeanine</h3>
            <span> / Meet the founder,<br /> of jewelry label Overload Studios.</span>
          </div>
          <Link route="15-minutes-with-jeanine" params={{ lang }}><a className="read-more">Read more</a></Link>
        </div>
      </div>
      <div className="slider-main-section">
        <Link route="15-minutes-with-ludivine" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-ludivine/ludivine-interview-slider.jpg" alt="" />
          </a>
        </Link>
        <div className="slider-white-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Ludivine</h3>
            <span> / Meet Ludivine,<br />stylist and fashion journalist from Paris.</span>
          </div>
          <Link route="15-minutes-with-ludivine" params={{ lang }}><a className="read-more">Read more</a></Link>
        </div>
      </div>
      <div className="slider-main-section">
        <Link route="15-minutes-with-laetitia" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-laetitia/laetitia-interview-slider.jpg" alt="" />
          </a>
        </Link>
        <div className="slider-black-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Laetitia</h3>
            <span> / Meet Laetitia,<br />founder of the Fashion brand LEÏ 1984.</span>
          </div>
          <Link route="15-minutes-with-laetitia" params={{ lang }}><a className="read-more">Read more</a></Link>
        </div>
      </div>
      <div className="slider-main-section">
        <Link route="15-minutes-with-paulina" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-paulina/paulina-interview-slider.jpg" alt="" />
          </a>
        </Link>
        <div className="slider-white-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Paulina</h3>
            <span> / Meet Paulina,<br />model from Berlin.</span>
          </div>
          <Link route="15-minutes-with-paulina" params={{ lang }}><a className="read-more">Read more</a></Link>
        </div>
      </div>
      <div className="slider-main-section">
        <Link route="15-minutes-with-katja" params={{ lang }}>
          <a>
            <img src="https://i.rosefieldwatches.com/products/15min/15-min-katja/katja-interview-slider.jpg" alt="" />
          </a>
        </Link>
        <div className="slider-black-text-section">
          <h2>15 MINUTES WITH</h2>
          <div>
            <h3>Katja</h3>
            <span> / Meet Katja,<br /> fashion and beauty editor at Refinery29 in Berlin.</span>
          </div>
          <Link route="15-minutes-with-katja" params={{ lang }}><a className="read-more">Read more</a></Link>
        </div>
      </div>
    </Slider>
  </div>
);
