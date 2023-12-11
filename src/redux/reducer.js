import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;