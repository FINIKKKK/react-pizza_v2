import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";

import { setCurrentPage } from "../../redux/slices/filtersSlice";

import styles from "./Pagination.module.scss";

const Pagination: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
      pageRangeDisplayed={8}
      pageCount={3}
      previousLabel="<"
    />
  );
}

export default Pagination;
