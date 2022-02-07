import { useAppSelector } from "../../data/hooks";
import { LocationInfo } from "../LocationInfo";
import { LocationMap } from "../LocationMap";
import { Skeleton } from "../Skeleton";

import styles from "./SearchResult.module.scss";

const SearchResult = () => {
  const isLoading = useAppSelector((state) => state.searchResult.isLoading);
  const data = useAppSelector((state) => state.searchResult.data);
  const error = useAppSelector((state) => state.searchResult.error);

  const Body = () =>
    isLoading ? (
      <>
        <Skeleton message="Loading lookup data..." />
        <Skeleton message="Loading lookup data..." />
      </>
    ) : data ? (
      <>
        <LocationMap center={[data.latitude, data.longitude]} />
        <LocationInfo headingText="Last search information" {...data} />
      </>
    ) : error ? (
      <>
        <Skeleton message={error} />
        <Skeleton message={error} />
      </>
    ) : (
      <>
        <Skeleton message="No lookup data" />
        <Skeleton message="No lookup data" />
      </>
    );

  return (
    <div className={styles.searchResult}>
      <Body />
    </div>
  );
};

export default SearchResult;
