import { createSlice } from '@reduxjs/toolkit'

export const studentSlice = createSlice({
    name: 'counter',
    initialState: {
      name : 'Charan',
      student_id : '53501',
      hall : 'RK Hall of residence',
      department : 'Geology and Geophysics',
    },
    reducers: {
      
        updateStudent: (state, action) => {
            state.value += action.payload
          },
      
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { updateStudent } = studentSlice.actions
  
  export default studentSlice.reducer