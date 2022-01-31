import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profile from '../../images/profileIcon.svg';
import search from '../../images/searchIcon.svg';

// 360 x 640
function Header() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const history = useHistory();

  return (
    <div>
      <button
        type="button"
        data-testid="profile-top-btn"
        onClick={ () => history.push('/profile') }
      >
        <img
          src={ profile }
          alt="Profile Icon"
        />
      </button>
      <h1
        data-testid="page-title"
      >
        Profile
      </h1>
      <button
        type="button"
        data-testid="search-top-btn"
        onClick={ () => setToggleSearch(!toggleSearch) }
      >
        <img
          src={ search }
          alt="Search Icon"
        />
      </button>
      {toggleSearch && (
        <input
          type="text"
          data-testid="search-input"
        />
      )}
    </div>
  );
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Header;
