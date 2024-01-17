import classes from "./NewUserForm.module.css";
import { useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { usersActions } from "../../store/users_slice";
import { useAppDispatch } from "../../hooks/hooks";
import { UserRowSql } from "../../models/user_sql_row";
import { addUser } from "../../utility/http_requests";
import useDateTime from "../../hooks/date_time";

const NewUserForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [position, setPosition] = useState<string>("");

  const userState = useAppSelector((state) => state.users.users);
  const newUserId = userState.length + 1;

  const dateTime = useDateTime();

  const addNewUserHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user: UserRowSql = {
      id: newUserId,
      name: name,
      email: email,
      position: position,
      last_edited: dateTime,
    };

    await addUser(user);

    dispatch(usersActions.addUser(user));

    setName("");
    setEmail("");
    setPosition("");
  };

  return (
    <form
      action="POST"
      className={classes["new-user-form"]}
      onSubmit={addNewUserHandler}
    >
      <fieldset>
        <legend>Add new user</legend>
        <div className={classes["input-section"]}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={classes["input-section"]}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={classes["input-section"]}>
          <label htmlFor="position">Position</label>
          <select name="position" id="position" onChange={(e) => setPosition(e.target.value)}>
            <option>Lecturer</option>
            <option>Reader</option>
            <option>Senior Lecturer</option>
            <option>Professor</option>
          </select>
          {/* <input type="text" id="position" name='position' onChange={(e) => setPosition(e.target.value)}/> */}
        </div>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default NewUserForm;
