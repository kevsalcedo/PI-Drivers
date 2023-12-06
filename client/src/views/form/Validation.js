const Validation = (newDriver) => {
  const errors = {};

  // FORENAME
  if (/[^((a-z)|(A-Z)|\s)]/.test(newDriver.forename)) {
    errors.forename = "Only letters are allowed";
  }

  if (newDriver.forename === "") {
    errors.forename = "required information";
  }

  if (newDriver.forename.length > 15) {
    errors.forename = "Foreame must be less than 15 characters";
  }

  // SURNAME
  if (/[^((a-z)|(A-Z)|\s)]/.test(newDriver.surname)) {
    errors.surname = "Only letters are allowed";
  }

  if (newDriver.surname === "") {
    errors.surname = "required information";
  }

  if (newDriver.surname.length > 20) {
    errors.surname = "Surname must be less than 20 characters";
  }

  // NATIONALITY
  if (/[^(|(a-z)|(A-Z)|\s)]/.test(newDriver.nationality)) {
    errors.nationality = "Special characters are not allowed";
  }

  if (newDriver.nationality === "") {
    errors.nationality = "required information";
  }

  // DOB
  if (newDriver.dob === "") {
    errors.dob = "required information";
  }

  return errors;
};

export default Validation;
