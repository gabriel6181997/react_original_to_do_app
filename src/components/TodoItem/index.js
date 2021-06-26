import styles from 'src/components/TodoItem/index.module.css';

export const TodoItem = () => {
  return (
    <div className={styles.toDoItem}>
      <input type="checkbox" />
      <p className={styles.toDoTask}>xxxxxxx</p>
      <button className={styles.deleteButton}>-</button>
    </div>
  );
};
