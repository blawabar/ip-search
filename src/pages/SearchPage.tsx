import { SearchForm } from "../components/SearchForm";
import { SearchHistoryList } from "../components/SearchHistoryList";
import { SearchResult } from "../components/SearchResult";
import { UserInfo } from "../components/UserInfo";

import styles from "./SearchPage.module.scss";

const SearchPage = () => {
  return (
    <div className={styles.searchPage}>
      <SearchHistoryList />
      <UserInfo />
      <SearchForm />
      <SearchResult />
    </div>
  );
};

export default SearchPage;
