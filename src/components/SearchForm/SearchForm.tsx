import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useAppDispatch } from "../../data/hooks";
import { getSearchResultData } from "../../data/search-result-thunk";
import styles from "./SearchForm.module.scss";
import { validateSearchPhrase } from "../../data/utils";

interface FormData {
  searchPhrase: string;
}

const schema = yup
  .object({
    searchPhrase: yup
      .string()
      .test(
        "isSearchPhraseValid",
        "Please enter a valid external IP or a domain name",
        function (searchPhraseValue) {
          if (searchPhraseValue) {
            return validateSearchPhrase(searchPhraseValue);
          }
          return false;
        },
      ),
  })
  .required();

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const dispatch = useAppDispatch();
  const errorMessage = errors.searchPhrase?.message;
  const onSubmit = ({ searchPhrase }: FormData) => {
    dispatch(getSearchResultData(searchPhrase));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.searchForm}>
      <div className={styles.formRow}>
        <input
          type="search"
          placeholder="Enter a valid external IP or a domain name"
          className={styles.searchInput}
          disabled={isSubmitting}
          {...register("searchPhrase")}
        />
        {errorMessage && <p className={styles.formErrMsg}>{errorMessage}</p>}
      </div>
      <input
        type="submit"
        value="Lookup"
        className={styles.submitBtn}
        disabled={isSubmitting}
      />
    </form>
  );
};

export default SearchForm;
