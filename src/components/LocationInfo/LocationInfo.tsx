import { FC } from "react";
import { Heading } from "../Heading";
import styles from "./LocationInfo.module.scss";

interface LocationInfoProps {
  headingText: string;
  ipAddress: string;
  latitude: number;
  longitude: number;
  continent: string;
  country: string;
  region: string;
  city: string;
}

const LocationInfo: FC<LocationInfoProps> = ({
  headingText,
  ipAddress,
  latitude,
  longitude,
  continent,
  country,
  region,
  city,
}) => {
  return (
    <div className={styles.locationInfo}>
      <Heading text={headingText} />
      <ul className={styles.infoList}>
        <li>
          <span>IP Address</span>
          <span>{ipAddress}</span>
        </li>
        <li>
          <span>Latitude</span>
          <span>{latitude}</span>
        </li>
        <li>
          <span>Longitude</span>
          <span>{longitude}</span>
        </li>
        <li>
          <span>Continent</span>
          <span>{continent}</span>
        </li>
        <li>
          <span>Country</span>
          <span>{country}</span>
        </li>
        <li>
          <span>Region</span>
          <span>{region}</span>
        </li>
        <li>
          <span>City</span>
          <span>{city}</span>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfo;
