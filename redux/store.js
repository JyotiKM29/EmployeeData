'use client'
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        employee: employeeSlice.reducer,
       
      },
})