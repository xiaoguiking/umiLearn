import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      {props.children}
    </div>
  );
}

export default BasicLayout;
// <h1 className={styles.title}>Yay! Welcome to umi!</h1>