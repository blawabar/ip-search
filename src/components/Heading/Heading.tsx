import { FC } from "react";

import styles from "./Heading.module.scss";

const Heading: FC<{ text: string }> = ({ text }) => {
  return <h3 className={styles.heading}>{text}</h3>;
};

export default Heading;
