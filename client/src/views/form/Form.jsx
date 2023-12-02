import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../form/Form.module.css"

const Form = () => {
  const dispatch = useDispatch();

  const allTeams = useSelector((state) => state.allTeams);

  /*   useEffect(() => {
    dispatch();
  },[]) */

  const [newDriver, setNewDriver] = useState({
    forename: "",
    surname: "",
    description: "",
    image: "",
    nationality: "",
    dob: "",
    teams: "",
  });

  const handleChange = (event) => {
    setNewDriver({
      ...newDriver,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = axios.post("http://localhost:3001/drivers", newDriver);
  };

  return (
    <>
      <div>
        <h2>Create driver</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label>Forename: </label>
          <input
            type="text"
            value={newDriver.forename}
            onChange={handleChange}
            name="forename"
          />
        </div>

        <br />

        <div>
          <label>Surname: </label>
          <input
            type="text"
            value={newDriver.surname}
            onChange={handleChange}
            name="surname"
          />
        </div>

        <br />

        <div>
          <label>Description: </label>
          <input
            type="text"
            value={newDriver.description}
            onChange={handleChange}
            name="description"
          />
        </div>

        <br />

        <div>
          <label>Image: </label>
          <input
            type="url"
            value={newDriver.image}
            onChange={handleChange}
            name="image"
          />
        </div>

        <br />

        <div>
          <label>Nationality: </label>
          <input
            type="text"
            value={newDriver.nationality}
            onChange={handleChange}
            name="nationality"
          />
        </div>

        <br />

        <div>
          <label>Date of birth: </label>
          <input
            type="date"
            value={newDriver.dob}
            onChange={handleChange}
            name="dob"
          />
        </div>

        <br />

        <h3>Select teams: </h3>
        <div className={styles.container}>
        {
          allTeams.map((team) => (
            <div className={styles.team} key={team.id} >
            <label>{team.name}: </label>
            <input type="checkbox" value={team.name}/>
            </div>
            
          ))
        }
        </div>
        

        <br />

        <button type="submit">Create new driver</button>
      </form>
    </>
  );
};

export default Form;
