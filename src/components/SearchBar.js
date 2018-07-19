import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { handleSearch, searchTerm } = this.props;
    return (
      <div className="pa2">
        <input
          className="pa3 ba b--green w-60"
          type="text"
          name="search"
          defaultValue={searchTerm}
          onChange={handleSearch}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string,
};

SearchBar.defaultProps = {
  searchTerm: '',
};

export default SearchBar;
