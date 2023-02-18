const path = require('path')
const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.static('dist'))

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  }
  let [hours, minutes, seconds] = (new Date()).toString()
    .slice(16, 24).split(':').map(Number)
  let amPm = hours > 11 && hours < 24 ? 'pm' : 'am'

  if (hours > 12) {
    hours -= 12
  }
  hours += hours === 0 ? 12 : 0
  
  let time = `${hours}:${minutes}:${seconds} ${amPm}`

  console.log(`Server launched on port=${port} at ${time}.`)
})
