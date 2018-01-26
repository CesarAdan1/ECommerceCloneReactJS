import React from 'react';
import PropTypes from 'prop-types';

const Element = ({ name, description }) => {
  return (
    <div>
      <style jsx>{`
      div .new {
        text-transform: uppercase;
        text-align:center;
        width:100%;
        color: #414141;
        font-size: 12px;
        font-weight:bold;
        font-family:publico;
      }

      p, p.new {
        text-align: center;
        color: #4e4d4d;
        font-size: 14px;
        letter-spacing: 1px;
      }

      h2 {
        text-align: center;
        margin-bottom: 1em;
        color: #181818;
        font-size: 2em;
        letter-spacing: 1px;
        margin:0;
      }

      .info {
        lost-utility: clearfix;
        margin-bottom: 5em;
        margin-top: 3em;
      }

      .info div {
        lost-column: 8/16;
        lost-offset: 4/16;
      }

      @media only screen and (max-width:1024px){
        .info div {
          lost-column: 14/16;          
          lost-offset: 1/16;
        }        
      }

      `}</style>

      <div className="info">
        <div>
          <p className="new">new</p>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>

  );
};

Element.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Element;
