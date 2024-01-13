import classes from "./UsersList.module.css";
import EditUserForm from "../user_forms/EditUserForm";
import { useState } from "react";

const UserListItem: React.FC<{
  id: number;
  name: string;
  email: string;
  position: string;
  last_edited: string;
}> = ({ id, name, email, position, last_edited }) => {

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const editFormHandler = () => {
    setIsEditing((state) => {
      return !state
    })
  };

  return (
    <>
    {isEditing && <div className={classes.background}/>}
    <div className={classes["user-shell"]}>
      <div className={classes["user-detail"]}>
        <strong>Name: </strong>
        <p>{name}</p>
      </div>
      <div className={classes["user-detail"]}>
        <strong>Email: </strong>
        <p>{email}</p>
      </div>
      <div className={classes["user-detail"]}>
        <strong>Position: </strong>
        {position}
      </div>
      <div className={classes["user-detail"]}>
        <strong>Last Edited: </strong>
        <p>{last_edited}</p>
      </div>
      <button onClick={editFormHandler}>Edit</button>
    </div>
    {isEditing && <EditUserForm name={name} email={email} position={position} id={id} hideEditForm={editFormHandler}/>}
    </>
  );
};

export default UserListItem;
