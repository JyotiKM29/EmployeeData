'use client'
const { createSlice, createAsyncThunk, configureStore } = require("@reduxjs/toolkit");

// Key for storing data in local storage
const LOCAL_STORAGE_KEY = 'employeeData';

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
  const result = await fetch('https://653686dbbb226bb85dd244f8.mockapi.io/employee');
  return result.json();
});

// Function to load data from local storage
const loadFromLocalStorage = () => {
  const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : [];
};

const initialState = {
  userAPIData: loadFromLocalStorage(),
  isLoading: false,
  userList: loadFromLocalStorage(),
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userAPIData = [...state.userAPIData, action.payload];
      state.userList = [...state.userList, action.payload];
      // Save data to local storage
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.userList));
    },
    removeUser: (state, action) => {
      state.userAPIData = state.userAPIData.filter(user => user.id !== action.payload);
      state.userList = state.userList.filter(user => user.id !== action.payload);
      // Save data to local storage
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.userList));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApiUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userAPIData = action.payload;
        state.userList = action.payload;
        // Save data to local storage
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.userList));
      })
      .addCase(fetchApiUsers.rejected, (state) => {
        state.isLoading = false;
        // Handle error state if needed
      });
  },
});

export const { addUser, removeUser } = employeeSlice.actions;

const store = configureStore({
  reducer: {
    employee: employeeSlice.reducer,
  },
});

export default store;
