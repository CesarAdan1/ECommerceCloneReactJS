import { PropTypes } from 'prop-types';
import { StickyContainer, Sticky } from 'react-sticky';

import Navigation from './Navigation';
import Head from './Head';
import NewsletterEmail from './footer/NewsletterEmail';
import FooterNavigation from './footer/FooterNavigation';
import Social from './footer/Social';
import CopyrightInfo from './footer/CopyrightInfo';

import stylesheet from '../../global_styles/index.css';
import BurgerMenu from './BurgerMenu';
import ImageWrapper from './ImageWrapper';


import '../../lib/progressbar';

const Layout = ({ children, title, currentPath, topBannerImage, lang }) => (
  <div>
    <StickyContainer>
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: stylesheet }}
      />

      <Head title={title} />

      <BurgerMenu lang={lang} />

      <div id="page-wrap">
        <ImageWrapper image={topBannerImage} lang={lang}>
          <Sticky>
            {
              ({ style, distanceFromTop }) => {
                const classNames = [];

                if (distanceFromTop < -100) classNames.push('fixed');
                if (topBannerImage) classNames.push('has_banner');
                return (
                  <header style={style} className={classNames.join(' ')}>
                    <Navigation currentPath={currentPath} lang={lang} />
                  </header>
                );
              }
            }
          </Sticky>
        </ImageWrapper>

        <main>
          { children }
        </main>

        <footer>
          <FooterNavigation currentPath={currentPath} lang={lang} />
          <NewsletterEmail />
          <div className="social-copyright-main">
            <Social />
            <CopyrightInfo lang={lang} />
          </div>
        </footer>
      </div>
    </StickyContainer>
  </div>
);


Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  topBannerImage: PropTypes.string,
  currentPath: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

Layout.defaultProps = {
  title: 'Luxe dameshorloges – Officiële Online Shop van ROSEFIELD Watches',
  children: null,
  topBannerImage: null,
  lang: 'ww',
};

export default Layout;
