import React from 'react'
import styles from "./Search.module.scss"

const Search = () => {

  return (
    <form className='d-flex justify-content-center gap-1 mb-5'>
        <input type="text" className={`${styles.input}`} placeholder="Search for Characters"/>
        <button type="submit" className={`btn btn-primary fs-5 ${styles.btn}`}>Search</button>
    </form>
  )
}

export default Search