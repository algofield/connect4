const findOpenIndex = (grid, index) => {
  // VERTICAL
  let vertMatrix = []
  // down
  let i = index - 7
  do {
    i += 7
    vertMatrix.push(i)
  } while (i < 35)
  vertMatrix = vertMatrix.sort((a,b) => b - a)
  // up
  i = index
  while (i > 6) {
    i -= 7
    vertMatrix.push(i)
  }
  let colorMatrix = vertMatrix.map(i => grid[i].color)
  for (let i = 0, len = colorMatrix.length; i < len; i++) {
    if ('' === colorMatrix[i]) {
      return vertMatrix[i]
    }
  }
  return -1
}

const getMatricies = (gridBefore, index) => {
  let matrix = []
  let m = []
  let i
  // DIAGONAL /
  // diagonal left down
  if (index % 7 !== 0){
    i = index - 6
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
  matrix.push(m)
  
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
  let k = findOpenIndex(gridBefore, index)
  if (k > -1) {
    m = []
    i = k + 1
    do {
      i--
      if (i !== k) {
        m.push(i)
      }
    } while (i % 7 !== 0)
    m = m.sort((a,b) => a - b)
    // left
    i = k - 1
    do {
      i++
      m.push(i)
    } while ((i + 1) % 7 !== 0)
    
    matrix.push(m.slice())
  }
  
  // VERTICAL
  m = []
  // down
  i = index - 7
  do {
    i += 7
    m.push(i)
  } while (i < 35)
  m = m.sort((a,b) => b - a)
  // up
  i = index
  while (i > 6) {
    i -= 7
    m.push(i)
  }
   
  matrix.push(m)
  // console.log(matrix)
  return matrix
}

const calculateWins = (grid, gridBefore, index) => {
  let matricies = getMatricies(gridBefore, index)
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

const copyGrid = (grid) => {
  const newGrid = []
  for (const elem of grid) {
    newGrid.push({ color: elem.color })
  }
  return newGrid;
}
/*
0  1  2  3  4  5  6
7  8  9  10 11 12 13
14 15 16 17 18 19 20
21 22 23 24 25 26 27
28 29 30 31 32 33 34
35 36 37 38 39 40 41
*/
export { calculateWins, findOpenIndex, copyGrid }
