import { useAppDispatch } from "../../hooks/hooks";
import { useState, useContext } from "react";
import classes from "./EditUserForm.module.css";
import { editUser } from "../../utility/http_requests";
import { UserRowSql } from "../../models/user_sql_row";
import useDateTime from "../../hooks/date_time";
import { usersActions } from "../../store/users_slice";
import { ModalContext } from "../../store/edit_user_context_modal";

const EditUserForm: React.FC<{
  name: string;
  email: string;
  position: string;
  id: number;
  hideEditForm: () => void;
}> = (props) => {
  const [name, setName] = useState<string>(props.name);
  const [email, setEmail] = useState<string>(props.email);
  const [position, setPosition] = useState<string>(props.position);

  const dispatch = useAppDispatch();

  const dateTime = useDateTime();

  const editUserModalContext = useContext(ModalContext);

  const editUserHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(props.id)

    const user: UserRowSql = {
      id: props.id,
      name: name,
      email: email,
      position: position,
      last_edited: dateTime
    };

    await editUser(user);

    dispatch(usersActions.editUser(user))

    props.hideEditForm();
    editUserModalContext.setIsDisplaying(false)
  };

  const closeEditUserHandler = () => {
    props.hideEditForm();
    editUserModalContext.setIsDisplaying(false)
  };

  return (
    <div className={classes["edit-form-container"]}>
      <form
        action=""
        className={classes["edit-user-form"]}
        onSubmit={editUserHandler}
      >
        <fieldset>
          <legend>Edit User</legend>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              defaultValue={props.name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              defaultValue={props.email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              defaultValue={props.position}
              onChange={(e) => setPosition(e.currentTarget.value)}
            />
          </div>
        </fieldset>
        <div className={classes['buttons-container']}>
        <button type="submit">Done</button>
        <button type="button" onClick={closeEditUserHandler}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;
