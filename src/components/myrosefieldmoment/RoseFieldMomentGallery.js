import React from 'react';

 /**
   * Rosefield Moment Gallery Class
 */
class RoseFieldMomentGallery extends React.Component {
/**
  * Call photoslurp script code
  * Return gallery
*/
  componentDidMount() {
    const photoSlurpWidgetSettings = {};
    photoSlurpWidgetSettings['widgetContainerID-NewId'] = {
      debug: true,
      widgetId: 'myWidgetUniqueID-NewId',
      photosAlign: 'left',
      page_limit: 7,
      autoScrollLimit: 1,
      widgetType: 'gallery',
      albumId: 295,
      lang: 'en',
      varyingThumbSizes: true,
      onePhotoPerLine: true,
      pageType: 'product',
      socialIcons: true,
      imageHeight: '220px',
      imageWidth: '228px',
      imageMargin: 25,
      showSubmit: true,
      submitText: 'OR UPLOAD YOUR PICTURE',
      addPhotosImg: '',
      noteAddPicsText: '',
      noteAddPicsIcons: {
        facebook: false,
        twitter: false,
        instagram: false,
      },
    };

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://static.photoslurp.com/widget/v2/widget_loader.js';
    const entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(script, entry);
  }

/**
 * Renders "Gallery"!
 * @return JSX
 */
  render() {
    return (
      <div>
        <style jsx global>{`
          .Collapsible {
            border-top: 1px solid #e1e1e1;
            width: 100%;
            float: left;
          }

        `}</style>
        <div id="widgetContainerID-NewId">Photoslurp Gallery</div>
      </div>
    );
  }
}

export default RoseFieldMomentGallery;
