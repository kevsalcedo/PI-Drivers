import React from "react";
import Card from "../card/Card";
import style from "./CardContainer.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Pagination } from "../Pagination/Pagination";

const CardContainer = () => {
  const drivers = useSelector((state) => state.drivers);

  const totalDrivers = drivers.length;
  const [driversPerPage, setDriversPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * driversPerPage;
  const firstIndex = lastIndex - driversPerPage;

  return (
    <>
      <div className={style.container}>
        {drivers.map((driver) => {
          return (
            <Card
              key={driver.id}
              id={driver.id}
              forename={driver.forename}
              surname={driver.surname}
              image={driver.image}
              nationality={driver.nationality}
              dob={driver.dob}
              description={driver.description}
            />
          );
        }).slice(firstIndex, lastIndex)}
      </div>
      <div>
        <Pagination
          driversPerPage={driversPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalDrivers={totalDrivers}
        />
      </div>
    </>
  );
};

export default CardContainer;
