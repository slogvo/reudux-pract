import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUser,
  deleteUser,
  fetchUsers,
  updateUser,
} from "../redux-toolkit/usersSlice";

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleCreateUser = () => {
    const newUser = { name: "John Doe", email: "john@example.com" };
    dispatch(createUser(newUser));
  };

  const handleUpdateUser = (userId) => {
    const updatedUser = {
      id: userId,
      name: "Jane Doe",
      email: "jane@example.com",
    };
    dispatch(updateUser(updatedUser));
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div>
      <button onClick={handleCreateUser}>Create User</button>
      {users.map((user) => (
        <div key={user.id}>
          <span>{user.title}</span>
          <span>{user.body}</span>
          <button
            className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
            onClick={() => handleUpdateUser(user.id)}
          >
            Update
          </button>
          <button
            className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
            onClick={() => handleDeleteUser(user.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
