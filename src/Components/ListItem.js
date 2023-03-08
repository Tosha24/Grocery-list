import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "../Styles/ListItem.module.css";

const ListItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className={styles.list_item} key={item.id}>
      <div>
        <input
          type="checkbox"
          onChange={() => handleCheck(item.id)}
          checked={item.checked}
          className={styles.item_checkbox}
        />

        <label
          style={item.checked ? { textDecoration: "line-through" } : null}
          onDoubleClick={() => handleCheck(item.id)}
        >
          {item.item}
        </label>
      </div>

      <div>
        <FaTrashAlt
          id="color-change"
          onClick={() => handleDelete(item.id)}
          role="button"
          tabIndex="0"
          className={styles.delete_icon}
        />
      </div>
    </li>
  );
};

export default ListItem;
