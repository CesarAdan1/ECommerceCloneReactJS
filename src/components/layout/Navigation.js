import { PropTypes } from 'prop-types';
import React from 'react';
import AngleDown from 'react-icons/lib/fa/angle-down';
import Link from './NavigationLink';
import WebsiteStoresData from '../dummy_data/website_stores.json';

const options = WebsiteStoresData;

/**
 * Empty Select box
 * @param {Object} selectbox Object
 * @returns {Object} none
 */
function removeOptions(selectbox) {
  let i;
  for (i = selectbox.options.length - 1; i >= 0; i -= 1) {
    selectbox.remove(i);
  }
}
/**
 * Set Country language
 * @returns {String} Redirect or Refresh
 */
function setCountryLang() {
  const lang = document.getElementById('lang_code').value;
  const code = document.getElementById('curr_web_code').innerHTML;
  const currURL = window.location.href.replace(lang, code);
  window.location.assign(currURL);
}
// const defaultCOption = options[0];
const dropDownOnChange = function (change) {
  const webId = change.newValue;
  let storeoptdata = [];
  let webFlag = '';
  let code = '';
  const storeDD = document.getElementById('stores');
  WebsiteStoresData.map(wsdata => ((wsdata.websiteId == webId) ? storeoptdata = wsdata.stores : ''));
  WebsiteStoresData.map(wsdata => ((wsdata.websiteId == webId) ? webFlag = wsdata.flag : ''));
  WebsiteStoresData.map(wsdata => ((wsdata.websiteId == webId) ? code = wsdata.code : ''));

  document.getElementById('country_flag_img').src = webFlag;
  // document.getElementById('country_flag_img2').src = webFlag;
  // document.getElementById('country_flag_main').src = webFlag;
  document.getElementById('curr_web_code').innerHTML = code;
  // document.getElementById('myDropdown2').value = web_id;
  // var store_dd2 = document.getElementById('stores2');
  removeOptions(storeDD);
  // removeOptions(store_dd2);
  storeoptdata.forEach(opt => storeDD.options.add(new Option(opt.name, opt.storeId, false)));
  // storeoptdata.forEach((opt)=>store_dd2.options.add(new Option(opt.name, opt.storeId,false)));
};
const Dropdown = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    value: React.PropTypes.oneOfType(
      [
        React.PropTypes.number,
        React.PropTypes.string
      ]
  ),
    valueField: React.PropTypes.string,
    labelField: React.PropTypes.string,
    onChange: React.PropTypes.func
  },
  getDefaultProps: function () {
    return {
      value: null,
      valueField: 'value',
      labelField: 'label',
      onChange: null,
    };
  },
  getInitialState: function () {
    const selected = this.getSelFPro(this.props);
    return {
      selected: selected
    };
  },
  getSelFPro(props) {
    let selected;
    if (props.value === null && props.options.length !== 0) {
      selected = props.options[0][props.valueField];
    } else {
      selected = props.value;
    }
    return selected;
  },
  handleChange: function (e) {
    if (this.props.onChange) {
      const change = { oldValue: this.state.selected, newValue: e.target.value };
      this.props.onChange(change);
    }
    this.setState({ selected: e.target.value });
  },
  render: function () {
    const self = this;
    const ddoptions = self.props.options.map((option) => {
      return (
        <option key={option[self.props.valueField]} value={option[self.props.valueField]}>
          {option[self.props.labelField]}
        </option>
      );
    });
    return (
      <select id={this.props.id} className="country-select" value={this.state.selected} onChange={this.handleChange}>
        <style jsx>{`
          .form-control{float:left; height:30px; width:200px;}
        `}</style>
        {ddoptions}
      </select>
    );
  },
});

