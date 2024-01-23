const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchApiUsers = createAsyncThunk("fetchApiUsers" , async() =>{
    const result = await fetch('https://653686dbbb226bb85dd244f8.mockapi.io/employee');

   return result.json();
}) 

const initialState = {
  userAPIData: [],
};

const EmpoyeeSlice = createSlice({
  name: "addUserSlice",
  initialState,
  reducer: { 
    addUser: (state, action) => {
        
    } ,
    removeUser: (state, action) => {

    } },
    extraReducers:(builder) =>{
        builder.addCase(fetchApiUsers.fulfilled, (state,action)=>{
            state.isloading = false;
            state.userAPIData = action.payload;
        })
    }


});

export const {addUser ,removeUser} = Slice.actions;

export default Slice.reducer;
