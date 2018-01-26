import React from 'react';
import { gql, graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-icheck';
import CheckIcon from 'react-icons/lib/fa/check';
import { Link } from '../../config/routes';


const SignUp = ({ Signup, lang }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (email === '' || password === '') {
      window.alert('Both fields are required.');
      return false;
    }
    const signupObj = Signup(email, password);
  }

  return (
    <section className="main-container">
      <style jsx global>{`
        
        .main-container {
          padding: 15px 100px !important;
        }

        .register-main{
          lost-column:6/12;

          & h3 {
            font-family: 'publico';
          }
          
          & span {
            font-size: 14px;
            color: #5a5859;
            letter-spacing: 1px;
          }    

        }

        .checkbox-newsletter {
          margin:10px 0;

          & span {
            margin-left: 10px;
          }
        }

        .register-info-box {
          lost-column:5/12;
          
          margin:50px 0 50px 65px;
          
          & h5 {
            font-size: 20px;
            text-transform: initial;
            color: #181818;
            padding: 0 0 14px;
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

        @media only screen and (max-width:1024px){
          .main-container {
              padding: 15px 30px !important;
          }

          .register-main{
            lost-column:12/12;

            & input[type=text] {
              width: 100%;
              box-sizing: border-box;
            }

            & input[type=password] {
              width: 100%;
              box-sizing: border-box;
            }

            & h3 {
              margin-top:10px;
            }

            & .input-name {
              width:58%;
              float:left;
            }

            & .input-initial {
              width:35%;
              float:left;
              margin-left:5%;
            }

          }

          .register-info-box {
            lost-column: 12/12;
            margin: 50px 0 30px;
            left: 0;          
          }
        }

        @media only screen and (max-width:400px){
          
          .register-main{

             & .input-initial {
              margin-left: 7%;
             }

            }

            .back-button {
              padding: 16px 25px !important;
            }

          }


      `}</style>
      <div className="register-main">
        <h3>Create An Account</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="input-name">
              <label htmlFor="firstname">First Name<span className="required">*</span></label><br />
              <input type="text" name="firstname" id="firstname" />
            </div>
            <div className="input-initial">
              <label htmlFor="middlename">Middle Name<span className="required">*</span></label><br />
              <input type="text" name="middlename" id="middlename" />
            </div>
          </div>
          <div>
            <label htmlFor="lastname">Last Name<span className="required">*</span></label><br />
            <input type="text" name="lastname" id="lastname" />
          </div>
          <div>
            <label htmlFor="email">Email Address<span className="required">*</span></label><br />
            <input type="text" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password<span className="required">*</span></label><br />
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <label htmlFor="confirmation">Confirm Password<span className="required">*</span></label><br />
            <input type="password" name="confirmation" id="confirmation" />
          </div>
          <div className="common-row checkbox-newsletter">
            <Checkbox checkboxClass="icheckbox_minimal-green" increaseArea="20%" label="Sign Up for Newsletter" />
          </div>
          <div>
            <button type="submit" name="register" className="pink-black-button">Register</button>
            <Link route="login" params={{ lang }}>
              <a className="back-button">Back</a>
            </Link>
          </div>
        </form>
      </div>
      <div className="register-info-box">
        <div>
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
        </div>
      </div>
    </section>
  );
};

const Signup = gql`
mutation Signup($email: String!, $password: String!) {
  Signup(email: $email, password: $password) {
    id
  }
}
`

SignUp.propTypes = () => ({
  Signup: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
});

export default graphql(Signup, {
  props: ({ mutate, lang }) => ({
    Signup: (email, password) => mutate({
      variables: { email, password },
    }),
  }),
})(SignUp);
