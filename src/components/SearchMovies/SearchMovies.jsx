import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchMovies.module.css';

const SearchBox = ({ handleSubmit }) => {
  const [hasQuery, setHasQuery] = useState('');
  const updateQuery = e => {
    setHasQuery(e.currentTarget.value);
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input 
        className={css.searchFormInput}
        type="text" 
        name="query" 
        placeholder="Search movies"
        onChange={e => updateQuery(e)}></input>
      <button className={css.searchFormButton}  type="submit" disabled={!hasQuery}>
        Search
      </button>
    </form>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};