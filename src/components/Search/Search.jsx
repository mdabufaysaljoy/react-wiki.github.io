import React, { useState } from 'react'
import styles from "./Search.module.scss"

const Search = ({ setSearch, setPageNumber }) => {

  const [search, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue("");
    setSearch(search);
    setPageNumber(1);
  };

  return (
    <form
    className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-1 my-5"
    onSubmit={handleSubmit}
    >
      <input
        type="text"
        className={`${styles.input}`}
        placeholder="Search For Characters"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
      type="submit"
      className={`btn btn-primary fs-5 ${styles.btn}`}
      >
        Search
      </button>
    </form>
  );
};

export default Search