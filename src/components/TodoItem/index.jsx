import styles from 'src/components/TodoItem/index.module.css';

export const TodoItem = (props) => {

  const handleDelete = () => {
    alert("delete")
  }

  return (
    <li className={styles.toDoItem}>
      <input type="checkbox" />
      <p className={styles.toDoTask}>{props.text}</p>
      <button className={styles.deleteButton} onClick={handleDelete}>-</button>
    </li>
  );
};
