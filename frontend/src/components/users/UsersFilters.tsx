import classes from "./UsersList.module.css";

const UsersFilters: React.FC<{ handleSetPosition: (val: string) => void, position: string }> = (
  props
) => {

  return (
    <div className={classes.options}>
    <strong>Filter by position:</strong>
    <label htmlFor="">
    <select
      onChange={e => props.handleSetPosition(e.target.value)}
      name="staff_members_positions"
      title="Filter by position"
      id="staff_members_positions"
      value={props.position}
    >
      <option>All Staff</option>
      <option>Lecturer</option>
      <option>Reader</option>
      <option>Senior Lecturer</option>
      <option>Professor</option>
    </select>
    </label>
  </div>
  );
};

export default UsersFilters;
