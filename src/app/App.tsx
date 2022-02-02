import { AppHeader } from "../layouts";
import { SearchPage } from "../pages";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.pageContainer}>
        <SearchPage />
      </div>
    </div>
  );
}

export default App;
