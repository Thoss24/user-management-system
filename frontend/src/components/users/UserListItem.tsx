import { UserRowSql } from "../../models/user_sql_row";

const UserListItem = ({id, name, email, position, lastEdited}: UserRowSql) => {
    return (
        <li>
            <p>{name}</p>
            <p>{email}</p>
            <p>{position}</p>
            <p>{lastEdited}</p>
        </li>
    )
};

export default UserListItem;