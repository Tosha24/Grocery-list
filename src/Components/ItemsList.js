import React from "react";
import ListItem from "./ListItem.js";
import styles from "../Styles/ListItem.module.css";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <table className={styles.table}>
      <ul>
        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </table>
  );
};

export default ItemList;
