import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDogs, getTempers, setCurrentPage } from "../../redux/actions";
import Card from "../Card/Card";
import Paginate from "../Pagination/Pagination";
import style from "./CardsContainer.module.css";
import { Link } from "react-router-dom";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);

  const pagination = (indexPage) => {
    dispatch(setCurrentPage(indexPage));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth",
    });
  }

  const handlePrevPagination = () => {
    dispatch(setCurrentPage(currentPage - 1));
    scrollToTop();
  };
  const handleNextPagination = () => {
    dispatch(setCurrentPage(currentPage + 1));
    scrollToTop();
  };
  const handleFirstCell = () => {
    dispatch(setCurrentPage(1));
    scrollToTop();
  };
  const handleLastCell = () => {
    dispatch(setCurrentPage(lastCell));
    scrollToTop();
  };

  const dogs = useSelector((state) => state.ftrDogs);

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTempers());
  }, [dispatch]);

  const displayedDogs = 8;
  const finalReference = currentPage * displayedDogs;
  const initialReference = finalReference - displayedDogs;
  const paginationDogs = dogs?.slice(initialReference, finalReference);
  const lastCell = Math.ceil(dogs?.length / displayedDogs);

  let startPage = Math.max(currentPage - 1, 1);
  let endPage = Math.min(currentPage + 4, lastCell);
  if (endPage - startPage < 6) {
    startPage = Math.max(endPage - 4, 1);
  }

  const totalPages = [];
  for (let i = startPage; i <= endPage; i++) {
    totalPages.push(i);
  }

  return (
    <div className={style.container}>
      <div className={style.cardsContainer}>
        {paginationDogs? paginationDogs?.map((dog) => {
          return (
            <Link key={dog.id} to={`/detail/${dog.id}`}>
              <div>
                <Card
                  className={style.detailedCard}
                  id={dog.id}
                  name={dog.name}
                  image={dog.image}
                  weight={dog.weight}
                  temperament={dog.temperament}
                />
              </div>
            </Link>
          );
        }) : <h1></h1>}
      </div>
      <div className={style.pagination}>
        <button disabled={currentPage === 1} onClick={handleFirstCell}>
          First
        </button>
        <button disabled={currentPage === 1} onClick={handlePrevPagination}>
          ⇠
        </button>
        <Paginate
          totalPages={totalPages}
          paginate={pagination}
          currentPage={currentPage}
        />
        <button
          disabled={currentPage === lastCell}
          onClick={handleNextPagination}
        >
          ⇢
        </button>
        <button disabled={currentPage === lastCell} onClick={handleLastCell}>
          Last
        </button>
      </div>
    </div>
  );
};

export default CardsContainer;
