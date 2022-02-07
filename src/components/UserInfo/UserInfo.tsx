import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../data/hooks";
import { getUserData } from "../../data/user-info-thunk";
import { LocationInfo } from "../LocationInfo";
import { LocationMap } from "../LocationMap";

import styles from "./UserInfo.module.scss";

const UserInfo = () => {
  const dispatch = useAppDispatch();
  const { isLoading, data, error } = useAppSelector((state) => state.userInfo);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return isLoading ? (
    <p>Loading user data...</p>
  ) : data ? (
    <div className={styles.userInfo}>
      <LocationMap center={[data.latitude, data.longitude]} />
      <LocationInfo headingText="User information" {...data} />
    </div>
  ) : error ? (
    <p>{error}</p>
  ) : null;
};

export default UserInfo;
