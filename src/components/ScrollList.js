import React from 'react';
import PropTypes from 'prop-types';

const ScrollList = ({ children }) => <div className="scrollList">{children}</div>;

ScrollList.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ScrollList;
