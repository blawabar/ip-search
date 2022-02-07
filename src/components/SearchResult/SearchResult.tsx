import { useAppSelector } from "../../data/hooks";
import { LocationInfo } from "../LocationInfo";
import { LocationMap } from "../LocationMap";
import { Skeleton } from "../Skeleton";

import styles from "./SearchResult.module.scss";

const SearchResult = () => {
  const isLoading = useAppSelector((state) => state.searchResult.isLoading);
  const data = useAppSelector((state) => state.searchResult.data);
  const error = useAppSelector((state) => state.searchResult.error);

  return isLoading ? (
    <div className={styles.searchResult}>
      <Skeleton message="Loading lookup data..." />
      <Skeleton message="Loading lookup data..." />
    </div>
  ) : data ? (
    <div className={styles.searchResult}>
      <LocationMap center={[data.latitude, data.longitude]} />
      <LocationInfo headingText="Last search information" {...data} />
    </div>
  ) : error ? (
    <div className={styles.searchResult}>
      <Skeleton message={error} />
      <Skeleton message={error} />
    </div>
  ) : (
    <div className={styles.searchResult}>
      <Skeleton message="No lookup data" />
      <Skeleton message="No lookup data" />
    </div>
  );
};

export default SearchResult;
