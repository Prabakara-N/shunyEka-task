import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

// create user
export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ user, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createUser(user);
      toast.success("User Added Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// get users
export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getUsers();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// delete user
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteUser(id);
      toast.success("User Deleted");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// update users
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ id, user, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.updateUser(user, id);
      toast.success("User Updated Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// single user
export const singleUser = createAsyncThunk(
  "user/singleUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.singleUser(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: {},
    users: [],
  },
  extraReducers: {
    // create
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = [action.payload];
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    // get users
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    // delete user
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.meta.arg;
      if (id) {
        state.users = state.users.filter((user) => user._id !== id);
      }
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    // update user
    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.meta.arg;
      if (id) {
        state.users = state.users.map((user) =>
          user._id === id ? action.payload : user
        );
      }
    },
    [updateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    // get single user
    [singleUser.pending]: (state) => {
      state.loading = true;
    },
    [singleUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [singleUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default userSlice.reducer;
