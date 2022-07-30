import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux/es/exports";

import styles from "./Pagination.module.scss";

import { setCurrentPage } from "../../redux/slices/filtersSlice";

function Pagination() {
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
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