const Navigation = ({ currentPath, lang }) => (
  <nav>
    <ul className="desktop-menu">
      <div className="left-nav">
        <li>
          <Link route="watches" params={{ lang }} currentPath={currentPath}>Watches</Link>
        </li>
        <li>
          <Link route="straps" params={{ lang }} currentPath={currentPath}>Straps</Link>
        </li>
        <li>
          <Link route="jewelry" params={{ lang }} currentPath={currentPath}>Jewelry</Link>
        </li>
      </div>
      <div className="center-nav">
        <li>
          <Link route="home" params={{ lang }} currentPath={currentPath} className="home_logo">Home</Link>
        </li>
      </div>
      <div className="right-nav">
        <li className="nav-cart">
          <Link href="cart" params={{ lang }} currentPath={currentPath}>
            <img src="/static/images/nav-cart-black.png" alt="" /><span>0</span>
          </Link>
        </li>
        <li className="nav-login">
          <Link route="login" params={{ lang }} currentPath={currentPath}>Login</Link>
        </li>
        <li>
          <Link href="" currentPath={currentPath}>
            <img id="country_flag_main" width="12" src="/static/images/nl.svg" alt="" />&nbsp;<span id="curr_web_code">NL</span>
          </Link>
          <div className="switcher-sub-menu">
            <div className="rf-mod-languageBar__innerWrapper">
              <div className="rf-mod-locationSelector">
                <div className="country-img">
                  <img alt="Country Flag" id="country_flag_img" src="https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/ww.png" width="14" />
                  <span className="rf-mod-locationSelector__arrow" />
                </div>
                <Dropdown id="myDropdown3" options={options} value="b" labelField="name" valueField="websiteId" onChange={dropDownOnChange} />
              </div>
              <div className="rf-mod-languageBar__rf-mod-languageSelector rf-mod-languageSelector">
                <select className="language-select" name="stores" id="stores" />
              </div>
              <input type="hidden" name="lang_code" id="lang_code" value={lang} />
              <button className="select-button" type="button" onClick={setCountryLang}><a>Continue</a></button>
            </div>
          </div>
        </li>
        <li>
          <Link currentPath={currentPath} >Service <AngleDown className="angle_down" /></Link>
          <ul className="sub-menu">
            <li><Link route="support" params={{ lang }} currentPath={currentPath}>Support</Link></li>
            <li><Link href="" currentPath={currentPath}>Contact</Link></li>
            <li><Link route="stores" params={{ lang }} currentPath={currentPath}>Stores</Link></li>
          </ul>
        </li>
        <li className="rosefield-menu">
          <Link currentPath={currentPath}>World Of Rosefield <AngleDown className="angle_down" /></Link>
          <ul className="sub-menu">
            <li><Link route="downtown-chic" params={{ lang }} currentPath={currentPath}>Downtown Chic</Link></li>
            <li><Link route="upper-east-side" params={{ lang }} currentPath={currentPath}>Upper East Side</Link></li>
            <li><Link route="west-village" params={{ lang }} currentPath={currentPath}>West Village</Link></li>
            <li><Link route="campaign" params={{ lang }} currentPath={currentPath}>Latest Campaign</Link></li>
            <li><Link route="15-minutes-with-stephanie" params={{ lang }} currentPath={currentPath}>15 Minutes With</Link></li>
            <li><Link route="myrosefieldmoment" params={{ lang }} currentPath={currentPath}>#Myrosefieldmoment</Link></li>
            <li><Link route="our-story" params={{ lang }} currentPath={currentPath}>Our story</Link></li>
          </ul>
        </li>
      </div>
    </ul>
    <ul className="mobile-menu">
      <li>
        <Link route="home" params={{ lang }} currentPath={currentPath} className="mobile_logo">Home</Link>
      </li>
      <li className="nav-cart">
        <Link href="cart" params={{ lang }} currentPath={currentPath}>
          <div className="cart-icon"><span>0</span></div>
        </Link>
      </li>
    </ul>
  </nav>
);

Navigation.propTypes = {
  currentPath: PropTypes.string,
};

Navigation.defaultProps = {
  currentPath: '/',
};

export default Navigation;
