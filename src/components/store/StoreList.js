import { default as React, Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Dropdown from 'react-dropdown';
import { Link } from '../../config/routes';
import withData from '../../lib/withData';
import StoresData from '../dummy_data/store_locations.json';

const countryoptions = [
{ value: '-1', label: 'Select country', '': '' },
{ value: 'au', label: 'Australia', 'data-image': 'static/images/au.png' },
{ value: 'at', label: 'Austria', 'data-image': 'static/images/at.png' },
{ value: 'be', label: 'Belgium', 'data-image': 'static/images/be.png' },
{ value: 'ca', label: 'Canada', 'data-image': 'static/images/ca.png' },
];

const defaultCOption = countryoptions[0];

const kmoptions = [
{ value: '-1', label: 'Select Kilometer' },
{ value: '1000', label: '1000 Km' },
{ value: '2000', label: '2000 Km' },
{ value: '3000', label: '3000 Km' },
{ value: '4000', label: '4000 Km' },
];

const defaultkmOption = kmoptions[0];

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
   * @param {array} props The array
   */
  constructor(props) {
    super(props);
    const markersarr = [];
    let markarr2 = {};
    this.props.mapdata.map(markdata => (markersarr.push({
      position: {
        lat: parseFloat(markdata.latitude),
        lng: parseFloat(markdata.longitude),
      },
    })));
    this.props.mapdata.map(markdata => (markarr2 = {
      lat: parseFloat(markdata.latitude),
      lng: parseFloat(markdata.longitude),
    }));
    this.state = {
      markers: markersarr,
      markArr2: markarr2,
    };
  }
  handleMapLoad = this.handleMapLoad.bind(this);
  /**
    * Map Zoom In/Out On Load
    * @handleMapLoad
    * @param {Object} map The new state of the widget.
    * @returns {boolean} Display map on screen with zoom
    */
  handleMapLoad(map) {
    this.mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }
  /**
    * Rendor
    * @render
    * @returns {Object} Return map
    */
  render() {
    return (<div><style jsx>{`
      .gmap-section{overflow:visible !important; position:inherit !important;}
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
          centerOnMap={this.state.markArr2}
        />
      </div>
    </div>
    );
  }
}

/**
 * @params {storeinfo} Store Informations
 * @returns {Object} store informations
 */
const SLDetails = ({ storeinfo, lang }) => {
  const id = storeinfo.id;
  return (<div className="location">
    <style jsx>{`
      .location {
        border: 1px solid #f5f5f5;
        float: left;
        margin-right: -1px;
        margin-bottom: -1px;
        padding: 0;
        width: 33.24%;
      }
      .store-locater-container {
        display: table;
        padding: 60px 40px;
      }
      .store-locater-container a img {
        float: left;
        width: 100%;
      }
      .store-cont-main h4 {
        color: #353535;
        float: left;
        font-size: 22px;
        font-weight: 400;
        height: 18px;
        letter-spacing: 1px;
        margin: 0;
        overflow: hidden;
        padding: 0 0 10px 0;
        width: 100%;
      }
      .location-views {
        float: left;
        width: 100%;
        text-align: center;
        display: inline-block;
      }
      .location-views a {
        color: #353535;
        float: left;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 3px;
        padding-top: 24px;
        text-align: left;
        text-transform: uppercase;
        width: 100%;
      }
      .store-cont-main p {
        float: left;
        width: 100%;
        color: #353535;
        letter-spacing: 1px;
        font-size: 14px;
        line-height: 160%;
        text-transform: capitalize;
      }

      @media only screen and (max-width: 991px) {
        .store-cont-main p {
          min-height: 120px ;
        }
      }
      @media only screen and (max-width: 768px) {}
      @media only screen and (max-width: 767px) {
        .store-locater-container {
          padding: 40px 40px;
        }
        .location {
          width: 100% !important;
        }
        .store-cont-main p {
          min-height:100% !important;
        }
      }
      @media only screen and (max-width: 400px) {}
      `}</style>
    <div className="store-locater-container">
      <div className="store-cont-main">
        <Link route="location-detail" params={{ lang, id }}><a><h4>{ storeinfo.name }</h4></a>
        </Link>
        <p>{storeinfo.phone_number} <br />
        Store Location<br />
          { storeinfo.address },<br /> {storeinfo.zip}, {storeinfo.country}.
        </p>
        <div className="location-views">
          <a href={storeinfo.store_website} rel="noopener noreferrer" target="_blank">{storeinfo.store_website_title}</a>
        </div>
      </div>
    </div>
  </div>
  );
};

/**
 * @params {storeinfo} Store Informations
 * @returns {Object} store informations
 */
export const StoreList = React.createClass({
  getInitialState: function () {
    return {
      showFilterDD: false,
      lang: this.props.lang,
    };
  },
  handleFilterClick: function () {
    const newFilterStatus = this.state.showFilterDD ? false : true;
    this.setState({ showFilterDD: newFilterStatus });
  },
  render: function () {
    const applyClassName = this.state.showFilterDD ? 'store-country store-country-mobile' : 'store-country display-hide';
    const applyClassName1 = this.state.showFilterDD ? 'store-distance store-distance-mobile' : 'store-distance display-hide';
    const applyClassName2 = this.state.showFilterDD ? 'filt-btn filt-btn-mobile' : 'filt-btn filt-btn-mobile display-hide';
    return (<div>
      <style jsx global>{`
        .display-hide {
          display: block;
        }
        main {
          padding-bottom: 100px;
          background-color: #fffbfa;
        }
        .main-container {
          background-color: #ffffff;
          display: table;
          padding: 0 !important;
        }
        .st-search-top-raw {
          float: left;
          width: 100%;
          padding: 20px 0;
          background-color: #f6f6f6;
        }
        .st-filter {
          display: none;
        }
        .st-search {
          display: none;
        }
        .st-filter img, .st-search img {
          max-width: 100%;
        }
        .filter-dropdown {
          position: absolute;
          float: left;
          width: 100%;
          top: 90px;
          z-index: 1000;
        }
        .country-main {
          float: left;
          width: 90%;
          padding: 15px 0 15px;
          background-color: #f6f6f6;
          margin: 0 5% 0 5%;
        }
        .store-country {
          float: left;
          width: 28%;
          margin-left: 1%;
        }
        .st-search-field {
          float: left;
          margin-left: 1%;
          margin-right: 0.5%;
          width: 28%;
        }
        .st-search-field input[type="text"], .st-search-field input[type="password"] {
          color: #000000;
          font-family: "GT Walsheim";
          font-size: 14px;
          font-weight:600;
          height: 46px;
          margin: 0;
          padding: 0 10px;
        }
        .store-distance {
          float: left;
          width: 28%;
          margin-right: 1%;
          margin-left: 1%;
        }
        .filt-btn {
          background-color: #ffd6cb;
          color: #4e4e4e;
          float: left;
          font-size: 14px;
          letter-spacing: 2px;
          line-height: 100%;
          margin: 0;
          padding: 18px 10px;
          text-align: center;
          text-transform: uppercase;
          width: 9%;
        }
        .found-location {
          background-color: #fffbfa;
          border-bottom: 0 none;
          color: #df9d8b;
          float: left;
          font-size: 36px;
          letter-spacing: 2px;
          padding: 36px 0;
          text-align: center;
          text-decoration: none;
          width: 100%;
        }
        .location-banner {
          float: left;
          height: 510px;
          overflow: hidden;
          width: 100%;
        }
        .location-banner img {
          float: left;
          width: 100%;
          height: 510px;
        }
        .srore-banner-main {
          float: left;
          height: 510px;
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .gmap-section {
          overflow: visible !important;
          position: inherit !important;
        }
        .faq-banner-txt-main {
          float: left;
          width: 50%;
          position: absolute;
          top: 0;
          height: auto;
        }
        .Dropdown-root {
          position: relative;
        }
        .Dropdown-control {
          background-color: #fbfbfb;
          border: 2px solid #e2e2e2;
          border-radius: 2px;
          box-sizing: border-box;
          color: #4e4e4e;
          cursor: pointer;
          height: 50px;
          line-height: 32px;
          margin: 0;
          outline: medium none;
          overflow: hidden;
          padding: 8px 22px 8px 10px;
          position: relative;
          transition: all 200ms ease 0s;
        }
        .Dropdown-control:hover {
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
        }
        .Dropdown-arrow {
          border-color: #999 transparent transparent;
          border-style: solid;
          border-width: 5px 5px 0;
          content: ' ';
          display: block;
          height: 0;
          margin-top: -ceil(2.5);
          position: absolute;
          right: 10px;
          top: 50%;
          width: 0
        }
        .is-open .Dropdown-arrow {
          border-color: transparent transparent #999;
          border-width: 0 5px 5px;
        }
        .Dropdown-menu {
          background-color: white;
          border: 2px solid #585858;
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
          box-sizing: border-box;
          margin-top: -1px;
          max-height: 200px;
          overflow-y: auto;
          position: absolute;
          top: 100%;
          width: 100%;
          z-index: 1000;
          -webkit-overflow-scrolling: touch;
          border-bottom: 0;
        }
        .Dropdown-menu .Dropdown-group > .Dropdown-title {
          padding: 8px 10px;
          color: rgba(51, 51, 51, 1);
          font-weight: bold;
          text-transform: capitalize;
        }
        .Dropdown-option {
          box-sizing: border-box;
          color: rgba(51, 51, 51, 0.8);
          cursor: pointer;
          display: block;
          padding: 8px 10px;
        }
        .Dropdown-option:last-child {
          border-bottom-right-radius: 2px;
          border-bottom-left-radius: 2px;
          border-bottom: 2px solid #4d4d4d;
        }
        .Dropdown-option:hover {
          background-color: #ffefeb;
          color: #4d4d4d;
        }
        .Dropdown-option.is-selected {
          background-color: #ffefeb;
          color: #4d4d4d;
        }
        .Dropdown-noresults {
          box-sizing: border-box;
          color: #4d4d4d;
          cursor: default;
          display: block;
          padding: 8px 10px;
        }
        .country-main-mobile {
          display: none;
        }

        @media only screen and (max-width: 1599px) {
          .store-country {
            width: 26%;
          }
          .st-search-field {
            width: 26%;
          }
          .st-search-field input[type="text"], .st-search-field input[type="password"]{
            width: 95%;
          }
          .store-distance {
            width: 26%;
          }
          .filt-btn {
            width: 14%;
          }
        }
        @media only screen and (max-width: 1199px) {
          .st-search-field input[type="text"], .st-search-field input[type="password"]{
            width: 92%;
          }
          .location {
            width: 33% !important;
          }
        }
        @media only screen and (max-width: 991px) {
          .store-country {
            width: 24%;
          }
          .st-search-field input[type="text"], .st-search-field input[type="password"]{
            width: 88%;
          }
          .store-distance {
            width: 24%;
          }
          .filt-btn {
            width: 17%;
          }
          .found-location {
            padding: 26px 0;
            font-size: 26px;
          }
        }
        @media only screen and (max-width: 767px) {
          .display-hide {
            display: none;
          }
          .country-main {
            display: none;
          }
          .country-main-mobile {
            display: inline-block;
            padding: 0 20px;
            width: 95% !important;
          }
          .store-country-mobile {
            float: left;
            width: 48%;margin: 0;
          }
          .store-distance-mobile {
            float: left;
            width: 48%;
            margin: 0 0 0 -2px;
          }
          .filter-dropdown {
            position: relative;
            top: 0px;
          }
          .country-main {
            margin: 0;
            width: 100%;
          }
          .st-filter {
            float: left;
            display: inline-block;
            margin-top: 2%;
            text-align: left;
            width: 10%;
          }
          .st-search {
            display: inline-block;
            float: right;
            text-align: center;
            width: 12%;
            margin-top: 2%;
          }
          .st-search-field {
            float: none;
            margin: 0 auto;width: 65%;
          }
          .st-search-field input[type="text"], .st-search-field input[type="password"] {
            text-align: center;
            width: 100%;
            background-color: rgba(0, 0, 0, 0) !important;
            border: 0 none !important;
          }
          .filt-btn {
            margin: 3% 0;width: 93%;
          }
        }
        @media only screen and (max-width: 568px) {
          .st-filter {
            margin-top: 3%;
          }
          .st-search {
            margin-top: 3%;
          }
          .country-main-mobile {
            width:90% !important;
          }
          .filt-btn {
            margin:5% 0;width: 91%;
          }
        }
        @media only screen and (max-width:414px) {
          .st-filter {
            margin-top: 4%;
          }
          .st-search {
            margin-top: 4%;
          }
          .st-search-field {
            width: 60%;
          }
          .filt-btn {
            width: 90%;
          }
        }
        @media only screen and (max-width:320px) {
          .filt-btn {
            width:88%;
          }
        }
        `}</style>
      <div className="filter-dropdown" id="apply-filter">
        <div className="country-main">
          <div className={applyClassName}>
            <Dropdown options={countryoptions} value={defaultCOption} />
          </div>
          <div className="st-search-field">
            <input name="search" value="" placeholder="Enter city &amp; State or Zip" type="text" />
          </div>
          <div className={applyClassName1}>
            <Dropdown options={kmoptions} value={defaultkmOption} />
          </div>
          <a className="filt-btn" href="#">Apply Filter</a>
        </div>
        <div className="country-main country-main-mobile">
          <a className="st-filter" href="#" onClick={this.handleFilterClick} id="filter-active"><img src="static/images/filter.png" alt="" /></a>
          <div className="st-search-field">
            <input name="search" value="" placeholder="Enter city &amp; State or Zip" type="text" />
          </div>
          <a className="st-search" href="#"><img src="static/images/search.png" alt="" /></a>
          <div className={applyClassName}>
            <Dropdown options={countryoptions} value={defaultCOption} />
          </div>
          <div className={applyClassName1}>
            <Dropdown options={kmoptions} value={defaultkmOption} />
          </div>
          <a className={applyClassName2} href="#">Apply Filter</a>
        </div>
      </div>
      <section className="srore-banner-main">
        <div className="location-banner">
          <StoreLocaterMap mapdata={StoresData.stores} />
        </div>
      </section>
      <a href="#" className="found-location">we fount {StoresData.stores.length} locations</a>
      <div className="main-container">
        {
          StoresData.stores.map(data => (<SLDetails storeinfo={data} lang={this.state.lang} />))
        }
      </div>
    </div>
    );
  },
});

export default withData(StoreList);
