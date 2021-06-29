import styles from "src/components/FilterButton/index.module.css";

export const FilterButton = (props) => {
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
