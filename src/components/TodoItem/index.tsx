import { VFC } from "react";
import styles from "src/components/TodoItem/index.module.css";

type Props = {
  id:  string;
  title: string;
  completed: boolean;
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
}

export const TodoItem:VFC<Props> = (props) => {

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
