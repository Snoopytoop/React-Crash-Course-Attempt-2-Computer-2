import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const { username } = useParams();

  const [users, setUsers] = useState({});

  async function fetchUsers() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${username}`
    );
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
    <Link to="/">Go back</Link>
      <div style={{ border: `3px solid black`, padding: `8px`}}>{users.name}</div>
      <div style={{ border: `3px solid black`, padding: `8px` }}>{users.email}</div>
      <div style={{ border: `3px solid black`, padding: `8px` }}>{users.id}</div>
    </>
  );
}

export default Users;
