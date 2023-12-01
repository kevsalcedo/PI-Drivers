import { useState } from "react";
import { useDispatch } from "react-redux";
import { restart, searchDriver } from "../../redux/actions/actions";
import styles from "../searchBar/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchDriver(input));
  };

  const reset = (event) => {
    dispatch(restart(input));
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={handleChange}
          className={styles.searchInput}
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className={styles.searchButton}
        >
          Search
        </button>

        <button onClick={reset} className={styles.resetButton}>
          Restart
        </button>
      </form>
    </div>
  );
}
