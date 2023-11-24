import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_WIDTH = 8
const DEFAULT_HEIGHT = 8

const EMPTY = 0
const WHITE = 1
const BLACK = 2


function changeFixed(state, row, col, type) {
  console.log('changeFixed', row, col, type)

  if(state.current[row][col] === type){
    state.current[row][col] = EMPTY
    state.fixed = state.fixed.filter( cell => cell[0] !== row || cell[1] !== col)
  } else {
    if(state.current[row][col] === EMPTY) state.fixed.push([row,col])
    state.current[row][col] = type
  }
}

function changeCurrent(state, row, col, type) {
  if(state.fixed[row][col] !== EMPTY) return

  if(state.current[row][col] === type){
    state.current[row][col] = EMPTY
  } else {
    state.current[row][col] = type
  }
}

function changeCell(state, row, col, type) {
  if(state.fixing) changeFixed(state, row, col, type)
  else changeCurrent(state, row, col, type)
}

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    height: DEFAULT_WIDTH,
    width: DEFAULT_HEIGHT,
    fixing: true,
    fixed: [],
    current: [...Array(DEFAULT_HEIGHT)].map(e => Array(DEFAULT_WIDTH).fill(EMPTY)),
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
    setMode: (state, action) => {
      state.fixing = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { rightClick, leftClick } = boardSlice.actions
export { EMPTY, WHITE, BLACK}

export default boardSlice.reducer
