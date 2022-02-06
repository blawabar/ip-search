import { LocationInfo } from "../LocationInfo";
import { LocationMap } from "../LocationMap";

import styles from "./UserInfo.module.scss";

const locationInfoData = {
  headingText: "User information",
  ipAddress: "88.96.24.126",
  latitude: 53.234,
  longitude: 16.345,
  continent: "Europa",
  country: "Poland",
  region: "Western Pomerania",
  city: "Szczecin",
};

const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <LocationMap />
      <LocationInfo {...locationInfoData} />
    </div>
  );
};

export default UserInfo;
