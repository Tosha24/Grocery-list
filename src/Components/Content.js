import React from 'react'
import ItemsList from './ItemsList.js';
import styles from '../Styles/ListItem.module.css';

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {(items.length) ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p className={styles.empty_list}>No Groceries added!</p>
      )}
    </main>
  );
}

export default Content