const grid = Array.from({ length : 42 }, (_, i) => { color: '' })
let s = `
0  1  2  3  4  5  6
7  8  9  10 11 12 13
14 15 16 17 18 19 20
21 22 23 24 25 26 27
28 29 30 31 32 33 34
35 36 37 38 39 40 41
`
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
// console.log(6,getMatricies(6))
// console.log(9,getMatricies(9))
// console.log(13,getMatricies(13))
// console.log(0,getMatricies(0))
// console.log(41,getMatricies(41))
// console.log(25,getMatricies(25))
// console.log(14,getMatricies(14))
// console.log(36,getMatricies(36))
// console.log(27,getMatricies(27))

const calculateWins = (grid, index) => {
  matricies = getMatricies()
}