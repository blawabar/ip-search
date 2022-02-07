import { useAppSelector } from "../../data/hooks";
import { Heading } from "../Heading";
import styles from "./SearchHistory.module.scss";

const SearchHistory = () => {
  const searchHistoryData = useAppSelector(
    (state) => state.searchResult.searchHistory,
  );

  return (
    <div className={styles.searchHistory}>
      <Heading text="Recent searches" />
      <ul className={styles.searchesList}>
        {searchHistoryData.map(({ ipAddress, city }) => (
          <li>{`${ipAddress} - ${city}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
