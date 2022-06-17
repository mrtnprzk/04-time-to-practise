import React, { useState } from "react";
import CardWrap from "../UI/CardWrap";
import Button from "../UI/Button";
import ErrorModal from "../ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {

    const [error, setError] = useState();
    const [userDetails, setUserDetails] = useState({
      name: "",
      age: "",
    });

    function userChangeHandler(e){
        const {name, value} = e.target
        
        setUserDetails((prevValue) => {
            return {
              ...prevValue,
              [name]: value,
            };
        });
    }

    function addUserHandler(e) {
      e.preventDefault();

      if (userDetails.name.trim().length === 0 || userDetails.age.length === 0) { //trim removes all white space
        setError({
          title: "Invalid Input",
          text: "Non-Empty Values"
        });
        return;
      } else if (+userDetails.age < 1) { //that + make it from string to number
        setError({
          title: "Invalid Age",
          text: "Type age more then 0",
        });
        return;
      }

      props.onAdd(userDetails);

      setUserDetails({
        name: "",
        age: "",
      });
    }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          text={error.text}
          setError={setError}
        />
      )}
      <CardWrap className={classes.input}>
        <form onSubmit={addUserHandler} className="form">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userDetails.name}
            onChange={userChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            name="age"
            value={userDetails.age}
            onChange={userChangeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </CardWrap>
    </>
  );
}

export default AddUser