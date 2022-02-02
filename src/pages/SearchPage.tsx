import { SearchForm } from "../components/SearchForm";
import { SearchHistory } from "../components/SearchHistory";
import { SearchResult } from "../components/SearchResult";
import { UserInfo } from "../components/UserInfo";

import styles from "./SearchPage.module.scss";

const SearchPage = () => {
  return (
    <div className={styles.searchPage}>
      <SearchHistory />
      <UserInfo />
      <SearchForm />
      <SearchResult />
    </div>
  );
};

export default SearchPage;
