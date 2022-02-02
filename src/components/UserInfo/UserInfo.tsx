import { LocationInfo } from "../LocationInfo";
import { LocationMap } from "../LocationMap";

import styles from "./UserInfo.module.scss";

const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <LocationMap />
      <LocationInfo />
    </div>
  );
};

export default UserInfo;
