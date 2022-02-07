import { FC, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

import styles from "./LocationMap.module.scss";

interface LocationMapProps {
  center: [number, number];
}

const CustomMarker = ({ position }: { position: [number, number] }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(position);
  }, [position, map]);

  return <Marker position={position}></Marker>;
};

const LocationMap: FC<LocationMapProps> = ({ center }) => {
  return (
    <div className={styles.locationMap}>
      <MapContainer center={center} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CustomMarker position={center} />
      </MapContainer>
    </div>
  );
};

export default LocationMap;
