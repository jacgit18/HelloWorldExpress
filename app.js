const express = require('express')
const app = express()
const port = 4000 // optional port range 3000-3999, 8000, 8080, 9000

// setup route handler
// app.get(urlPath, routeHandlerFunction);
// app.post(...);
// app.put();
// app.delete();
// app.listen(port);

// route handler
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/secret', (req, res) => {
  res.status(500).json({msg: "secret message"});
})

// dynamic route
app.get('/zip/:zipCode', (req, res) => {
  res.status(500).json({msg: "zip  code is "+req.params.zipCode});
})

// start and litsen for request
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})