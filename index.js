const express = require('express')
const app = express()

// Endpoint to delay response
app.get('/', (req, res) => {
  const sleepTime = req.query.sleep
  if (!sleepTime) {
    return res.status(400).json({ error: 'sleep query parameter is required' })
  }

  const sleepMs = parseInt(sleepTime)

  if (isNaN(sleepMs)) {
    return res
      .status(400)
      .json({ error: 'Invalid sleep time. Please provide a valid number' })
  }

  setTimeout(() => {
    res.json({
      message: `Response delayed for ${sleepMs} milliseconds`,
    })
  }, sleepMs)
})

// Start the server
const port = 8000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
