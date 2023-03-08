import React from 'react';
import styles from '../Styles/SearchItem.module.css';

const SearchItem = ({search, setSearch}) => {
  return (
    <form className={styles.search_form} onSubmit={(e) => {e.preventDefault();}}>
        <input type='search' role="searchbox" id="searchItem" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} className={styles.search_box}/>
    </form>
  )
}

export default SearchItem