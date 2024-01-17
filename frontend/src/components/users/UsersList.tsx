import UserListItem from "./UserListItem";
import { useEffect, useState } from "react";
import { useAppDispatch } from '../../hooks/hooks';
import { useAppSelector } from '../../hooks/hooks';
import { usersActions } from "../../store/users_slice";
import { fetchUsers } from "../../utility/http_requests";
import UsersFilters from "./UsersFilters";
import classes from './UsersList.module.css';

const UsersList: React.FC<{}> = () => {

  const usersState = useAppSelector(state => state.users.users);

  const [position, setPosition] = useState<string>("All Staff");

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      dispatch(usersActions.updateUsers(data))
    };
    fetchData()
  }, []);

  const handleSetPositionCallback = (ChildData: string) => {
    setPosition(ChildData)
    console.log(position)
  };

  let users = usersState && position === "All Staff" ? usersState : usersState.filter(item => item.position === position);

  return (
    <>
    <div className={classes['users-page']}> 
    <h2>Current Users</h2>
    <UsersFilters handleSetPosition={handleSetPositionCallback} position={position}/>
    <div className={classes['users-list']}>
      {usersState &&
        users.map((item) => (
          <UserListItem
            name={item.name}
            email={item.email}
            position={item.position}
            last_edited={item.last_edited}
            key={item.id}
            id={item.id}
          />
        ))}
    </div>
    </div>
    </>
  );
};

export default UsersList;
