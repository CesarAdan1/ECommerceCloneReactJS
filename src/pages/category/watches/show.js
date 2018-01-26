import withData from '../../../lib/withData';
import Layout from '../../../components/layout';

import Product from '../../../components/Product';
import CategoryDescription from '../../../components/CategoryDescription';

import categories from '../../../components/dummy_data/watch_categories.json';

import CategoryBannerInfo from '../../../components/CategoryBannerInfo';
import categoryBannerData from '../../../components/dummy_data/category_banner.json';


export const Element = ({ url }) => ( // eslint-disable-line react/prop-types
  <Layout currentPath={url && url.pathname} lang={url.query.lang}>
    <div>
      <style jsx>{`
        .products {
          lost-utility: clearfix;
          padding-bottom: 1em;
        }

        .banner-row {
          padding: 60px 0 30px 0;
        }

      `}</style>

      <div className="list">
        {
          categories.map((category, index) => {
            const result = [];
            if (index === 3) {
              const bannerinfo = categoryBannerData.map((categorybanner, i) =>
                <CategoryBannerInfo {...categorybanner} lang={url.query.lang} />);
              result.push(<div className="common-row banner-row">{bannerinfo}</div>);
            }

            const products = category.products.map(product => <Product {...product} lang={url.query.lang} />);

            result.push(
              <CategoryDescription name={category.name} description={category.description} />,
            );

            result.push(<div className="products">{products}</div>);
            if (index % 2 === 0) {
              return <div className="common-row theme-bg">{result}</div>;
            } else {
              return <div className="common-row">{result}</div>;
            }
          })
        }
      </div>
    </div>
  </Layout>
);

export default withData(Element);
