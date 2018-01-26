import React from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';
import CheckIcon from 'react-icons/lib/fa/check';
import persist from '../../lib/persist';
import device from '../../lib/device';
import { Link } from '../../config/routes';


class Login extends React.Component {
  /**
  * variable declaration
  */
  constructor(props) {
    super(props);
    this.state = {
      deviceInfo: '',
      lang: props.lang,
    };
    this.login = props.login;
  }
  /**
  * Call function when submit Login Button
  * @return {Object}
  */
  handleSubmit(e) {
    e.preventDefault();

    const deviceInfo = e.target.elements.deviceInfo.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    if (deviceInfo === '' || email === '' || password === '') {
      window.alert('All fields are required.');
      return false;
    }

    const loginobj = this.login(deviceInfo, email, password);
    // reset form
    //e.target.elements.deviceInfo.value = '';
    e.target.elements.email.value = '';
    e.target.elements.password.value = '';
    return loginobj;
  }
  /**
  * This function will call when page load and store device info
  * @return {Object}
  */
  componentDidMount() {
    this.setState({ deviceInfo: device.info() });
  }

  /**
   * Renders "Login Form"!
   * @return JSX
   */

  render() {
    return (
      <section className="main-container">
        <style jsx>{`
        
        .main-container {
          padding: 15px 100px !important;
        }

        .register-info-box {
          lost-column:6/12;
          float:left;
          margin:50px 0;
          lost-move: -1/2;

          & p {
            margin-bottom: 20px;
            color: #3c3c3c;
            font-size: 15px;
            line-height: 160%;
            lost-column:10/12;
          }

          & h5 {
            font-size: 18px;
            text-transform: initial;
            color: #181818;
            padding: 16px 0 14px;
            margin:0;
          }

          & li {
            width: 95%;
            color: #7e7e7e;
            text-transform: uppercase;
            font-size: 10px;
            letter-spacing: 4px;
            padding: 8px 0 2px 0;
            line-height:16px;
            font-weight:normal;
          }

          & h2 {
            margin:0;
          }

          & ul {
            float:left;
            padding-left:0;
            lost-column:6/6;
          }

          & span {
            padding-right: 12px;
            float:left;
          }

        }

        h2 {
          font-size: 40px;
          color: #181818;
          text-transform: inherit;
          font-family: 'publico';
          letter-spacing:1px;
        }

        .login-main{
          lost-column:6/12;
          margin:50px 0;
          lost-move: 1/2;

          & h2 {
            margin-top:5px;
          }

          & a {
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 13px;
            lost-move:1/12;
            line-height: 86px;
            color: #5a5859;
            cursor: pointer;
          }

        }

        @media only screen and (max-width:1024px){

          .main-container {
            padding: 15px 30px !important;
          }
          
          .register-info-box {
            lost-column: 12/12;
            margin: 50px 0 30px;
            left: 0;

            & p {
              lost-column: 12/12;            
            }

          }

          .login-main {
            lost-column: 12/12;
            clear:both;
            left:0;
            margin:10px 0 15px;
            padding-bottom:30px;
            border-bottom:1px solid #f4f4f4;          
          }

          input[type=text],input[type=password] {
            width: 100%;
            box-sizing: border-box;
          }
        }

        @media only screen and (max-width:480px){
          
          .login-main {
            
            & a {
              width:100%;
              float:left;
              line-height:40px;
              left:0;
            }          

          }

        }    

      `}</style>
        <div className="login-main">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input placeholder="deviceInfo" name="deviceInfo" value={this.state.deviceInfo} type="hidden" />
            <div>
              <h2>Already registered?</h2>
              <div>
                <label htmlFor="Email Address">Email Address <span className="required">*</span></label>
                <input type="text" name="email" autoComplete="off" />
              </div>
              <div>
                <label htmlFor="Email Address">Password<span className="required">*</span></label>
                <input type="password" name="password" autoComplete="off" />
              </div>
              <div>
                <Link route="forgotpassword" params={{ lang:this.state.lang }}>
                  <a>Forgot Your Password?</a>
                </Link>
                <button type="submit" name="Login" className="pink-black-button" >Login</button>
              </div>
            </div>
          </form>
        </div>
        <div className="register-info-box">
          <div>
            <h2>New Here?</h2>
            <p>Creating an account is easy and has many advantages.Enjoy the benefits
            of having your personal details saved and being able to check out with one click.</p>
            <h5>Why?</h5>
            <ul>
              <li>
                <span><CheckIcon color="#74b073" size={16} /></span>Als eerste op de hoogte van nieuwe producten
              </li>
              <li>
                <span><CheckIcon color="#74b073" size={16} /></span>voorrange bij aanbiedingen
              </li>
              <li>
                <span><CheckIcon color="#74b073" size={16} /></span>overzicht van je bestellingen
              </li>
              <li>
                <span><CheckIcon color="#74b073" size={16} /></span>Snelle checkout
              </li>
            </ul>
            <Link route="register" params={{ lang:this.state.lang }}>
              <a className="white-black-border-button">Create an Account</a>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

Login.propTypes = () => ({
  login: PropTypes.func.isRequired,
});

const login = gql`
mutation login($deviceInfo: String!, $email: String!, $password: String!) {
  Login(deviceInfo: $deviceInfo, email: $email, password: $password) {
    isLoggedIn
    sessionToken

    user {
      id
      email
    }

    errors {
      message
      locations
      paths
    }
  }
}
`
export default graphql(login, {
  props: ({ mutate }) => ({
    login: (deviceInfo, email, password) => mutate({
      variables: { deviceInfo, email, password },
      update: (proxy, { data }) => {
        console.log(data.Login.sessionToken);
        // Keep session
        data.Login && persist.willSetSessionToken(data.Login.sessionToken);
      },
    }),
  }),
})(Login);
