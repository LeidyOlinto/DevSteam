import styles from "./button.module.css";

export default function Button({ children, fullWidth }) {
  return (
    <div>
      <button className={`${styles.button} ${fullWidth && styles.fullWidth}`}>
        {children}
      </button>
    </div>
  );
}
