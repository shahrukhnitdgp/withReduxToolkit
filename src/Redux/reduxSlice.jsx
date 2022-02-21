import { createSlice} from '@reduxjs/toolkit';


const initialState = {
    input1:''
}

const counterSlice = createSlice({
    name: 'basic',
    initialState,
    reducers: {
        setInput1Redux(state, action) {
            state.input1 = action.payload
        },
    }
})



export const { setInput1Redux } = counterSlice.actions
export default counterSlice.reducer