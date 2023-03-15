import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import NavBar from "../../Components/Navbar/NavBar";
import style from "./Home.module.css";
import FilterButton from "../../Components/Organizer/FilterButtons";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.filter}>
        <div className={style.header}>
          <NavBar />
        </div>
        <div className={style.orderSection}>
          <FilterButton />
        </div>
        <CardsContainer />
      </div>
    </div>
  );
};

export default Home;
