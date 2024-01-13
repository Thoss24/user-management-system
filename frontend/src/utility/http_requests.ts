import { UserRowSql } from "../models/user_sql_row";

export const fetchUsers = async () => {
    try {
      const response = await fetch(
        "http://localhost/user-management-system/backend/api.php",
        {
          method: "GET",
        }
      );

      const data = await response.json();

      return data;
    } catch (err: unknown) {
      if (err instanceof Error) {
        return err.message;
      }
    }
};

export const addUser = async (user: UserRowSql) => {
  try {
    const response = await fetch('http://localhost/user-management-system/backend/api.php', {
        method: 'POST',
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw Error("Something went wrong!")
    }

} catch (error) {
    console.error('Error:', error)
}
}

export const editUser = async (user: UserRowSql) => {
  console.log(user)
  try {
    const response = await fetch('http://localhost/user-management-system/backend/api.php?_method=PUT', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw Error("Something went wrong!")
    }


} catch (error) {
    console.error('Error:', error)
}
}