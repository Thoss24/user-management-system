import UserListItem from "./UserListItem";
import { useEffect } from "react";
import { useAppDispatch } from '../../hooks/hooks';
import { useAppSelector } from '../../hooks/hooks';
import { usersActions } from "../../store/users_slice";
import { fetchUsers } from "../../utility/http_requests";

const UsersList: React.FC<{}> = () => {

  const usersState = useAppSelector(state => state.users.users);

  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      dispatch(usersActions.updateUsers(data))
    };
    fetchData();
  }, [usersState]);

  return (
    <ul>
      {usersState &&
        usersState.map((item) => (
          <UserListItem
            name={item.name}
            email={item.email}
            position={item.position}
            lastEdited={item.lastEdited}
            key={item.id}
            id={item.id}
          />
        ))}
    </ul>
  );
};

export default UsersList;
