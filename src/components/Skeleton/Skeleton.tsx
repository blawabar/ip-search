import styles from "./Skeleton.module.scss";

const Skeleton = ({ message }: { message: string }) => {
  return <div className={styles.skeleton}>{message}</div>;
};

export default Skeleton;
