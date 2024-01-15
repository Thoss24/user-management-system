import classes from "./UsersList.module.css";
import EditUserForm from "../user_forms/EditUserForm";
import { useState } from "react";
import editUserContextActions from "../../store/edit_user_context_actions";
import { useContext } from "react";
import { ModalContext } from "../../store/edit_user_context_modal";

const UserListItem: React.FC<{
  id: number;
  name: string;
  email: string;
  position: string;
  last_edited: string;
}> = ({ id, name, email, position, last_edited }) => {

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const editUserModalContext = useContext(ModalContext);

  const editFormHandler = () => {
    setIsEditing((state) => {
      return !state
    })
    editUserModalContext.setIsDisplaying(true)
  };

  return (
    <>
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
