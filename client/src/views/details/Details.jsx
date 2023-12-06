import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDriverDetail, cleanDetail } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import styles from "../details/Details.module.css";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const driver = useSelector((state) => state.driver);

  useEffect(() => {
    dispatch(getDriverDetail(id));

    return () => dispatch(cleanDetail());
  }, [id]);

  return (
    <>
      <div className={styles["details-container"]}>
        <img
          className=""
          src={isNaN(driver.id) ? driver.image : driver.image?.url}
          alt={driver.name?.forename}
        />
        <h1>ID#{driver.id}</h1>
        <h1>
          Name: {isNaN(driver.id) ? driver.forename : driver.name?.forename}{" "}
          {isNaN(driver.id) ? driver.surname : driver.name?.surname}
        </h1>
        <h2>Nationality: {driver.nationality}</h2>
        <h3>Date of birth: {driver.dob}</h3>
        <p>{driver.description}</p>
        <h2>Teams:{driver.teams}</h2>
      </div>
    </>
  );
};

export default Details;
