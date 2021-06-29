import { Dispatch, SetStateAction, VFC } from "react";
import styles from "src/components/FilterButton/index.module.css";

type Props = {
  name: string;
  isPressed: boolean;
  setFilter: Dispatch<SetStateAction<string>>
}

export const FilterButton: VFC<Props> = (props) => {
  return (
    <button
      type="button"
      className={styles.button}
      aria-pressed={props.isPressed}
      onClick={()=> props.setFilter(props.name)}
    >
      {props.name}
    </button>
  );
};
