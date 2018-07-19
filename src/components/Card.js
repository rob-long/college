import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ robot }) => (
  <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
    <img alt="robots" src={`https://robohash.org/${robot.name}?200x200`} />
    <div>
      <h2>{robot.name}</h2>
      <p>{robot.email}</p>
    </div>
  </div>
);

Card.propTypes = {
  robot: PropTypes.object.isRequired,
};

export default Card;
