
/*
0  1  2  3  4  5  6
7  8  9  10 11 12 13
14 15 16 17 18 19 20
21 22 23 24 25 26 27
28 29 30 31 32 33 34
35 36 37 38 39 40 41
*/
// DIAGONAL /
// let grid = Array.from({ length : 42 }, (_, i) => ({ color: '' }))
// for (let i = 11; i < 30; i+=6) {
//   grid[i].color = 'red';
// }
// let gridBefore = copyGrid(grid)
// gridBefore[11].color = ''
// console.log(calculateWins(grid, gridBefore, 11))
// // DIAGONAL \
// grid = Array.from({ length : 42 }, (_, i) => ({ color: '' }))
// for (let i = 16; i < 41; i+=8) {
//   grid[i].color = 'red';
// }
// grid[39].color = 'blue';
// grid[38].color = 'blue';
// grid[37].color = 'blue';
// grid[31].color = 'blue';
// grid[30].color = 'blue';
// grid[36].color = 'red';
// grid[23].color = 'blue';
// let gridBefore = copyGrid(grid)
// gridBefore[16].color = ''

// let index = 16
// let RED = 'red'
// let BLUE = 'blue'
// const redIsUp = true;
// let g = copyGrid(grid)
// let gBefore = copyGrid(grid)
// let k = findOpenIndex(g, index)
// if (k === -1) return;
// if (redIsUp) {
//   g[k].color = RED
// } else {
//   g[k].color = BLUE
// }
// const { won:isOver, winningColor } = calculateWins(g, gBefore, index)
// console.log(calculateWins(g, gBefore, index))
// console.log(calculateWins(grid, gridBefore, 16))
// console.log(isOver, winningColor)
// // HORIZONTAL
// let grid = Array.from({ length : 42 }, (_, i) => ({ color: '' }))
// for (let i = 37; i < 41; i++) {
//     grid[i].color = 'red';
//   }
// let gridBefore = grid.slice()
// grid[38].color = ''
// // console.log(27,getMatricies(grid, 27))
//   console.log(calculateWins(grid, gridBefore, 38))
// // Verts
// let grid;
// grid = Array.from({ length : 42 }, (_, i) => ({ color: '' }))
// for (let i = 14; i < 36; i+=7) {
//   grid[i].color = 'red';
// }

// for (let k = 0; k < 7; k++) {
//   console.log(findOpenIndex(grid, k))
// }
// console.log(6,getMatricies(6))
// console.log(9,getMatricies(9))
// console.log(13,getMatricies(13))
// console.log(0,getMatricies(0))
// console.log(41,getMatricies(41))
// console.log(25,getMatricies(25))
// console.log(14,getMatricies(14))
// console.log(36,getMatricies(36))
// console.log(27,getMatricies(27))
// grid = Array.from({ length : 42 }, (_, i) => ({ color: '' }))
// // HORIZONTAL
// grid = Array.from({ length : 42 }, (_, i) => ({ color: '' }))
// for (let i = 37; i < 41; i++) {
//     grid[i].color = 'red';
//   }
//   console.log(calculateWins(grid, 38))
//   // DIAGONAL /
//   grid = Array.from({ length : 42 }, (_, i) => ({ color: '' }))
//   for (let i = 11; i < 30; i+=6) {
//     grid[i].color = 'red';
//   }
//   console.log(calculateWins(grid, 11))
//   // DIAGONAL \
//   grid = Array.from({ length : 42 }, (_, i) => ({ color: '' }))
//   for (let i = 14; i < 39; i+=8) {
//     grid[i].color = 'red';
//   }
//   console.log(calculateWins(grid, 30))