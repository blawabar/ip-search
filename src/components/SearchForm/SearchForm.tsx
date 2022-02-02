import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./SearchForm.module.scss";
interface FormData {
  searchPhrase: string;
}

const schema = yup
  .object({
    searchPhrase: yup.string().required(),
  })
  .required();

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const errorMessage = errors.searchPhrase?.message;
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.searchForm}>
      <div className={styles.formRow}>
        <input
          type="search"
          placeholder="Enter a valid IP or a domain name"
          className={styles.searchInput}
          {...register("searchPhrase")}
        />
        {errorMessage && <p className={styles.formErrMsg}>{errorMessage}</p>}
      </div>
      <input type="submit" value="Lookup" className={styles.submitBtn} />
    </form>
  );
};

export default SearchForm;
