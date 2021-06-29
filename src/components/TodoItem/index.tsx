import styles from "src/components/TodoItem/index.module.css";

export const TodoItem = (props) => {

  return (
    <li className={styles.toDoItem}>
      <input
        type="checkbox"
        id={props.id}
        defaultChecked={props.completed}
        onChange={() => props.toggleTaskCompleted(props.id)}
      />
      <p className={styles.toDoTask}>{props.title}</p>
      <button className={styles.deleteButton} onClick={()=> props.deleteTask(props.id)}>
        -
      </button>
    </li>
  );
};
