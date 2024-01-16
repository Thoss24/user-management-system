import classes from "./UsersList.module.css";

const UsersFilters: React.FC<{ setPosition: (val: string) => void }> = (
  props
) => {

  return (
    <div className={classes.options}>
      <strong>Filter by position:</strong>
      <select
        onChange={(e) => props.setPosition(e.target.value)}
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
  );
};

export default UsersFilters;
