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