import React, { useEffect, useState } from "react";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import NavBar from "../../Components/Navbar/NavBar";
import style from "./Home.module.css";
import FilterButton from "../../Components/Organizer/FilterButtons";
import WaitingPage from "../../Components/Waiting/WaitingPage";
import { useSelector } from "react-redux";

const Home = () => {
  let dogs = useSelector((state) => state.dogs);

  return (
    <div>
      {(dogs.length === 0) ? (
        <WaitingPage />
      ) : (
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
      )}
    </div>
  );
};

export default Home;
