const getMatricies = (index) => {
  let matrix = []
  let m = []
  // DIAGONAL /
  // diagonal left down
  if (index % 7 !== 0){
    let i = index - 6
    do {
      i += 6
      if (i !== index) {
        m.push(i)
      }
    } while (i < 35 && i % 7 !== 0)
    m = m.sort((a,b) => b - a)
  }
  // diagonal right up
  i = index + 6
  do {
    i-=6
    m.push(i)
  } while (i > 6 && (i + 1) % 7 !== 0)
  matrix.push(m.slice())
  
  // DIAGONAL \
  m = []
  // diagonal right down
    i = index - 8
    do {
      i += 8
      if (i !== index) {
        m.push(i)
      }
    } while (i < 35 && (i + 1) % 7 !== 0)
    m = m.sort((a,b) => b - a)
  // diagonal left up
  i = index + 8
  do {
    i-=8
    m.push(i)
  } while (i > 6 && i % 7 !== 0)
  matrix.push(m.slice())
  
  // HORIZONTAL
  // right
  m = []
  i = index + 1
  do {
    i--
    if (i !== index) {
      m.push(i)
    }
  } while (i % 7 !== 0)
  m = m.sort((a,b) => a - b)
  // left
  i = index - 1
  do {
    i++
    m.push(i)
  } while ((i + 1) % 7 !== 0)
  
  matrix.push(m.slice())
  m = []
  return matrix;
}

const calculateWins = (grid, index) => {
  matricies = getMatricies(index)
  return matricies.reduce((overall, arr) => {
    if (overall.won) {
      return overall;
    }
    arr = arr.map(i => grid[i].color)
    let currentColor = arr[0]
    arr = arr.slice(1)
    let maxSameColor = arr.reduce((acc, color) => {
      if (acc === 4) return 4;
      if (color && color === currentColor) {
        return acc + 1
      }
      currentColor = color
      return 1
    }, 1)
    if (maxSameColor === 4) {
      overall.won = true
      overall.winningColor = currentColor
    }
    return overall
    
  }, { won: false, winningColor: ''})
}

/*
0  1  2  3  4  5  6
7  8  9  10 11 12 13
14 15 16 17 18 19 20
21 22 23 24 25 26 27
28 29 30 31 32 33 34
35 36 37 38 39 40 41
*/
// console.log(6,getMatricies(6))
// console.log(9,getMatricies(9))
// console.log(13,getMatricies(13))
// console.log(0,getMatricies(0))
// console.log(41,getMatricies(41))
// console.log(25,getMatricies(25))
// console.log(14,getMatricies(14))
// console.log(36,getMatricies(36))
// console.log(27,getMatricies(27))
// let grid = Array.from({ length : 42 }, (_, i) => { color: '' })
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

export default calculateWins