import classes from "./UsersList.module.css";
import EditUserForm from "../user_forms/EditUserForm";
import { deleteUser } from "../../utility/http_requests";
import { useState } from "react";
import { useContext } from "react";
import { ModalContext } from "../../store/edit_user_context_modal";
import { useAppDispatch } from "../../hooks/hooks";
import { usersActions } from "../../store/users_slice";

const UserListItem: React.FC<{
  id: number;
  name: string;
  email: string;
  position: string;
  last_edited: string;
}> = ({ id, name, email, position, last_edited }) => {

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const editUserModalContext = useContext(ModalContext);

  const dispatch = useAppDispatch();

  const editFormHandler = () => {
    setIsEditing((state) => {
      return !state
    })
    editUserModalContext.setIsDisplaying(true)
  };

  const deleteUserHandler = async () => {

    const conformation = window.confirm("Are you sure you want to delete this user?")

    if (conformation) {
      dispatch(usersActions.deleteUser(id))
      await deleteUser(id)
    } else {
      return
    }

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
      <div className={classes['buttons-container']}>
      <button onClick={editFormHandler}>Edit</button>
      <button onClick={deleteUserHandler}>Delete</button>
      </div>
    </div>
    {isEditing && <EditUserForm name={name} email={email} position={position} id={id} hideEditForm={editFormHandler}/>}
    </>
  );
};

export default UserListItem;
