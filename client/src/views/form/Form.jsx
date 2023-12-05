import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../form/Form.module.css";
import { getTeams, postDriver } from "../../redux/actions/actions";
import Validation from "./Validation";
import { all } from "axios";

const Form = () => {
  const dispatch = useDispatch();

  const allTeams = useSelector((state) => state.allTeams);
  //console.log("All teams", allTeams)

  const [newDriver, setNewDriver] = useState({
    forename: "",
    surname: "",
    description: "", 
    image: "",
    nationality: "",
    dob: "",
    teamName: "",
  });

  useEffect(() => {
    dispatch(getTeams());
    if (
      newDriver.forename !== "" ||
      newDriver.surname !== "" ||
      newDriver.nationality ||
      newDriver.dob !== "" ||
      newDriver.teamName !== ""
    ) {
      const newDriverValidation = Validation(newDriver);
      setErrors(newDriverValidation);
    } 
  }, [newDriver]);

  const handleChange = (event) => {
    if (event.target.value === "teams") {
      setNewDriver({
        ...newDriver,
        [event.target.name]: [...state.teams, event.target.value],
      });
    } else {
      setNewDriver({
        ...newDriver,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(await postDriver(newDriver));

    for (let property in newDriver) {
      document.getElementById(property).value = "";
    }
  };

  const [errors, setErrors] = useState({
    forename: "",
    surname: "",
    description: "",
    image: "",
    nationality: "",
    dob: "",
    teamName: "",
  });


/*   const disableButton = () => {
    let aux = true;

    for(let error in errors){
      if(errors[error] === ""){
        aux = false;
      }else{
        aux = true;
        break;
      }
    }

    return aux;
  } */

  const showErrors = () => {
    console.log(errors)
  }

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
            id="forename"
            type="text"
            value={newDriver.forename}
            onChange={handleChange}
            name="forename"
          />
          {errors.forename && <p style={{ color: "red" }}>{errors.forename}</p>}
        </div>

        <br />

        <div>
          <label>Surname: </label>
          <input
            id="surname"
            type="text"
            value={newDriver.surname}
            onChange={handleChange}
            name="surname"
          />
          {errors.surname && <p style={{ color: "red" }}>{errors.surname}</p>}
        </div>

        <br />

        <div>
          <label>Description: </label>
          <input
            id="description"
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
            id="image"
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
            id="nationality"
            type="text"
            value={newDriver.nationality}
            onChange={handleChange}
            name="nationality"
          />
        </div>
        {errors.nationality && (
          <p style={{ color: "red" }}>{errors.nationality}</p>
        )}

        <br />

        <div>
          <label>Date of birth: </label>
          <input
            id="dob"
            type="date"
            value={newDriver.dob}
            onChange={handleChange}
            name="dob"
          />
        </div>
        {errors.dob && <p style={{ color: "red" }}>{errors.dob}</p>}

        <br />

        <h3>Select teams: </h3>
        <div className={styles.container}>
          {allTeams.map((team) => (
            <div className={styles.team} key={team.id}>
              <label>{team.teamName}: </label>
              <input
                id="teamName"
                name="teamName"
                type="checkbox"
                value={team.name}
              />
            </div>
          ))}
        </div>

        <br />

        <button onClick={showErrors} /* disabled={disableButton()} */ type="submit">Create new driver</button>
      </form>
    </>
  );
};

export default Form;
