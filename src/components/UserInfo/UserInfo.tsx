import { LocationInfo } from "../LocationInfo";
import { LocationMap } from "../LocationMap";

import styles from "./UserInfo.module.scss";

const locationInfoData = {
  headingText: "User information",
  ipAddress: "88.96.24.126",
  latitude: 53.438056,
  longitude: 14.542222,
  continent: "Europa",
  country: "Poland",
  region: "Western Pomerania",
  city: "Szczecin",
};

const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <LocationMap
        center={[locationInfoData.latitude, locationInfoData.longitude]}
      />
      <LocationInfo {...locationInfoData} />
    </div>
  );
};

export default UserInfo;
