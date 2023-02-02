import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    console.log(`Register user ${JSON.stringify(user)}`)
    console.log(user)
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    console.log(`Login user ${JSON.stringify(user)}`)
    console.log(user)
  }
)

const initialState = {
  isLoading: false,
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
})

export default userSlice.reducer
