import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ handleSubmit }) => {
  const [hasQuery, setHasQuery] = useState('');
  const updateQuery = e => {
    setHasQuery(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="query" 
        placeholder="Search movies"
        onChange={e => updateQuery(e)}></input>
      <button type="submit" disabled={!hasQuery}>
        Search
      </button>
    </form>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};