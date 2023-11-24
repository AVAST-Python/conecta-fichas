import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_WIDTH = 8
const DEFAULT_HEIGHT = 8

const EMPTY = 0
const WHITE = 1
const BLACK = 2

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    height: DEFAULT_WIDTH,
    width: DEFAULT_HEIGHT,
    fixed: [],
    // current: [...Array(DEFAULT_HEIGHT)].map(e => Array(DEFAULT_WIDTH).fill(EMPTY)),
    current: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 1, 0, 0, 0, 0, 0],
      [0, 1, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 1, 0, 0, 0],
      [0, 0, 0, 1, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 1, 0],
      [0, 0, 0, 0, 0, 1, 2, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ]
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = boardSlice.actions
export { EMPTY, WHITE, BLACK}

export default boardSlice.reducer
