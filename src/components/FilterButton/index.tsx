import { Dispatch, SetStateAction, VFC } from "react";
import styles from "src/components/FilterButton/index.module.css";
import { filter } from "src/util/type";

type Props = {
  name: filter;
  isPressed: boolean;
  setFilter: Dispatch<SetStateAction<filter>>
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
