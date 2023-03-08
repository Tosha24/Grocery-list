import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';
import styles from '../Styles/AddItem.module.css';


const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();  
  return (
    <form className={styles.add_form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Item"
        autoFocus
        ref={inputRef}
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)} className={styles.input_box}/>

      <button 
      type="submit"
      onClick={() => inputRef.current.focus()} className={styles.plus_button}>
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem