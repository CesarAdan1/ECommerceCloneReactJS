import { default as React, Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { Link } from '../../config/routes';
import storeDetailsData from '../dummy_data/store_details.json';
/* yarn add react-google-maps */

const StoreLocaterGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={12}
    defaultCenter={props.centerOnMap}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
      />
    ))}
  </GoogleMap>
));

/**
  * Store Lacator Map section generate here
*/
class StoreLocaterMap extends Component {
// @constructor tag allows missing @returns tag
/**
 * Default Inistilization.
 * @constructor
 * @param {Object} props The array
 */
  constructor(props) {
    super(props);
    const markarr = [];
    let markarr2 = {};
    const mapsdata = props.mapdata;
    markarr.push({
      position: {
        lat: parseFloat(mapsdata.latitude),
        lng: parseFloat(mapsdata.longitude),
      },
    });
    markarr2 = {
      lat: parseFloat(mapsdata.latitude),
      lng: parseFloat(mapsdata.longitude),
    };
    this.state = {
      markers: markarr,
      markarrs: markarr2,
    };
  }
  handleMapLoad = this.handleMapLoad.bind(this);
  /**
 * Add two numbers.
 * @param {Object} map The map data object.
 * @returns {Object} The Zoom Object for map
 */
  handleMapLoad(map) {
    this.mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  /**
 * Add two numbers.
 * @returns {Object} The Map in HTML Format
 */
  render() {
    return (<div><style jsx>{`
      .gmap-section{overflow:visible !important; position:relative !important;}
          `}</style>
      <div style={{ height: '500' }}>
        <StoreLocaterGoogleMap
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} className="gmap-section" />
          }
          onMapLoad={this.handleMapLoad}
          markers={this.state.markers}
          centerOnMap={this.state.markarrs}
        />
      </div>
    </div>
    );
  }
}
/**
  * Store Lacator Map section generate here
*/
class StoreDetails extends React.Component {
  // @constructor tag allows missing @returns tag
  /**
   * Default Inistilization.
   * @constructor
   * @param {array} props The array
   */
  constructor(props) {
    super(props);
    this.state = {
      lang: props.lang
    };
  }
  /**
   * Renders "Store Details data"!
   * @return {Object} The Whole page Content
   */
  render() {
    var lang = this.state.lang;
    return (<div>
      <style jsx global>{`
      .st-search-top-raw{
        float: left;
        width: 100%;
        padding: 20px 0;
        background-color: #f6f6f6;
      }
      .st-filter{
        float: left;
        width: 10%;
        text-align: center;
        margin-top: 1%;
      }
      .st-search{
        float: right;
        width: 10%;
        text-align: center;
        margin-top: 1%;
      }
      .st-filter img, .st-search img{
        max-width: 100%;
      }
      .st-search-field{
        float: left;
        width: 80%;
        text-align: center;
      }
      .st-search-field input[type=text]{
        border:0;
        margin:0 auto;
        width:96%;
        text-align: center;
        background-color: transparent;
        letter-spacing: 1.5px;
        font-family: 'gtwalsheim-lightregular';
        font-size: 15px;
        color: #d8d8d8;
        text-transform: capitalize;
      }
      .st-search-field input[type=text]:focus{
        border:0;
        outline:0 !important;
        box-shadow: none !important;
      }
      .st-search-field input[type=text]:focus::-webkit-input-placeholder {
        color:transparent;
      }
      .st-search-field input[type=text]:focus:-moz-placeholder {
        color:transparent;
      }
      .st-search-field input[type=text]:focus::-moz-placeholder {
        color:transparent;
      }
      .st-search-field input[type=text]:focus:-ms-input-placeholder {
        color:transparent;
      }
      .st-search-field input[type=text]::-webkit-input-placeholder {
        color:#d8d8d8;
        font-family:'gtwalsheim-lightregular';
        font-size: 15px;
      }
      .st-search-field input[type=text]::-moz-placeholder {
        color:#d8d8d8;
        font-family:'gtwalsheim-lightregular';
        font-size: 15px;
      }
      .st-search-field input[type=text]:-ms-input-placeholder {
        color:#d8d8d8;
        font-family:'gtwalsheim-lightregular';
        font-size: 15px;
      }
      .st-search-field input[type=text]:-moz-placeholder {
        color:#d8d8d8;
        font-family:'gtwalsheim-lightregular';
        font-size: 15px;
      }
      .found-location {
        float: left;
        width: 100%;
        padding: 30px 0;
        font-family:'gtwalsheim-bold';
        background-color: #fbfbfb;
        text-align: center;
        font-size: 14px;
        letter-spacing: 4px;
        border-bottom: 1px solid #f4f4f4;
        color:#e3a797;
        text-decoration: none;
      }
      .location-banner {
        float: left;
        height: 510px;
        overflow: hidden;
        width: 100%;
      }
      .location-banner img{
        float: left;
        width: 100%;
        height: 510px;
      }
      .store-locater-container{
        margin:38px 36px 0 36px;
        float: none;
      }
      .store-locater-container a img {
        float: left;
        width: 100%;
      }
      .location-views{
        float: left;
        width: 100%;
        text-align: center;
        display: inline-block;
      }
      .store-cont-main h4 {
        float: left;
        padding: 26px 0 28px 0;
        width: 100%;
        font-family: 'publicobold';
        color: #3c3c3c;
        letter-spacing: 1px;
        font-size: 22px;
      }
      .location-views a{
        text-transform: uppercase;
        float: left;
        font-size: 12px;
        font-family: 'gtwalsheim-bold';
        padding-top: 24px;
        letter-spacing: 3px;
        color: #3c3c3c;
      }
      .store-cont-main p{
        float: left;
        width: 100%;
        font-family: 'gtwalsheim-lightregular';
        color: #3c3c3c;
        letter-spacing: 1px;
        font-size: 14px;
        line-height: 160%;
        text-transform: capitalize;
      }
      .inner-location {
        float: left;
        width: 100%;
        padding-bottom: 46px;
        border-bottom: 1px solid #f4f4f4;
      }
      .srore-banner-main{
        float: left;
        width: 100%;
      }
      .inner-store{
        margin-top: 5px;
      }
      .store-bk{
        border-bottom: 1px solid transparent;
      }

      @media only screen and (max-width: 1199px) {
        .st-filter {
          margin-top: 2%;
        }
        .st-search {
          margin-top: 2%;
        }
      }
      @media only screen and (max-width:991px) {}
      @media only screen and (max-width: 767px){
        .st-filter {
          margin-top: 3%;
        }
        .st-search {
          margin-top: 3%;
        }
      }
      @media only screen and (max-width: 568px) {
        .st-filter {
          margin-top: 4%;
        }
        .st-search {
          margin-top: 4%;
        }
        .st-search-field{
          width: 77%;
        }
      }
      @media only screen and (max-width: 450px){
        .st-filter {
          margin-top: 5%;
        }
        .st-search {
          margin-top: 5%;
        }
      }
      @media only screen and (max-width: 350px){
        .st-search-field{
          width: 74%;
        }
        .st-filter {
          margin-top: 6%;
        }
        .st-search {
          margin-top: 6%;
        }
      }
      `}</style>
      <section className="st-search-top-raw">
        <a className="st-filter" href="/stores"><img src="../static/images/back.png" alt="" /></a>
        <div className="st-search-field">
          <input name="search" value="" placeholder="Enter city &amp; State or Zip" type="text" />
        </div>
        <a className="st-search" href="#"><img src="../static/images/search.png" alt="" /></a>
      </section>
      <div className="inner-location">
        <div className="store-locater-container inner-store">
          <div className="store-cont-main">
            <h4>{storeDetailsData.name}</h4>
            <p>{storeDetailsData.phone_number} <br />
            store location<br />
              { storeDetailsData.address }<br />{storeDetailsData.zip}, {storeDetailsData.country}.
            </p>
            <div className="location-views">
              <a href={storeDetailsData.store_website}>{storeDetailsData.store_website_title}</a>
            </div>
          </div>
        </div>
      </div>
      <section className="srore-banner-main">
        <div className="location-banner">
          <StoreLocaterMap mapdata={storeDetailsData} />
        </div>
        <Link route="stores" params={{ lang }}><a className="found-location store-bk">Back</a></Link>
      </section>
    </div>
    );
  }
}
export default StoreDetails;
