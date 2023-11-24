import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_WIDTH = 8
const DEFAULT_HEIGHT = 8

const EMPTY = 0
const WHITE = 1
const BLACK = 2


function changeCell(state, row, col, type) {
  if(state.fixed[row][col] !== EMPTY) return

  if(state.current[row][col] === type){
    state.current[row][col] = EMPTY
  } else {
    state.current[row][col] = type
  }
}

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    height: DEFAULT_WIDTH,
    width: DEFAULT_HEIGHT,
    fixing: true,
    fixed: [...Array(DEFAULT_HEIGHT)].map(e => Array(DEFAULT_WIDTH).fill(EMPTY)),
    // fixed: [
    //   { cell: [1, 1], color: WHITE },
    //   { cell: [2, 2], color: BLACK },
    // ],
    current: [...Array(DEFAULT_HEIGHT)].map(e => Array(DEFAULT_WIDTH).fill(EMPTY)),
    // current: [
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 2, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 2, 1, 0, 0, 0],
    //   [0, 0, 0, 1, 2, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 2, 1, 0],
    //   [0, 0, 0, 0, 0, 1, 2, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    // ]
  },
  reducers: {
    leftClick: (state, action) => {
      const [row, col] = action.payload
      changeCell(state, row, col, WHITE)
    },
    rightClick: (state, action) => {
      const [row, col] = action.payload
      changeCell(state, row, col, BLACK)
    },
    setCellFixed: (state, action) => {
      // const { cell: [row, col], color } = action.payload
      // state.fixed.push([row, col])
    },
  },
})

// Action creators are generated for each case reducer function
export const { rightClick, leftClick } = boardSlice.actions
export { EMPTY, WHITE, BLACK}

export default boardSlice.reducer
