import React from 'react';
import { gql, graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { Link } from '../../config/routes';


const ForgotPassword = ({ recover, lang }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;

    if (email === '') {
      window.alert('Email field required.');
      return false;
    }
    const PromiseObj = recover(email);
    console.log(PromiseObj);
  }

  return (
    <section className="main-container">
      <style jsx>{`
      
      .main-container {
        padding: 15px 100px !important;
      }

      .forgot-main {
        lost-column:12/12;
        margin:50px 0;

        & h2 {
          font-size: 40px;
          color: #181818;
          text-transform: inherit;
          font-family: 'publico';
          letter-spacing:1px;
        }

        & p {
          margin-bottom: 10px;
          color: #3c3c3c;
          font-size: 15px;
          line-height: 160%;
          lost-column:10/12;
        }

        & div{
          lost-column:12/12;
        }

        & div label{
          lost-column:12/12;
          margin-top:12px;
        }

        & input[type=text] {
          lost-column:6/12;
          float:left;
        }
      }

      @media only screen and (max-width:1024px){
        
        .main-container {
          padding: 15px 30px !important;
        }

        .forgot-main {
          margin-top:5px;

          & p {
            lost-column:12/12;
          }

          & input[type=text] {
            width: 94%;
          }            
        }

        .back-button {
          padding: 16px 25px !important;
        }


      }

    `}</style>
      <div className="forgot-main">
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Forgot Your Password?</h2>
            <p>Retrieve your password here</p>
            <p>Please enter your email address below. You will receive a
            link to reset your password.</p>
            <div>
              <label htmlFor="Email Address">Email Address <span className="required">*</span></label>
              <input type="text" name="email" autoComplete="off" />
            </div>
            <div>
              <button type="submit" name="Submit" className="pink-black-button" >Submit</button>
              <Link route="login" params={{ lang }}>
                <a className="back-button">Back</a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

const recover = gql`
mutation recover($email: String!) {
  Recover(email: $email) {
    status
  }
}
`

ForgotPassword.propTypes = () => ({
  recover: PropTypes.func.isRequired,
});

export default graphql(recover, {
  props: ({ mutate, lang }) => ({
    recover: (email) => mutate({
      variables: { email },
    }),
  }),
})(ForgotPassword);
