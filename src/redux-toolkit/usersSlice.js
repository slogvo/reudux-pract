import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Action creator lấy danh sách người dùng
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log("🚀 ~ fetchUsers ~ response.data():", response.data);
  return response.data;
});

//Action creator để lấy người dùng mới
export const createUser = createAsyncThunk("users/createUser", async () => {
  const response = await axios.post("https://api.example.com/users");
  return response.data();
});

//Action creator để cập nhật thông tin người dùng
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (userId) => {
    const response = await axios.put(`https://api.example.com/users/${userId}`);
    return response.data;
  }
);

//Action creator để xóa thông tin người dùng
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    const response = await axios.delete(
      `https://api.example.com/users/${userId}`
    );
    return response.data;
  }
);

//Slice
const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const { id } = action.payload;
        const existingUser = state.find((user) => user.id === id);
        if (existingUser) {
          Object.assign(existingUser, action.payload);
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const userId = action.payload;
        return state.filter((user) => user.id !== userId);
      });
  },
});

export default usersSlice.reducer;
