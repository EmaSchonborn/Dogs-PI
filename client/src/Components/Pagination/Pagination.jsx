import React from "react";
import style from "./Pagination.module.css";

export default function Paginate({ paginate, currentPage, totalPages }) {
  return (
    <div className={style.container}>
      <ul className={style.ul_container}>
        {totalPages &&
          totalPages.map((No) => (
            <button
              key={No}
              onClick={() => paginate(No)}
              className={
                currentPage === No ? `${style.active}` : `${style.disabled}`
              }
            >
              {No}
            </button>
          ))}
      </ul>
    </div>
  );
}
