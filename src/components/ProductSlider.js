import Slider from 'react-slick';
import Imgix from 'react-imgix';

const settings = {
  dots: true,
  infinite: true,
  speed: 250,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

export default ({ images }) => ( // eslint-disable-line react/prop-types
  <div className="product_slider">
    <Slider {...settings}>
      {
        images.map((id) => {
          const src = `${id}`;

          return (
            <div className="image">
              <Imgix src={src} type="picture">
                <Imgix src={src} width={300} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 768px)' }} fit="clip" faces={false} />
                <Imgix src={src} width={200} auto={['compress', 'format']} type="source" imgProps={{ media: '(min-width: 320px)' }} fit="clip" faces={false} />
                <Imgix src={src} width={500} auto={['compress', 'format']} fit="clip" faces={false} />
              </Imgix>
            </div>
          );
        })
      }
    </Slider>

    <style jsx global>{`
      .product_slider {
        margin-bottom: 2em;
        lost-column: 7/12;
        background: #fffbfa;
        padding : 50px 0 70px;
        float: left;

        & .slick-next {
          right: 100px !important;
          top: 45% !important;
        }

        & .slick-prev {
          left: 100px !important;
          z-index: 1;
          top: 45% !important;
        }

        & .image {
          margin-bottom: 1%;
        }

      }
      
      .product_slider:nth-child(1n) {
          margin-right: 0;
      }

      @media only screen and (max-width:1024px){
        .product_slider {
          lost-column:12/12;
        }

      }

      

    `}</style>
  </div>
);
