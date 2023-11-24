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
    leftClick: (state, action) => {
      const [row, col] = action.payload
      console.log(row, col)
      // console.log(state.value)
    },
    rightClick: (state, action) => {
      const [row, col] = action.payload
      console.log('right click')
      console.log(row, col)
    },
  },
})

// Action creators are generated for each case reducer function
export const { rightClick, leftClick } = boardSlice.actions
export { EMPTY, WHITE, BLACK}

export default boardSlice.reducer
