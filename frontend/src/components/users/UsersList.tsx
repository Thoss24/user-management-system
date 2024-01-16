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

  const [position, setPosition] = useState<string>("all");

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

  let positionFilter = (
    <div className={classes.options}>
    <strong>Filter by position:</strong>
    <select
      onChange={(e) => handleSetPositionCallback(e.target.value)}
      name="staff_members_positions"
      title="Filter by position"
      id="staff_members_positions"
    >
      <option>All Staff</option>
      <option>Lecturer</option>
      <option>Reader</option>
      <option>Senior Lecturer</option>
      <option>Professor</option>
    </select>
  </div>
  )

  return (
    <>
    <div className={classes['users-page']}> 
    <h2>Current Users</h2>
    {positionFilter}
    <div className={classes['users-list']}>
      {usersState &&
        usersState.filter(item => item.position === position).map((item) => (
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
