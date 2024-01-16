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
};

export const editUser = async (user: UserRowSql) => {
  try {
    const response = await fetch('http://localhost/user-management-system/backend/api.php', {
        method: 'PATCH',
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw Error("Something went wrong!")
    }

} catch (error) {
    console.error('Error:', error)
}
};

export const deleteUser = async (id: number) => {
  try {
    const response = await fetch('http://localhost/user-management-system/backend/api.php', {
      method: 'DELETE',
      body: JSON.stringify(id)
    });

    if (!response.ok) {
      throw new Error("Something went wrong!")
    }

  } catch (error) {
    console.log('Error:', error)
  }
};