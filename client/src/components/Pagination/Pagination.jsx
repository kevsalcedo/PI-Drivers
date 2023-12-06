import React from "react";
import styles from "./Pagination.module.css";

export const Pagination = ({
  driversPerPage,
  totalDrivers,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  const totalPages = Math.ceil(totalDrivers / driversPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const onPreviusPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };

  const maxDisplayedPages = 5;
  const halfMaxDisplayedPages = Math.floor(maxDisplayedPages / 2);

  let startPage = Math.max(1, currentPage - halfMaxDisplayedPages);
  let endPage = Math.min(totalPages, startPage + maxDisplayedPages - 1);

  if (endPage - startPage < maxDisplayedPages - 1) {
    startPage = Math.max(1, endPage - maxDisplayedPages + 1);
  }

  const visiblePageNumbers = pageNumbers.slice(startPage - 1, endPage);

  return (
    <nav
      className={styles.pagination}
      role="navigation"
      aria-label="pagination"
    >
      <a
        className={`${styles["pagination-previous"]} ${
          currentPage === 1 ? styles["is-disabled"] : ""
        }`}
        onClick={onPreviusPage}
      >
        Previous
      </a>

      {visiblePageNumbers.map((noPage) => (
        <p key={noPage}>
            <a className={`${styles["pagination-link"]} ${
                noPage === currentPage ? styles["is-current"] : ""
              }`}
              onClick={() => onSpecificPage(noPage)}>
                {noPage}
            </a>
        </p>
      ))}
      
      <a
        className={`${styles["pagination-link"]} ${
          currentPage >= pageNumbers.length ? styles["is-disabled"] : ""
        }`}
        onClick={onNextPage}
      >
        Next page
      </a>
    </nav>
  );
};
