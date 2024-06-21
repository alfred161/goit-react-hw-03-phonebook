import PropTypes from 'prop-types';
import style from './Filter.module.css';

export const Filter = ({ filter, setFilter }) => {
  const handleFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <div className={style.filter}>
      <label>
        <p>Find contact by name</p>
        <input
          type="text"
          id={style.filter}
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
