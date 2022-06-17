import React from 'react'
import CardWrap from '../UI/CardWrap';
import classes from "./UserList.module.css";

const UserList = (props) => {

  return (
    <CardWrap className={classes.users}>
      <ul>
        {props.users.map((user, index) => (
          <li key={index} onClick={() => props.onDelete(index)}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </CardWrap>
  );
};

export default UserList;